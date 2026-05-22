import React from 'react';

interface Choice {
  id: string;
  name: string;
}

interface SelectorProps {
  id: string;
  label: string;
  value: string | null;
  choices: Choice[];
  onUpdate: (value: string) => void;
}

export default function Selector(props: SelectorProps) {
  const { id, label, value, choices, onUpdate } = props;
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    const choice = choices[index].id;
    onUpdate(choice);
  };

  function index(value: string | null) {
    const result = choices.findIndex(choice => choice.id === value);
    return result === -1 ? '' : result;
  }

  return (
    <div className="modern-selector-container">
      <label htmlFor={id} className="modern-selector-label">
        {label}
      </label>
      <select id={id} onChange={handleSelect} value={index(value)} className="modern-selector-select">
        {choices.map(({ name }, i) => (
          <option key={i} value={i}>{name}</option>
        ))}
      </select>
    </div>
  );
}
