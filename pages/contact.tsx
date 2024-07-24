import Image from "next/image";
import { motion } from "framer-motion";
import Form from "../components/Form";

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

export default function contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="contact"
		>
			<div className="container container--contact">
				<motion.div
					variants={fadeInRight}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="contact__image"
				>
					<h3 className="contact__sub-title">
						start by <span>saying hi</span>.
					</h3>
					<Image
						src="/images/contact.svg"
						alt="contact us"
						width={300}
						height={300}
					/>
				</motion.div>

				<motion.div
					variants={fadeInLeft}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="contact__details"
				>
					<Form />
				</motion.div>
			</div>
		</motion.section>
	);
}
