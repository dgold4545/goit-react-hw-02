import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import { useState } from "react";

import styles from "./App.module.css";

const BASE_VALUE_OF_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [userFeedback, setUserFeedback] = useState(BASE_VALUE_OF_FEEDBACK);

  const updateFeedback = feedbackType => {
    setUserFeedback({
      ...userFeedback,
      [feedbackType]: userFeedback[feedbackType] + 1,
    });
  };

  const totalFeedback =
    userFeedback.good + userFeedback.neutral + userFeedback.bad;

  const handleResetButton = () => {
    setUserFeedback(BASE_VALUE_OF_FEEDBACK);
  };

  return (
    <div>
      <Description />

      <Options
        onHandleClick={updateFeedback}
        onHandleReset={handleResetButton}
        conditionDataTotalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback feedbackData={userFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
