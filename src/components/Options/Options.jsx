import styles from "./Options.module.css";

function Options({ updateFeedbackFunc, totalFeedback }) {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedbackFunc("good")}>Good</button>
      <button onClick={() => updateFeedbackFunc("neutral")}>Neutral</button>
      <button onClick={() => updateFeedbackFunc("bad")}>Bad</button>
      {totalFeedback !== 0 && (
        <button onClick={() => updateFeedbackFunc("reset")}>Reset</button>
      )}
    </div>
  );
}

export default Options;
