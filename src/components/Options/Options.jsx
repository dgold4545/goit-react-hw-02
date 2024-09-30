import styles from "./Options.module.css";

export default function Options({
  onHandleClick,
  onHandleReset,
  conditionDataTotalFeedback,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onHandleClick("good");
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onHandleClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onHandleClick("bad");
        }}
      >
        Bad
      </button>
      {conditionDataTotalFeedback > 0 && (
        <button type="button" onClick={onHandleReset}>
          Reset
        </button>
      )}
    </div>
  );
}
