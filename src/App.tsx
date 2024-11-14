import React, { useState, useEffect } from 'react';
import { Viewer3D } from './components/Viewer3D';
import { AminoAcidCard } from './components/AminoAcidCard';
import { CategoryFilter } from './components/CategoryFilter';
import { PHSlider } from './components/PHSlider';
import { aminoAcids } from './data/aminoAcids';
import { Maximize2, Minimize2, Sun, Moon } from 'lucide-react';
import type { CategoryFilter as CategoryFilterType } from './types';

export function App() {
  const [expandedAminoAcids, setExpandedAminoAcids] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<CategoryFilterType>('all');
  const [pH, setPH] = useState(7.4);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleAminoAcid = (code: string) => {
    const newExpanded = new Set(expandedAminoAcids);
    if (newExpanded.has(code)) {
      newExpanded.delete(code);
    } else {
      newExpanded.add(code);
    }
    setExpandedAminoAcids(newExpanded);
  };

  const toggleAll = () => {
    if (expandedAminoAcids.size === aminoAcids.length) {
      setExpandedAminoAcids(new Set());
    } else {
      setExpandedAminoAcids(new Set(aminoAcids.map((aa) => aa.code)));
    }
  };

  const filteredAminoAcids = aminoAcids.filter(
    (aa) => activeFilter === 'all' || aa.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="DNA">🧬</span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Amino Acid Explorer
              </h1>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* pH Slider */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <PHSlider value={pH} onChange={setPH} />
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4">
            <CategoryFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <button
              onClick={toggleAll}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors w-fit"
            >
              {expandedAminoAcids.size === aminoAcids.length ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  Collapse All
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  Expand All
                </>
              )}
            </button>
          </div>

          {/* Amino Acid List */}
          <div className="grid gap-4">
            {filteredAminoAcids.map((aa) => (
              <AminoAcidCard
                key={aa.code}
                aminoAcid={aa}
                pH={pH}
                isExpanded={expandedAminoAcids.has(aa.code)}
                onToggle={() => toggleAminoAcid(aa.code)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}