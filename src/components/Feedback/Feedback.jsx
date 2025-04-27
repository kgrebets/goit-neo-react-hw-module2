import styles from "./Feedback.module.css";

function Feedback({ stat, totalFeedback, positiveFeedback }) {
  return (
    <ul className={styles.statList}>
      <li>Good: {stat.good} </li>
      <li>Neutral: {stat.neutral} </li>
      <li>Bad: {stat.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}

export default Feedback;
