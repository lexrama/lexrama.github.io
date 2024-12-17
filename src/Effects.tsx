import { motion } from "framer-motion";

export const Blur = ({ children, props }): React.JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: props.duration }}
    >
      {children}
    </motion.div>
  );
};
