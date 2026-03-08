import React, { useState } from 'react';

function LikeSection({ sectionId, likes = [], onLike }) {
  const [name, setName] = useState('');
  return (
    <div className="like-section">
      <h4>Likes</h4>
      <ul className="like-list">
        {likes.length === 0 && <li className="like-empty">No likes yet.</li>}
        {likes.map(like => (
          <li key={like.id} className="like-item">
            <span className="like-avatar" aria-hidden="true">{(like.userName || 'A').trim().charAt(0).toUpperCase()}</span>
            <span className="like-user" style={{ wordBreak: 'break-word' }}>{like.userName || 'Anonymous'}</span>
          </li>
        ))}
      </ul>
      <form className="like-input" onSubmit={e => { e.preventDefault(); onLike(name); setName(''); }}>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-label="Your name"
          style={{ fontSize: '1.05rem', minWidth: 0, marginBottom: '0.5rem' }}
        />
        <button type="submit" style={{ alignSelf: 'flex-end', minWidth: '80px' }}>Like</button>
      </form>
    </div>
  );
}

export default LikeSection; 