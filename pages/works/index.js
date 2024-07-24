import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Work from "../../components/Work";
import { motion } from "framer-motion";

const fadeUp = {
	hidden: { y: 25, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	exit: { y: 25, opacity: 0, transition: { duration: 0.5 } },
};

const fadeInRight = {
	hidden: { x: -25, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
	exit: { x: -25, opacity: 0, transition: { duration: 0.5 } },
};

const stagger = {
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

function works({ data }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="works"
		>
			<div className="container">
				<motion.div
					variants={fadeInRight}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<h1 className="works__title">latest works</h1>
					<h3 className="works__sub-title">*displaying selected projects</h3>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={stagger}
					className="works__projects"
				>
					{data.map((info, index) => {
						return (
							<motion.div variants={fadeUp} key={index}>
								<Work
									imageUrl={info.imageUrl}
									title={info.title}
									description={info.description}
									technologies={info.technologies}
									visitUrl={info.visitUrl}
									githubUrl={info.githubUrl}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</motion.section>
	);
}

export async function getStaticProps() {
	const pathToDir = path.join(process.cwd(), "services");
	const projectsMdFiles = fs.readdirSync(pathToDir);
	const projectDataArr = projectsMdFiles.map((mdFile) => {
		const pathToFile = path.join(process.cwd(), "services", mdFile);
		const project = fs.readFileSync(pathToFile, "utf-8");
		return matter(project);
	});
	const projectData = projectDataArr.map((prj) => prj.data);

	return {
		props: {
			data: projectData,
		},
	};
}

export default works;
