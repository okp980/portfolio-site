import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="errorPage"
    >
      <div className="container container--errorPage">
        <Image
          src="/images/page-not-found.svg"
          className="lost--image"
          alt="page not found"
          width={150}
          height={150}
        />
        <h2 className="lost">oops...seems like you got lost</h2>
        <Link legacyBehavior href="/">
          <a className="button lost--button">
            <i className="fas fa-arrow-left"></i> back to home
          </a>
        </Link>
      </div>
    </motion.section>
  );
}

export default ErrorPage;
