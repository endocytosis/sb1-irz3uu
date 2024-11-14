import React from 'react';
import { Beaker } from 'lucide-react';

interface PHSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function PHSlider({ value, onChange }: PHSliderProps) {
  const getColor = (ph: number) => {
    if (ph < 3) return 'rgb(239, 68, 68)';
    if (ph < 6) return 'rgb(245, 158, 11)';
    if (ph < 8) return 'rgb(16, 185, 129)';
    if (ph < 11) return 'rgb(59, 130, 246)';
    return 'rgb(139, 92, 246)';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Beaker className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          <label htmlFor="ph-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            pH Value
          </label>
        </div>
        <span 
          className="px-2 py-1 rounded font-mono text-white text-sm"
          style={{ backgroundColor: getColor(value) }}
        >
          {value.toFixed(1)}
        </span>
      </div>
      <input
        id="ph-slider"
        type="range"
        min="0"
        max="14"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, 
            rgb(239, 68, 68) 0%,
            rgb(245, 158, 11) 35%,
            rgb(16, 185, 129) 50%,
            rgb(59, 130, 246) 65%,
            rgb(139, 92, 246) 100%
          )`
        }}
      />
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Acidic (0)</span>
        <span>Neutral (7)</span>
        <span>Basic (14)</span>
      </div>
    </div>
  );
}