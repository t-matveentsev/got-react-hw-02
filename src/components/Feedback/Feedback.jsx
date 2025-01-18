import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li className={s.item}>Good: {good} </li>
      <li className={s.item}>Neutral: {neutral} </li>
      <li className={s.item}>Bad: {bad} </li>
      {totalFeedback > 0 && (
        <p className={s.info}>Positive: {positiveFeedback}%</p>
      )}
    </ul>
  );
};

export default Feedback;
