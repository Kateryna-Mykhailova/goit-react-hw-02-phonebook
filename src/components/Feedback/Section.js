import React from 'react';

const Section = ({ title, children }) => (
  <div>
    <span className="Feedback_title">{title}</span>
    {children}
  </div>
);

export default Section;
