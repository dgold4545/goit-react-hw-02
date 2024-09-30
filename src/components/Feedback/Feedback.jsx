import styles from "./Feedback.module.css";

export default function Feedback({ feedbackData: { good, neutral, bad } }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
}
