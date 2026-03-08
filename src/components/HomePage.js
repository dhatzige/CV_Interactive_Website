import React, { useState, useRef, useEffect } from 'react';
import cvData from '../data/cvData';
import CVSection from './CVSection';
import '../styles/HomePage.css';

function MindMapPopup({ options, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const popupRef = useRef();

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="mindmap-popup-overlay">
      <div className="mindmap-popup" ref={popupRef}>
        <button className="mindmap-close" onClick={onClose} aria-label="Close">&times;</button>
        {!selectedOption ? (
          <ul className="mindmap-options">
            {options.map(opt => (
              <li key={opt.id} className="mindmap-option" onClick={() => setSelectedOption(opt)}>
                {opt.label}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mindmap-answer">
            <div className="mindmap-option-label">{selectedOption.label}</div>
            <div className="mindmap-option-answer">{selectedOption.answer}</div>
            <button className="mindmap-back" onClick={() => setSelectedOption(null)}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility to recursively find a bullet/expansion/point by id in a section
function findBulletById(section, bulletId) {
  // Helper for arrays
  function search(arr) {
    for (const item of arr) {
      if (item.id === bulletId) return item;
      if (item.expansions) {
        const found = search(item.expansions);
        if (found) return found;
      }
      if (item.points) {
        const found = search(item.points);
        if (found) return found;
      }
      if (item.bullets) {
        const found = search(item.bullets);
        if (found) return found;
      }
    }
    return null;
  }
  if (section.bullets) return search(section.bullets);
  return null;
}

function HomePage() {
  const [selected, setSelected] = useState({ sectionId: null, bulletId: null });
  const [showMindMap, setShowMindMap] = useState(false);
  const [mindMapOptions, setMindMapOptions] = useState(null);

  const handleBulletClick = (sectionId, bulletId) => {
    const section = cvData.find(s => s.id === sectionId);
    let options = null;
    if (section) {
      const bullet = findBulletById(section, bulletId);
      if (bullet) {
        options = bullet.mindMapOptions && bullet.mindMapOptions.length > 0
          ? bullet.mindMapOptions
          : [
              { id: 'mock-1', label: 'Mock question?', answer: 'Mock answer for this bullet.' }
            ];
      }
    }
    if (options) {
      setSelected({ sectionId, bulletId });
      setMindMapOptions(options);
      setShowMindMap(true);
    }
  };

  const handleCloseMindMap = () => {
    setShowMindMap(false);
    setSelected({ sectionId: null, bulletId: null });
    setMindMapOptions(null);
  };

  // Extract header/contact info from cvData
  const headerSection = cvData.find(s => s.id === 'header');
  const { title, contact } = headerSection || {};

  return (
    <div className="App">
      {headerSection && (
        <header className="cv-header">
          <h1 className="cv-name">{title}</h1>
          {contact && (
            <div className="cv-contact-block">
              <span>{contact.location}</span> |
              <a href={`tel:${contact.phone}`} className="cv-contact-link">{contact.phone}</a> |
              <a href={`mailto:${contact.email}`} className="cv-contact-link">{contact.email}</a> |
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="cv-contact-link">LinkedIn</a>
            </div>
          )}
        </header>
      )}
      {cvData.filter(section => section.id !== 'header').map(section => (
        <CVSection
          key={section.id}
          section={section}
          onBulletClick={handleBulletClick}
          selectedBulletId={selected.sectionId === section.id ? selected.bulletId : null}
        />
      ))}
      {showMindMap && mindMapOptions && (
        <MindMapPopup options={mindMapOptions} onClose={handleCloseMindMap} />
      )}
    </div>
  );
}

export default HomePage; 