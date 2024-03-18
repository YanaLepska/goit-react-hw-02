import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";


const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };
const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stringifyFeedbacks = localStorage.getItem('feedbackRating');
    const parsFeedbacks = JSON.parse(stringifyFeedbacks) ?? initialFeedbacks; 
    return parsFeedbacks;
  });
 
  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedbacks = () => {
    setFeedbacks(initialFeedbacks);
  }

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveMarks = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100);
  
  useEffect(() => { 
localStorage.setItem('feedbackRating', JSON.stringify(feedbacks))
  }, [feedbacks])
  
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedbacks={resetFeedbacks}
        totalFeedback={totalFeedback} />
      {totalFeedback > 0 ?
        (<Feedback feedbacks={feedbacks}
          totalFeedback={totalFeedback}
        positiveMarks={positiveMarks} />)
        : (<Notification />)}
  </>
  );
};

export default App;
