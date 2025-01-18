import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, setFeedback }) => {
  return (
    <div className={s.optionsButtons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() =>
            updateFeedback(
              setFeedback({
                good: 0,
                neutral: 0,
                bad: 0,
              })
            )
          }
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
