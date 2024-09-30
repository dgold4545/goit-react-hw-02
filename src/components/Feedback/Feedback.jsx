import styles from "./Feedback.module.css";

export default function Feedback({
  feedbackData: { good, neutral, bad },
  totalFeedback,
  totalPositiveFeedback,
}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        {totalFeedback > 0 && <li>Positives: {totalPositiveFeedback}%</li>}
      </ul>
    </div>
  );
}
