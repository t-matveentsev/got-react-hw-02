const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      {totalFeedback > 0 && <p>Positive: {positiveFeedback}%</p>}
    </ul>
  );
};

export default Feedback;
