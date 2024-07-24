import Card from "../components/Card";
import { motion } from "framer-motion";

const fadeInRight = {
	hidden: { x: -25, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
	exit: { x: -25, opacity: 0, transition: { duration: 0.5 } },
};
const fadeInLeft = {
	hidden: { x: 25, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
	exit: { x: 25, opacity: 0, transition: { duration: 0.5 } },
};

function about() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="about"
		>
			<div className="container container--about">
				<motion.div
					variants={fadeInRight}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="about__info"
				>
					<p className="about-me">about me</p>
					<h1 className="about__info__title">
						hello! I&apos;m Emmanuel Okpunor
					</h1>
					<h3 className="about__info__sub-title">
						every great design begin with an even better story
					</h3>
					<p className="about__info__content">
						I am a <strong>frontend developer</strong> based in Nigeria. I am
						interested in making <strong>web applications</strong> with rich
						interface that are aesthethically <strong>pleasing</strong> and{" "}
						<strong>interactive</strong>.
					</p>
					<p className="about__info__content">
						My aim is to write <strong>Clean</strong>,{" "}
						<strong>Efficient</strong> and <strong>Maintainable</strong> code.
					</p>
				</motion.div>
				<motion.div
					variants={fadeInLeft}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="about__skills"
				>
					<Card>
						<div className="about__skills__card">
							<h1>Main Stack</h1>

							<ul className="about__skills__menu">
								<li>HTML</li>
								<li>CSS</li>
								<li>JAVASCRIPT</li>
								<li>REACT JS</li>
								<li>NEXT JS</li>
								<li>FIREBASE</li>
								<li>GIT</li>
							</ul>

							<h1>Familiar With</h1>
							<ul className="about__skills__menu">
								<li>NODE JS</li>
								<li>MONGO DB</li>
							</ul>
						</div>
					</Card>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default about;
