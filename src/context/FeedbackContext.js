import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from the feedback context",
      rating: 5,
    },
    {
      id: 2,
      text: "from the feedback context2",
      rating: 3,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add a new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //delete a feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?"))
      return setFeedback(feedback.filter((item) => item.id !== id));
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //Update Feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map(item => (item.id === id ? {...item, ...updatedItem} : item)))
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
