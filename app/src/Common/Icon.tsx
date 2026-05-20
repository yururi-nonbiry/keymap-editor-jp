import React from 'react';

const faCollections: Record<string, string> = {
  brands: 'fab',
  default: 'fa'
};

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  className?: string;
  collection?: 'brands' | 'default' | string;
}

function Icon({ name, className = '', collection = 'default', ...iconProps }: IconProps) {
  const groupClass = faCollections[collection] || faCollections.default;
  const iconClass = `fa-${name}`;

  return (
    <span
      className={[className, groupClass, iconClass].join(' ')}
      {...iconProps}
    />
  );
}

export default Icon;
