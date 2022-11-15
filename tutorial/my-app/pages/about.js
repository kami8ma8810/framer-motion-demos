import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        Animation!
      </motion.div>
    </>
  );
};

export default About;
