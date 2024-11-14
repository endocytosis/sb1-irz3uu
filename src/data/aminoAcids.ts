export const aminoAcids = [
  {
    name: "Alanine",
    code: "A",
    threeLetter: "Ala",
    structure: `HETATM    1  N   ALA     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  ALA     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   ALA     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   ALA     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  ALA     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  H1  ALA     1       0.577   1.856  -0.977  1.00  0.00           H  
HETATM    7  H2  ALA     1       0.615   1.082   0.485  1.00  0.00           H  
HETATM    8  H3  ALA     1       0.615   2.739   0.375  1.00  0.00           H  
HETATM    9  HA  ALA     1       2.758   2.042  -1.069  1.00  0.00           H  
HETATM   10  HB1 ALA     1       2.652   2.834   1.866  1.00  0.00           H  
HETATM   11  HB2 ALA     1       2.652   3.975   0.466  1.00  0.00           H  
HETATM   12  HB3 ALA     1       4.079   2.999   0.834  1.00  0.00           H  
HETATM   13  OXT ALA     1       4.176   0.382   0.475  1.00  0.00           O  
END`,
    description: "A nonpolar amino acid with a simple methyl group side chain, often found in alpha helices and involved in protein stability.",
    category: "hydrophobic"
  },
  {
    name: "Arginine",
    code: "R",
    threeLetter: "Arg",
    structure: `HETATM    1  N   ARG     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  ARG     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   ARG     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   ARG     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  ARG     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  ARG     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD  ARG     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  NE  ARG     1       6.551   4.125   1.705  1.00  0.00           N  
HETATM    9  CZ  ARG     1       7.115   5.247   2.576  1.00  0.00           C  
HETATM   10  NH1 ARG     1       8.615   5.249   2.576  1.00  0.00           N  
HETATM   11  NH2 ARG     1       6.679   6.369   3.447  1.00  0.00           N  
END`,
    description: "A positively charged amino acid with a long side chain ending in a guanidinium group, important for protein-protein interactions and DNA binding.",
    category: "charged"
  },
  {
    name: "Asparagine",
    code: "N",
    threeLetter: "Asn",
    structure: `HETATM    1  N   ASN     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  ASN     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   ASN     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   ASN     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  ASN     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  ASN     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  OD1 ASN     1       5.051   4.123   1.705  1.00  0.00           O  
HETATM    8  ND2 ASN     1       5.115   1.879   0.834  1.00  0.00           N  
END`,
    description: "A polar amino acid with an amide side chain, often involved in protein-protein interactions and hydrogen bonding.",
    category: "polar"
  },
  {
    name: "Aspartic Acid",
    code: "D",
    threeLetter: "Asp",
    structure: `HETATM    1  N   ASP     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  ASP     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   ASP     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   ASP     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  ASP     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  ASP     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  OD1 ASP     1       5.051   4.123   1.705  1.00  0.00           O  
HETATM    8  OD2 ASP     1       5.115   1.879   0.834  1.00  0.00           O  
END`,
    description: "A negatively charged amino acid with a carboxyl side chain, important for protein stability and enzyme active sites.",
    category: "charged"
  },
  {
    name: "Cysteine",
    code: "C",
    threeLetter: "Cys",
    structure: `HETATM    1  N   CYS     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  CYS     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   CYS     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   CYS     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  CYS     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  SG  CYS     1       4.787   3.001   0.834  1.00  0.00           S  
END`,
    description: "Contains a thiol group and can form disulfide bonds with other cysteines, crucial for protein structure and redox reactions.",
    category: "special"
  },
  {
    name: "Glutamine",
    code: "Q",
    threeLetter: "Gln",
    structure: `HETATM    1  N   GLN     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  GLN     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   GLN     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   GLN     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  GLN     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  GLN     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD  GLN     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  OE1 GLN     1       4.423   5.245   1.705  1.00  0.00           O  
HETATM    9  NE2 GLN     1       6.251   4.121   2.576  1.00  0.00           N  
END`,
    description: "A polar amino acid with an amide side chain, commonly found in protein-protein interaction sites.",
    category: "polar"
  },
  {
    name: "Glutamic Acid",
    code: "E",
    threeLetter: "Glu",
    structure: `HETATM    1  N   GLU     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  GLU     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   GLU     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   GLU     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  GLU     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  GLU     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD  GLU     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  OE1 GLU     1       4.423   5.245   1.705  1.00  0.00           O  
HETATM    9  OE2 GLU     1       6.251   4.121   2.576  1.00  0.00           O  
END`,
    description: "A negatively charged amino acid with a carboxyl side chain, important for protein-protein interactions and salt bridges.",
    category: "charged"
  },
  {
    name: "Glycine",
    code: "G",
    threeLetter: "Gly",
    structure: `HETATM    1  N   GLY     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  GLY     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   GLY     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   GLY     1       2.239  -0.316   0.965  1.00  0.00           O  
END`,
    description: "The smallest amino acid with only a hydrogen as its side chain, provides flexibility in protein structure.",
    category: "special"
  },
  {
    name: "Histidine",
    code: "H",
    threeLetter: "His",
    structure: `HETATM    1  N   HIS     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  HIS     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   HIS     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   HIS     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  HIS     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  HIS     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  ND1 HIS     1       5.051   4.123   1.705  1.00  0.00           N  
HETATM    8  CD2 HIS     1       5.115   1.879   0.834  1.00  0.00           C  
HETATM    9  CE1 HIS     1       6.251   4.121   2.576  1.00  0.00           C  
HETATM   10  NE2 HIS     1       6.315   1.877   1.705  1.00  0.00           N  
END`,
    description: "Contains an imidazole ring, can act as both proton donor and acceptor, crucial in enzyme active sites.",
    category: "charged"
  },
  {
    name: "Isoleucine",
    code: "I",
    threeLetter: "Ile",
    structure: `HETATM    1  N   ILE     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  ILE     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   ILE     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   ILE     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  ILE     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG1 ILE     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CG2 ILE     1       2.423   4.245   0.834  1.00  0.00           C  
HETATM    8  CD1 ILE     1       5.051   4.123   1.705  1.00  0.00           C  
END`,
    description: "A branched-chain hydrophobic amino acid, important for protein core stability and membrane proteins.",
    category: "hydrophobic"
  },
  {
    name: "Leucine",
    code: "L",
    threeLetter: "Leu",
    structure: `HETATM    1  N   LEU     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  LEU     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   LEU     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   LEU     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  LEU     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  LEU     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD1 LEU     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  CD2 LEU     1       5.051   1.879   0.834  1.00  0.00           C  
END`,
    description: "A branched-chain hydrophobic amino acid, commonly found in protein cores and leucine zippers.",
    category: "hydrophobic"
  },
  {
    name: "Lysine",
    code: "K",
    threeLetter: "Lys",
    structure: `HETATM    1  N   LYS     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  LYS     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   LYS     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   LYS     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  LYS     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  LYS     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD  LYS     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  CE  LYS     1       6.551   4.125   1.705  1.00  0.00           C  
HETATM    9  NZ  LYS     1       7.115   5.247   2.576  1.00  0.00           N  
END`,
    description: "A positively charged amino acid with a long side chain ending in an amino group, important for protein-DNA interactions.",
    category: "charged"
  },
  {
    name: "Methionine",
    code: "M",
    threeLetter: "Met",
    structure: `HETATM    1  N   MET     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  MET     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   MET     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   MET     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  MET     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  MET     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  SD  MET     1       5.051   4.123   1.705  1.00  0.00           S  
HETATM    8  CE  MET     1       6.551   4.125   1.705  1.00  0.00           C  
END`,
    description: "Contains a sulfur atom, often the first amino acid in proteins, important for protein structure and function.",
    category: "hydrophobic"
  },
  {
    name: "Phenylalanine",
    code: "F",
    threeLetter: "Phe",
    structure: `HETATM    1  N   PHE     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  PHE     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   PHE     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   PHE     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  PHE     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  PHE     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD1 PHE     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  CD2 PHE     1       5.051   1.879   0.834  1.00  0.00           C  
HETATM    9  CE1 PHE     1       6.251   4.121   2.576  1.00  0.00           C  
HETATM   10  CE2 PHE     1       6.251   1.877   1.705  1.00  0.00           C  
HETATM   11  CZ  PHE     1       6.815   2.999   2.576  1.00  0.00           C  
END`,
    description: "Contains an aromatic ring, involved in protein stability through hydrophobic and π-stacking interactions.",
    category: "hydrophobic"
  },
  {
    name: "Proline",
    code: "P",
    threeLetter: "Pro",
    structure: `HETATM    1  N   PRO     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  PRO     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   PRO     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   PRO     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  PRO     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  PRO     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD  PRO     1       5.051   1.879   0.834  1.00  0.00           C  
END`,
    description: "Unique cyclic structure creates kinks in protein chains, often found in turns and protein folding sites.",
    category: "special"
  },
  {
    name: "Serine",
    code: "S",
    threeLetter: "Ser",
    structure: `HETATM    1  N   SER     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  SER     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   SER     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   SER     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  SER     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  OG  SER     1       4.487   3.001   0.834  1.00  0.00           O  
END`,
    description: "A small polar amino acid with a hydroxyl group, important for protein phosphorylation and catalysis.",
    category: "polar"
  },
  {
    name: "Threonine",
    code: "T",
    threeLetter: "Thr",
    structure: `HETATM    1  N   THR     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  THR     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   THR     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   THR     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  THR     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  OG1 THR     1       4.487   3.001   0.834  1.00  0.00           O  
HETATM    7  CG2 THR     1       2.423   4.245   0.834  1.00  0.00           C  
END`,
    description: "Contains a hydroxyl group and a methyl group, important for protein phosphorylation and glycosylation.",
    category: "polar"
  },
  {
    name: "Tryptophan",
    code: "W",
    threeLetter: "Trp",
    structure: `HETATM    1  N   TRP     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  TRP     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   TRP     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   TRP     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  TRP     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  TRP     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD1 TRP     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  CD2 TRP     1       5.051   1.879   0.834  1.00  0.00           C  
HETATM    9  NE1 TRP     1       6.251   4.121   2.576  1.00  0.00           N  
HETATM   10  CE2 TRP     1       6.251   1.877   1.705  1.00  0.00           C  
HETATM   11  CE3 TRP     1       4.487   0.757  -0.037  1.00  0.00           C  
HETATM   12  CZ2 TRP     1       6.815   0.755   1.705  1.00  0.00           C  
HETATM   13  CZ3 TRP     1       5.051  -0.365  -0.037  1.00  0.00           C  
HETATM   14  CH2 TRP     1       6.251  -0.367   0.834  1.00  0.00           C  
END`,
    description: "Largest amino acid with an indole ring system, important for protein folding and stability.",
    category: "hydrophobic"
  },
  {
    name: "Tyrosine",
    code: "Y",
    threeLetter: "Tyr",
    structure: `HETATM    1  N   TYR     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  TYR     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   TYR     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   TYR     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  TYR     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG  TYR     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CD1 TYR     1       5.051   4.123   1.705  1.00  0.00           C  
HETATM    8  CD2 TYR     1       5.051   1.879   0.834  1.00  0.00           C  
HETATM    9  CE1 TYR     1       6.251   4.121   2.576  1.00  0.00           C  
HETATM   10  CE2 TYR     1       6.251   1.877   1.705  1.00  0.00           C  
HETATM   11  CZ  TYR     1       6.815   2.999   2.576  1.00  0.00           C  
HETATM   12  OH  TYR     1       8.015   2.997   3.447  1.00  0.00           O  
END`,
    description: "Contains a phenol ring, important for protein phosphorylation and redox reactions.",
    category: "polar"
  },
  {
    name: "Valine",
    code: "V",
    threeLetter: "Val",
    structure: `HETATM    1  N   VAL     1       0.966   1.875  -0.037  1.00  0.00           N  
HETATM    2  CA  VAL     1       2.423   1.877  -0.037  1.00  0.00           C  
HETATM    3  C   VAL     1       2.965   0.551   0.475  1.00  0.00           C  
HETATM    4  O   VAL     1       2.239  -0.316   0.965  1.00  0.00           O  
HETATM    5  CB  VAL     1       2.987   2.999   0.834  1.00  0.00           C  
HETATM    6  CG1 VAL     1       4.487   3.001   0.834  1.00  0.00           C  
HETATM    7  CG2 VAL     1       2.423   4.245   0.834   HETATM    8  CD1 VAL     1       5.051   4.123   1.705  1.00  0.00           C  
END`,
    description: "A branched-chain hydrophobic amino acid, important for protein stability and hydrophobic interactions.",
    category: "hydrophobic"
  }
];