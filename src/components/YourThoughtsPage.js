import React, { useState } from 'react';
import cvData from '../data/cvData';
import CVSection from './CVSection';
import CommentSection from './CommentSection';
import LikeSection from './LikeSection';
import '../styles/YourThoughtsPage.css';

// Initial placeholder data
const initialComments = {};
const initialLikes = {};

function YourThoughtsPage() {
  const [selectedSectionId, setSelectedSectionId] = useState(cvData.find(s => s.id !== 'header')?.id || '');
  const [comments, setComments] = useState(initialComments);
  const [likes, setLikes] = useState(initialLikes);
  const userId = 'user1'; // Placeholder for current user
  const isOwner = true; // Set to true for owner (Dimitris), false for others
  const [selectedBulletId, setSelectedBulletId] = useState(null);

  // Only select bullet on bullet click, section on section title click
  const handleSectionTitleClick = (sectionId) => {
    setSelectedSectionId(sectionId);
    setSelectedBulletId(null);
  };
  const handleBulletClick = (sectionId, bulletId) => {
    setSelectedSectionId(sectionId);
    setSelectedBulletId(bulletId);
  };

  // Handlers
  const handleAddComment = (text, userName) => {
    const commentKey = selectedBulletId ? `${selectedSectionId}-${selectedBulletId}` : selectedSectionId;
    setComments(prev => {
      const existingComments = prev[commentKey] || [];
      return {
        ...prev,
        [commentKey]: [
          ...existingComments,
          { id: Date.now().toString(), userName, text, userId, isOwner: false }
        ]
      };
    });
  };
  
  const handleDeleteComment = (commentId) => {
    const commentKey = selectedBulletId ? `${selectedSectionId}-${selectedBulletId}` : selectedSectionId;
    setComments(prev => ({
      ...prev,
      [commentKey]: (prev[commentKey] || []).filter(c => c.id !== commentId)
    }));
  };
  
  const handleLike = (userName) => {
    const likeKey = selectedBulletId ? `${selectedSectionId}-${selectedBulletId}` : selectedSectionId;
    setLikes(prev => {
      const existingLikes = prev[likeKey] || [];
      return {
        ...prev,
        [likeKey]: [
          ...existingLikes,
          { id: Date.now().toString(), userName }
        ]
      };
    });
  };

  // Determine whether to show section or bullet comments
  const commentKey = selectedBulletId ? `${selectedSectionId}-${selectedBulletId}` : selectedSectionId;
  const likeKey = commentKey; // Use same key for likes

  // Find the selected section 
  const selectedSection = cvData.find(s => s.id === selectedSectionId);
  
  // Get current section title for display
  let selectionTitle = selectedSection?.title || "";
  if (selectedBulletId && selectedSection) {
    if (selectedSection.id === 'professional-experience') {
      // For professional experience, find the role and point
      for (const role of selectedSection.bullets) {
        if (role.points) {
          const point = role.points.find(p => p.id === selectedBulletId);
          if (point) {
            selectionTitle = `${role.jobTitle} - ${point.text}`;
            break;
          }
        }
      }
    } else {
      // For other sections, find the bullet
      const bullet = selectedSection.bullets.find(b => b.id === selectedBulletId);
      selectionTitle = bullet ? bullet.text : selectionTitle;
    }
  }

  // Empty state message
  const nothingSelected = !selectedSectionId && !selectedBulletId;

  return (
    <div className="your-thoughts-layout">
      <main className="your-thoughts-main">
        {cvData.filter(section => section.id !== 'header').map(section => (
          <CVSection
            key={section.id}
            section={section}
            onBulletClick={handleBulletClick}
            onSectionTitleClick={handleSectionTitleClick}
            selectedBulletId={selectedSectionId === section.id ? selectedBulletId : null}
            isSelectedSection={selectedSectionId === section.id}
          />
        ))}
      </main>
      <aside className="your-thoughts-sidebar">
        <h3>Comments & Likes</h3>
        {nothingSelected ? (
          <div className="sidebar-placeholder">Select a section or bullet to see and add comments or likes!</div>
        ) : (
          <>
            <div className="selected-item">
              <strong>Selected:</strong> {selectionTitle}
            </div>
            <CommentSection
              sectionId={commentKey}
              comments={comments[commentKey] || []}
              onAdd={handleAddComment}
              onDelete={handleDeleteComment}
              isOwner={isOwner}
              userId={userId}
            />
            <LikeSection
              sectionId={likeKey}
              likes={likes[likeKey] || []}
              onLike={handleLike}
            />
          </>
        )}
      </aside>
    </div>
  );
}

export default YourThoughtsPage; 