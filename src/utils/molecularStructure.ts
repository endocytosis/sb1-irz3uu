import type { AminoAcid } from '../types';

interface Atom {
  type: string;
  serial: number;
  name: string;
  resName: string;
  resSeq: number;
  x: number;
  y: number;
  z: number;
  occupancy: number;
  tempFactor: number;
  element: string;
}

// pKa values for ionizable groups
const pKaValues = {
  'N_TERM': 9.69,   // α-amino group
  'C_TERM': 2.34,   // α-carboxyl group
  'ASP_CG': 3.65,   // Aspartic acid side chain
  'GLU_CD': 4.25,   // Glutamic acid side chain
  'HIS_ND1': 6.00,  // Histidine side chain
  'CYS_SG': 8.18,   // Cysteine side chain
  'TYR_OH': 10.07,  // Tyrosine side chain
  'LYS_NZ': 10.53,  // Lysine side chain
  'ARG_NH': 12.48   // Arginine side chain
};

// Parse PDB format line into atom object
function parseAtomLine(line: string): Atom {
  return {
    type: line.substring(0, 6).trim(),
    serial: parseInt(line.substring(6, 11)),
    name: line.substring(12, 16).trim(),
    resName: line.substring(17, 20).trim(),
    resSeq: parseInt(line.substring(22, 26)),
    x: parseFloat(line.substring(30, 38)),
    y: parseFloat(line.substring(38, 46)),
    z: parseFloat(line.substring(46, 54)),
    occupancy: parseFloat(line.substring(54, 60)),
    tempFactor: parseFloat(line.substring(60, 66)),
    element: line.substring(76, 78).trim()
  };
}

// Format atom object back to PDB format
function formatAtomLine(atom: Atom): string {
  return `${atom.type.padEnd(6)}${atom.serial.toString().padStart(5)} ${
    atom.name.padStart(4)}${atom.resName.padStart(4)}${
    atom.resSeq.toString().padStart(5)}${
    atom.x.toFixed(3).padStart(12)}${
    atom.y.toFixed(3).padStart(8)}${
    atom.z.toFixed(3).padStart(8)}${
    atom.occupancy.toFixed(2).padStart(6)}${
    atom.tempFactor.toFixed(2).padStart(6)}${
    ''.padStart(10)}${atom.element.padStart(2)}`;
}

// Calculate protonation state based on pH and pKa
function shouldBeProtonated(pH: number, pKa: number): boolean {
  return pH < pKa;
}

// Add hydrogen atom to an existing atom
function addHydrogen(baseAtom: Atom, offset: { x: number; y: number; z: number }): Atom {
  return {
    type: "HETATM",
    serial: baseAtom.serial + 1,
    name: "H",
    resName: baseAtom.resName,
    resSeq: baseAtom.resSeq,
    x: baseAtom.x + offset.x,
    y: baseAtom.y + offset.y,
    z: baseAtom.z + offset.z,
    occupancy: 1.00,
    tempFactor: 0.00,
    element: "H"
  };
}

export function getProtonatedStructure(aminoAcid: AminoAcid, pH: number): string {
  const lines = aminoAcid.structure.split('\n');
  const atoms: Atom[] = [];
  const modifiedAtoms: Atom[] = [];

  // Parse all atoms
  lines.forEach(line => {
    if (line.startsWith('HETATM')) {
      atoms.push(parseAtomLine(line));
    }
  });

  // Process each atom based on pH
  atoms.forEach(atom => {
    modifiedAtoms.push(atom);

    // Handle side chain protonation states
    switch (aminoAcid.code) {
      case 'D': // Aspartic acid
        if (atom.name === 'OD1' && shouldBeProtonated(pH, pKaValues.ASP_CG)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0.98, y: 0, z: 0 }));
        }
        break;
      case 'E': // Glutamic acid
        if (atom.name === 'OE1' && shouldBeProtonated(pH, pKaValues.GLU_CD)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0.98, y: 0, z: 0 }));
        }
        break;
      case 'H': // Histidine
        if (atom.name === 'ND1' && shouldBeProtonated(pH, pKaValues.HIS_ND1)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0, y: 0.98, z: 0 }));
        }
        break;
      case 'K': // Lysine
        if (atom.name === 'NZ' && shouldBeProtonated(pH, pKaValues.LYS_NZ)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0, y: 0.98, z: 0 }));
          modifiedAtoms.push(addHydrogen(atom, { x: 0.85, y: -0.49, z: 0 }));
          modifiedAtoms.push(addHydrogen(atom, { x: -0.85, y: -0.49, z: 0 }));
        }
        break;
      case 'C': // Cysteine
        if (atom.name === 'SG' && shouldBeProtonated(pH, pKaValues.CYS_SG)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0.98, y: 0, z: 0 }));
        }
        break;
      case 'Y': // Tyrosine
        if (atom.name === 'OH' && shouldBeProtonated(pH, pKaValues.TYR_OH)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0, y: 0.98, z: 0 }));
        }
        break;
      case 'R': // Arginine
        if (atom.name === 'NH1' && shouldBeProtonated(pH, pKaValues.ARG_NH)) {
          modifiedAtoms.push(addHydrogen(atom, { x: 0.98, y: 0, z: 0 }));
          modifiedAtoms.push(addHydrogen(atom, { x: -0.49, y: 0.85, z: 0 }));
        }
        break;
    }
  });

  // Sort atoms by serial number
  modifiedAtoms.sort((a, b) => a.serial - b.serial);

  // Convert back to PDB format
  return modifiedAtoms.map(formatAtomLine).join('\n') + '\nEND';
}