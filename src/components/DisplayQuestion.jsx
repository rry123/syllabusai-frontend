import React from 'react';

const QuestionComponent = ({ question }) => {
  return (
    <div>
      <h3>{question.question}</h3>
      <p>Marks: {question.marks}</p>
    </div>
  );
};

export default QuestionComponent;
