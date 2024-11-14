import React, { useEffect, useRef } from 'react';
import type { AminoAcid } from '../types';
import { getProtonatedStructure } from '../utils/molecularStructure';

declare global {
  interface Window {
    $3Dmol: any;
  }
}

interface Viewer3DProps {
  aminoAcid: AminoAcid;
  pH: number;
}

// pKa values for side chains
const pKaValues: Record<string, { pKa: number; labelPosition: [number, number, number] }> = {
  'D': { pKa: 3.65, labelPosition: [3.5, 4.0, 1.7] },  // Aspartic acid
  'E': { pKa: 4.25, labelPosition: [5.0, 4.1, 1.7] },  // Glutamic acid
  'H': { pKa: 6.00, labelPosition: [6.2, 4.1, 2.5] },  // Histidine
  'C': { pKa: 8.18, labelPosition: [4.7, 3.0, 0.8] },  // Cysteine
  'K': { pKa: 10.53, labelPosition: [7.1, 5.2, 2.5] }, // Lysine
  'Y': { pKa: 10.07, labelPosition: [8.0, 3.0, 3.4] }, // Tyrosine
  'R': { pKa: 12.48, labelPosition: [7.1, 5.2, 2.5] }  // Arginine
};

export function Viewer3D({ aminoAcid, pH }: Viewer3DProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    // Clear previous viewer if it exists
    if (viewerInstanceRef.current) {
      viewerInstanceRef.current.clear();
    } else {
      // Initialize viewer
      viewerInstanceRef.current = window.$3Dmol.createViewer(viewerRef.current, {
        backgroundColor: 'white',
      });
    }

    const viewer = viewerInstanceRef.current;
    
    // Add the molecule with pH-dependent protonation
    const structure = getProtonatedStructure(aminoAcid, pH);
    viewer.addModel(structure, "pdb");
    
    // Enhanced visualization style
    viewer.setStyle({}, {
      stick: { 
        radius: 0.15,
        colorscheme: {
          prop: 'elem',
          map: {
            'H': 'white',
            'C': '#909090',
            'N': '#3050F8',
            'O': '#FF2000',
            'S': '#FFFF30',
          }
        }
      },
      sphere: { 
        radius: 0.25,
        colorscheme: {
          prop: 'elem',
          map: {
            'H': 'white',
            'C': '#909090',
            'N': '#3050F8',
            'O': '#FF2000',
            'S': '#FFFF30',
          }
        }
      }
    });

    // Add protonation state labels
    const sideChainInfo = pKaValues[aminoAcid.code];
    if (sideChainInfo) {
      const { pKa, labelPosition } = sideChainInfo;
      const isProtonated = pH < pKa;
      
      if (!isProtonated) {
        viewer.addLabel("H+", {
          position: { x: labelPosition[0], y: labelPosition[1], z: labelPosition[2] },
          backgroundColor: 'rgba(0,0,0,0)',
          fontColor: 'red',
          fontSize: 14,
          alignment: 'center',
          inFront: true,
        });

        // Add an arrow indicating the leaving proton
        viewer.addArrow({
          start: { x: labelPosition[0] - 0.5, y: labelPosition[1] - 0.5, z: labelPosition[2] },
          end: { x: labelPosition[0] + 0.5, y: labelPosition[1] + 0.5, z: labelPosition[2] },
          radius: 0.1,
          radiusRatio: 1,
          color: 'red',
        });
      }

      // Add pKa value label
      viewer.addLabel(`pKa ${pKa}`, {
        position: { 
          x: labelPosition[0], 
          y: labelPosition[1] - 1, 
          z: labelPosition[2] 
        },
        backgroundColor: 'rgba(0,0,0,0)',
        fontColor: 'blue',
        fontSize: 12,
        alignment: 'center',
      });
    }

    // Set camera
    viewer.zoomTo();
    
    // Render
    viewer.render();

    // Enable rotation
    viewer.spin(true);

    return () => {
      viewer.spin(false);
    };
  }, [aminoAcid, pH]);

  return (
    <div 
      ref={viewerRef} 
      className="w-full h-full rounded-lg shadow-lg bg-white"
      style={{ position: 'relative' }}
    />
  );
}