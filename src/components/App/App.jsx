import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import { useEffect, useState } from "react";

import styles from "./App.module.css";

const BASE_VALUE_OF_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const KEY_FEEDBACK_OF_LOCAL_STORAGE = "feedback_key";

export default function App() {
  const [userFeedback, setUserFeedback] = useState(() => {
    const feedbackDataFromLocalStorage = window.localStorage.getItem(
      KEY_FEEDBACK_OF_LOCAL_STORAGE
    );

    return feedbackDataFromLocalStorage !== null
      ? JSON.parse(feedbackDataFromLocalStorage)
      : BASE_VALUE_OF_FEEDBACK;
  });

  const updateFeedback = feedbackType => {
    setUserFeedback({
      ...userFeedback,
      [feedbackType]: userFeedback[feedbackType] + 1,
    });
  };

  const totalFeedback =
    userFeedback.good + userFeedback.neutral + userFeedback.bad;

  const totalPositiveFeedback = Math.round(
    (userFeedback.good / totalFeedback) * 100
  );

  const handleResetButton = () => {
    setUserFeedback(BASE_VALUE_OF_FEEDBACK);
  };

  useEffect(() => {
    window.localStorage.setItem(
      KEY_FEEDBACK_OF_LOCAL_STORAGE,
      JSON.stringify(userFeedback)
    );
  }, [userFeedback]);

  return (
    <div>
      <Description />

      <Options
        onHandleClick={updateFeedback}
        onHandleReset={handleResetButton}
        conditionDataTotalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackData={userFeedback}
          totalFeedback={totalFeedback}
          totalPositiveFeedback={totalPositiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
