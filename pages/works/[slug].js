import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
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

function Project({ project, title }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="project"
		>
			<div className="container container--project">
				<motion.div
					variants={fadeInRight}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<h1 className="project__title">{title}</h1>
				</motion.div>
				<article>
					<ReactMarkdown components={{ h1: "h2" }}>{project}</ReactMarkdown>
				</article>
			</div>
		</motion.section>
	);
}

export default Project;

export async function getStaticProps({ params }) {
	const projectSlug = params.slug;
	const pathToFile = path.join(process.cwd(), "services", `${projectSlug}.md`);
	const project = fs.readFileSync(pathToFile, "utf-8");
	const { data, content } = matter(project);
	return {
		props: {
			project: content,
			title: data.title,
		},
	};
}

export async function getStaticPaths() {
	const pathToDir = path.join(process.cwd(), "services");
	const projectsMdFiles = fs.readdirSync(pathToDir);
	const projects = projectsMdFiles.map((project) => project.replace(".md", ""));
	const paths = projects.map((project) => ({
		params: {
			slug: project,
		},
	}));
	return {
		paths,
		fallback: false,
	};
}
