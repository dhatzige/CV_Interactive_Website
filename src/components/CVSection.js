import React from 'react';
import CVBullet from './CVBullet';
import './CVSection.css';

function CVSection({ section, onBulletClick, selectedBulletId, onSectionTitleClick, isSelectedSection }) {
  // Special rendering for the skills-languages section
  if (section.id === 'skills-languages') {
    return (
      <section className="cv-section">
        <h2
          className={`cv-section-title${isSelectedSection ? ' selected-section' : ''}`}
          tabIndex={0}
          role="button"
          aria-pressed={isSelectedSection}
          onClick={() => onSectionTitleClick(section.id)}
          style={{ cursor: 'pointer' }}
        >
          {section.title}
        </h2>
        <ul className="cv-bullet-list">
          {section.bullets.map(bullet => (
            <React.Fragment key={bullet.id}>
              <CVBullet
                bullet={bullet}
                onClick={() => onBulletClick(section.id, bullet.id)}
                selected={selectedBulletId === bullet.id}
                isSelectedSection={isSelectedSection}
              />
              {bullet.expansions && bullet.expansions.length > 0 && (
                <ul className="cv-skill-sublist">
                  {bullet.expansions.map(exp => (
                    <CVBullet
                      key={exp.id}
                      bullet={exp}
                      onClick={() => onBulletClick(section.id, exp.id)}
                      selected={selectedBulletId === exp.id}
                      isSelectedSection={isSelectedSection}
                    />
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </section>
    );
  }

  // Special rendering for professional-experience with jobTitle/points
  if (section.id === 'professional-experience') {
    return (
      <section className="cv-section">
        <h2
          className={`cv-section-title${isSelectedSection ? ' selected-section' : ''}`}
          tabIndex={0}
          role="button"
          aria-pressed={isSelectedSection}
          onClick={() => onSectionTitleClick(section.id)}
          style={{ cursor: 'pointer' }}
        >
          {section.title}
        </h2>
        <ul className="cv-bullet-list">
          {section.bullets.map(role => (
            <li key={role.id} className="cv-role-block">
              <div className="cv-role-header">{role.text}</div>
              {role.jobTitle && <div className="cv-role-title">{role.jobTitle}</div>}
              {role.points && (
                <ul className="cv-role-points">
                  {role.points.map(point => (
                    <CVBullet
                      key={point.id}
                      bullet={point}
                      onClick={() => onBulletClick(section.id, point.id)}
                      selected={selectedBulletId === point.id}
                      isSelectedSection={isSelectedSection}
                    />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  // Default rendering for other sections (all bullets clickable)
  return (
    <section className="cv-section">
      <h2
        className={`cv-section-title${isSelectedSection ? ' selected-section' : ''}`}
        tabIndex={0}
        role="button"
        aria-pressed={isSelectedSection}
        onClick={() => onSectionTitleClick(section.id)}
        style={{ cursor: 'pointer' }}
      >
        {section.title}
      </h2>
      <ul className="cv-bullet-list">
        {section.bullets.map(bullet => (
          <CVBullet
            key={bullet.id}
            bullet={bullet}
            onClick={() => onBulletClick(section.id, bullet.id)}
            selected={selectedBulletId === bullet.id}
            isSelectedSection={isSelectedSection}
          />
        ))}
      </ul>
    </section>
  );
}

export default CVSection; 