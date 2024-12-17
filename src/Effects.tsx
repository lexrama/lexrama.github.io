import { motion } from "framer-motion";

export const Blur = ({
  children,
  duration = 0.75,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}): React.JSX.Element => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, filter: "blur(10px)" }}
    transition={{ duration }}
  >
    {children}
  </motion.div>
);
