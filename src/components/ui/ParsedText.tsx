'use client';

import React from 'react';

export default function ParsedText({ text }: { text: string }) {
  if (!text) return null;

  const segments = text.split('===TABLE===');

  return (
    <div className="space-y-4 text-slate-600" dir="auto">
      {segments.map((segment, index) => {
        // Odd index means it is inside a code block
        if (index % 2 !== 0) {
          return (
            <div key={index} className="w-full overflow-x-auto bg-white text-slate-800 p-6 rounded-2xl border border-slate-200 shadow-sm my-8" dir="ltr">
              <pre className="text-[10px] sm:text-xs md:text-sm font-mono leading-relaxed whitespace-pre min-w-max">
                {segment.replace(/^\n+|\n+$/g, '')}
              </pre>
            </div>
          );
        }

        // Even index means normal text
        const lines = segment.split('\n');
        return lines.map((line, idx) => {
          const trimmed = line.trim();
          
          if (!trimmed) return null; // Let space-y-4 handle spacing, no empty divs needed

          if (trimmed.match(/\s{3,}/)) {
            const parts = trimmed.split(/\s{3,}/).filter(p => p.trim());
            return (
              <div 
                key={`${index}-${idx}`} 
                dir="auto"
                className="flex flex-col sm:flex-row items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 gap-4 hover:border-blue-200 transition-colors shadow-sm"
              >
                {parts.map((part, i) => (
                  <span key={i} className="text-slate-700 font-semibold text-sm sm:text-base">
                    {part}
                  </span>
                ))}
              </div>
            );
          }

          const headingKeywords = ['المقاسات الاستاندرد', 'المواصفات والخصائص', 'الوظيفة والأهمية', 'التطبيقات', 'المميزات', 'كيف يعمل', 'الاستخدامات'];
          const isHeadingKeyword = headingKeywords.some(kw => trimmed.includes(kw));
          
          if (
            (trimmed.length < 60 && isHeadingKeyword) || 
            trimmed.match(/^[0-9]+-/)
          ) {
            return (
              <h3 key={`${index}-${idx}`} dir="auto" className="text-xl md:text-2xl font-bold text-blue-800 mt-8 mb-4 border-b border-slate-100 pb-2">
                {trimmed}
              </h3>
            );
          }

          return (
            <p key={`${index}-${idx}`} dir="auto" className="leading-relaxed text-base md:text-lg text-justify text-slate-900">
              {trimmed}
            </p>
          );
        });
      })}
    </div>
  );
}
