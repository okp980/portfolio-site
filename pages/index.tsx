import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 25, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 25, opacity: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}
        className="container container--home"
      >
        <motion.h3 variants={fadeUp} className="home__sub-title">
          front-End developer
        </motion.h3>
        <motion.h1 variants={fadeUp} className="home__title">
          logic first, <br /> before typing.
        </motion.h1>
        <motion.p variants={fadeUp} className="home__content">
          i design and code beautifully simple things, <br /> and i love what i
          do.
        </motion.p>
        <motion.div variants={fadeUp} className="home__links">
          <a
            href="/emmanuel-okpunor-resume.pdf"
            className="resume"
            target="_blank"
          >
            resume
          </a>

          <Link href="/contact" legacyBehavior>
            <a className="beep">beep me</a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
