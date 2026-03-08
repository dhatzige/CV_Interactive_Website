import React from 'react';
import './CVBullet.css';

// Utility to parse **bold** and *italic* in text
function renderFormattedText(text) {
  if (!text) return null;
  // Replace **bold**
  let parts = text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
  // Replace *italic*
  parts = parts.flatMap((part, i) => {
    if (typeof part === 'string') {
      return part.split(/(\*[^*]+\*)/g).map((sub, j) => {
        if (/^\*[^*]+\*$/.test(sub)) {
          return <em key={i + '-' + j}>{sub.slice(1, -1)}</em>;
        }
        return sub;
      });
    }
    return part;
  });
  return parts;
}

function CVBullet({ bullet, onClick, selected, isSelectedSection }) {
  // Get initial for avatar
  const initial = bullet.text ? bullet.text.trim().charAt(0).toUpperCase() : '?';
  return (
    <li
      className={`cv-bullet${selected ? ' selected' : ''}${isSelectedSection ? ' section-highlight' : ''}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', wordBreak: 'break-word' }}
    >
      <span className="cv-bullet-avatar" aria-hidden="true">{initial}</span>
      <span style={{ flex: 1 }}>{renderFormattedText(bullet.text)}</span>
    </li>
  );
}

export default CVBullet; 