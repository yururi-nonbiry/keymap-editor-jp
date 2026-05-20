import React from 'react';
import Icon from './Common/Icon';

export default function GitHubLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement> = {}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/yururi-nonbiry/keymap-editor-jp"
      {...props}
    >
      <Icon collection="brands" name="github" />/yururi-nonbiry/keymap-editor-jp
    </a>
  );
}
