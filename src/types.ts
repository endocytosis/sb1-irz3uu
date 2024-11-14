export interface AminoAcid {
  name: string;
  code: string;
  threeLetter: string;
  structure: string;
  description: string;
  category: 'charged' | 'polar' | 'special' | 'hydrophobic';
}

export type CategoryFilter = 'all' | 'charged' | 'polar' | 'special' | 'hydrophobic';