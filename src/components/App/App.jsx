import styles from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const lsKey = "feedbackStatistics";
  const defaultFeedbackStat = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackStat, setFeedbackStat] = useState(() => {
    const lsFeedbackStat = localStorage.getItem(lsKey);
    return lsFeedbackStat === null
      ? defaultFeedbackStat
      : JSON.parse(lsFeedbackStat);
  });
  const totalFeedback =
    feedbackStat.good + feedbackStat.neutral + feedbackStat.bad;
  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round((feedbackStat.good / totalFeedback) * 100);

  const updateFeedbackFunc = (feedbackType) => {
    const newFeedbackStat =
      feedbackType === "reset"
        ? defaultFeedbackStat
        : {
            ...feedbackStat,
            [feedbackType]: feedbackStat[feedbackType] + 1,
          };

    setFeedbackStat(newFeedbackStat);
  };

  useEffect(() => {
    if (totalFeedback === 0) {
      localStorage.removeItem(lsKey);
    } else {
      localStorage.setItem(lsKey, JSON.stringify(feedbackStat));
    }
  }, [feedbackStat, totalFeedback]);

  return (
    <div className={styles.container}>
      <Description />
      <Options
        updateFeedbackFunc={updateFeedbackFunc}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback !== 0 && (
        <Feedback
          stat={feedbackStat}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Feedback>
      )}
      {totalFeedback == 0 && <Notification />}
    </div>
  );
}

export default App;
