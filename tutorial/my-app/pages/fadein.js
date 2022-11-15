import { motion } from 'framer-motion';

export default function fadein() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        ふわっと
      </motion.div>
    </>
  );
}
