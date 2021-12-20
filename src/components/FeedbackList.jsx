import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) return <p>No feedback yet</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {isLoading ? <Spinner /> : feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              item={item}
              key={item.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
