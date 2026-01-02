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
    style={{ willChange: "filter, opacity", transform: "translateZ(0)" }}
    initial={{ opacity: 0, filter: "blur(8px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, filter: "blur(8px)" }}
    transition={{ duration }}
  >
    {children}
  </motion.div>
);
