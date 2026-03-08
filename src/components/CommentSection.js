import React from 'react';

function CommentSection({ sectionId, comments = [], onAdd, onDelete, isOwner, userId }) {
  const handleDelete = (commentId, userName) => {
    if (window.confirm(`Delete this comment${userName ? ' from ' + userName : ''}?`)) {
      onDelete(commentId);
    }
  };
  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <ul className="comment-list">
        {comments.length === 0 && <li className="comment-empty">No comments yet.</li>}
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <span className="comment-avatar" aria-hidden="true">{(comment.userName || 'A').trim().charAt(0).toUpperCase()}</span>
            <span className="comment-user">{comment.userName || 'Anonymous'}:</span>
            <span className="comment-text" style={{ wordBreak: 'break-word' }}>{comment.text}</span>
            {(isOwner || comment.userId === userId) && (
              <button className="comment-delete" onClick={() => handleDelete(comment.id, comment.userName)} aria-label="Delete comment">&times;</button>
            )}
          </li>
        ))}
      </ul>
      <CommentInput onAdd={onAdd} />
    </div>
  );
}

// Simple input for new comments
function CommentInput({ onAdd }) {
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');
  return (
    <form className="comment-input" onSubmit={e => { e.preventDefault(); if (value.trim()) { onAdd(value, name); setValue(''); } }}>
      <input
        type="text"
        placeholder="Write your comment..."
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-label="Comment text"
        style={{ fontSize: '1.05rem', minWidth: 0, marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={e => setName(e.target.value)}
        aria-label="Your name"
        style={{ minWidth: 0, marginBottom: '0.5rem' }}
      />
      <button type="submit" style={{ alignSelf: 'flex-end', minWidth: '80px' }}>Post</button>
    </form>
  );
}

export default CommentSection; 