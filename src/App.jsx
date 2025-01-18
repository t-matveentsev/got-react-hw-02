import s from "./App.module.css";
import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem("feedback");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1, // Квадратні дужки дозволяють використовувати значення змінної (feedbackType) як назву властивості об’єкта.
    }));
  };
  return (
    <div className={s.appContainer}>
      <Description />
      <div className={s.content}>
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          setFeedback={setFeedback}
        />
        {totalFeedback > 0 && (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
        {totalFeedback == 0 && <Notification />}
      </div>
    </div>
  );
}
