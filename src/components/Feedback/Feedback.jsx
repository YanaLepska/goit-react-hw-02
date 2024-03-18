import css from './Feedback.module.css'

const Feedback = ({feedbacks, totalFeedback, positiveMarks}) => {
  return (
      <div>
          <ul className={css.feedbackList}>
              <li>Good: {feedbacks.good}</li>
              <li>Neutral: {feedbacks.neutral}</li>
              <li>Bad: {feedbacks.bad}</li>
              <li>Total:<b> {totalFeedback}</b></li>
              <li>Positive:<b> {positiveMarks}%</b> </li> 
          </ul>
    </div>
  )
}

export default Feedback