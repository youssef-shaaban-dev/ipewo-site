'use client';

import React from 'react';

export default function ParsedText({ text }: { text: string }) {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="space-y-4 text-slate-600" dir="auto">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        
        // Skip empty lines, but render a small gap instead of a full break to keep it tight
        if (!trimmed) return <div key={idx} className="h-2"></div>;

        // If line contains multiple spaces (like 3 or more), treat as a key-value or table row
        if (trimmed.match(/\s{3,}/)) {
          const parts = trimmed.split(/\s{3,}/).filter(p => p.trim());
          return (
            <div 
              key={idx} 
              dir="auto"
              className="flex flex-col sm:flex-row items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 gap-4 hover:border-blue-200 transition-colors shadow-sm"
            >
              {parts.map((part, i) => (
                <span key={i} className={`text-slate-800 ${i === 0 ? 'font-bold' : ''}`}>
                  {part}
                </span>
              ))}
            </div>
          );
        }

        // If it looks like a heading (e.g. "المقاسات الاستاندرد", or starting with "1-", or just short lines that don't end with a period)
        if (
          trimmed.includes('المقاسات الاستاندرد') || 
          trimmed.match(/^[0-9]+-/) ||
          (trimmed.length < 50 && !trimmed.includes('.') && !trimmed.startsWith('('))
        ) {
          return (
            <h3 key={idx} dir="auto" className="text-xl md:text-2xl font-bold text-blue-800 mt-8 mb-4 border-b border-slate-100 pb-2">
              {trimmed}
            </h3>
          );
        }

        // Normal paragraph
        return (
          <p key={idx} dir="auto" className="leading-relaxed text-lg text-start">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
