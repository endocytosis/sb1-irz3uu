import React from 'react';
import type { CategoryFilter } from '../types';

interface CategoryFilterProps {
  activeFilter: CategoryFilter;
  onFilterChange: (filter: CategoryFilter) => void;
}

export function CategoryFilter({ activeFilter, onFilterChange }: CategoryFilterProps) {
  const filters: Array<{ value: CategoryFilter; label: string }> = [
    { value: 'all', label: 'All Amino Acids' },
    { value: 'charged', label: 'Electrically Charged Side Chains' },
    { value: 'polar', label: 'Polar Uncharged Side Chains' },
    { value: 'special', label: 'Special Cases' },
    { value: 'hydrophobic', label: 'Hydrophobic Side Chains' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === value
              ? 'bg-indigo-500 dark:bg-indigo-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}