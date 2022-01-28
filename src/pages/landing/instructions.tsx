import Button from "../../components/button";
import Card from "../../components/card";

const Instructions = () => {
  return (
    <Card className="instructions">
      <h2>Quiz Instructions</h2>
      <h3 className="instructions__topics">
        Topics: Data types, Class, Objects, Arrow functions, Closure, Prototype
      </h3>
      <div className="instructions__items">
        <ul>
          <li>15 multiple choice questions</li>
          <li>
            <strong>1.5 minutes</strong> per question
          </li>
          <li>Score more than 70% to earn a badge</li>
          <li>Can't move back once a question is answered</li>
          <li>
            Complete the assessment in one session. Make sure your internet is
            stable
          </li>
        </ul>
      </div>
      <div className="button-holder">
        <Button text="Back" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button text="Start" />
      </div>
    </Card>
  );
};

export default Instructions;
