import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  selector: {
    display: 'inline-block',
    width: 'auto',
    margin: '5px'
  },
  label: {
    display: 'block',
    width: '100%',
    fontSize: '120%',
    color: '#555'
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
      <select id={id} onChange={handleSelect} value={index(value)}>
        {choices.map(({ name }, i) => (
          <option key={i} value={i}>{name}</option>
        ))}
      </select>
    </div>
  )
}
