import React from 'react';

const FeedbackOptions = ({ onIncrementBad }) => (
  <div>
    <button type="button" className="Feedback_btn">
      Good
    </button>
    <button type="button" className="Feedback_btn">
      Neutral
    </button>
    <button type="button" onClick={onIncrementBad} className="Feedback_btn">
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
