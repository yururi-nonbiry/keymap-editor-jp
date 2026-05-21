import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  selector: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 5px'
  },
  label: {
    display: 'block',
    fontSize: '0.75rem',
    color: '#666',
    marginBottom: '2px',
    whiteSpace: 'nowrap'
  },
  select: {
    padding: '2px 4px',
    fontSize: '0.9rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  }
}

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
  const { id, label, value, choices, onUpdate } = props
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10)
    const choice = choices[index].id
    onUpdate(choice)
  }

  function index(value: string | null) {
    const result = choices.findIndex(choice => choice.id === value)
    return result === -1 ? '' : result
  }

  return (
    <div style={styles.selector}>
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
      <select id={id} onChange={handleSelect} value={index(value)} style={styles.select}>
        {choices.map(({ name }, i) => (
          <option key={i} value={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}
