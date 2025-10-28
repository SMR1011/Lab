import React from 'react';

export const FormHelper = ({ title = 'Consejos', items = [] }) => {
  return (
    <div className="bg-white/10 p-4 rounded-lg text-white/95">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="text-sm space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full text-xs">{i + 1}</span>
            <div>
              <div className="font-medium">{it.title}</div>
              {it.detail && <div className="text-xs text-white/80">{it.detail}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormHelper;
