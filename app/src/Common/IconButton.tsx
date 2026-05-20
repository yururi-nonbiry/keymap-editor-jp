import React from 'react';
import Icon from './Icon';

interface IconButtonProps {
  collection?: string;
  icon: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ collection, icon, text, children, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <Icon collection={collection} name={icon} /> {text || children}
    </button>
  );
}
