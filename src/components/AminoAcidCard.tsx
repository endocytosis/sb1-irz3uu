import React from 'react';
import type { AminoAcid } from '../types';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Viewer3D } from './Viewer3D';

interface AminoAcidCardProps {
  aminoAcid: AminoAcid;
  isExpanded: boolean;
  onToggle: () => void;
  pH: number;
}

export function AminoAcidCard({ aminoAcid, pH, isExpanded, onToggle }: AminoAcidCardProps) {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className={`w-full p-4 rounded-lg transition-all duration-200 ${
          isExpanded 
            ? 'bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-indigo-400 shadow-lg shadow-indigo-500/10 dark:shadow-indigo-400/10 rounded-b-none' 
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{aminoAcid.name}</h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-gray-600 dark:text-gray-300">
                {aminoAcid.code}
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-gray-600 dark:text-gray-300">
                {aminoAcid.threeLetter}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            )}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-2 border-t-0 border-indigo-500 dark:border-indigo-400 rounded-b-lg p-6 bg-white dark:bg-gray-800">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-[300px] bg-white rounded-lg shadow-lg">
              <Viewer3D aminoAcid={aminoAcid} pH={pH} />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h4>
                <p className="mt-1 text-lg text-gray-900 dark:text-white capitalize">{aminoAcid.category}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{aminoAcid.description}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Protonation State at pH {pH}</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {getProtonationState(aminoAcid, pH)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getProtonationState(aminoAcid: AminoAcid, pH: number): string {
  const { code } = aminoAcid;
  
  const pKaValues: Record<string, number> = {
    'D': 3.65,
    'E': 4.25,
    'H': 6.00,
    'C': 8.18,
    'K': 10.53,
    'Y': 10.07,
    'R': 12.48,
  };

  if (!(code in pKaValues)) {
    return "No ionizable side chain";
  }

  const pKa = pKaValues[code];
  const state = pH < pKa ? "Protonated" : "Deprotonated";
  return `${state} (pKa: ${pKa})`;
}