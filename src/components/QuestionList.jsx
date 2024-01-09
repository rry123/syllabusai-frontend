import React from 'react';
import QuestionComponent from './DisplayQuestion';

const QuestionList = ({ questions }) => {
  console.log(JSON.stringify(questions));

  return (
    <div>
      <h2>Questions</h2>
      {/* {questions.map((question) => {
        console.log(question);
       // return <QuestionComponent key={question.id} question={question} />;
      })} */}
    </div>
  );
};

export default QuestionList;
