import React from 'react';
import './MindMapNode.css';

function MindMapNode({ expansions, onClose }) {
  return (
    <div className="mindmap-node">
      <button className="mindmap-close" onClick={onClose} aria-label="Close">&times;</button>
      <ul className="mindmap-list">
        {expansions.map(exp => (
          <li key={exp.id} className="mindmap-item">{exp.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MindMapNode; 