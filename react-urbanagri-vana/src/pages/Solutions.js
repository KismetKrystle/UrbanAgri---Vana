import React from 'react';
import SolutionDisplay from '../components/SolutionDisplay';
import UserFeedback from '../components/UserFeedback';

const Solutions = ({ solution, onFeedbackSubmit }) => {
  return (
    <div>
      <h1>Generated Solutions</h1>
      <SolutionDisplay solution={solution} />
      <UserFeedback onFeedbackSubmit={onFeedbackSubmit} />
    </div>
  );
};

export default Solutions;
