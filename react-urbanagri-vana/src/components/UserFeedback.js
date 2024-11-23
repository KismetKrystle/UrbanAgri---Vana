import React from 'react';

const UserFeedback = ({ onFeedbackSubmit }) => {
  return (
    <div>
      <h2>Provide Feedback</h2>
      <button onClick={() => onFeedbackSubmit('like')}>Like</button>
      <button onClick={() => onFeedbackSubmit('dislike')}>Dislike</button>
    </div>
  );
};

export default UserFeedback;
