"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/features/project-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/mdx";

interface FeaturedProjectsProps {
	projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
	return (
		<section id="projects" className="container px-6 md:px-8 mx-auto py-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="flex items-center justify-between mb-12"
			>
				<div>
					<h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
					<p className="text-muted-foreground max-w-2xl">
						A selection of my recent work, showcasing my technical skills and problem-solving
						abilities.
					</p>
				</div>
				<Button asChild variant="ghost" className="hidden md:flex gap-2">
					<Link href="/projects">
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</Button>
			</motion.div>

			<div className="flex flex-wrap justify-center gap-6">
				{projects.map((project, index) => (
					<motion.div
						key={project.slug}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="mt-8 text-center md:hidden"
			>
				<Button asChild variant="ghost" className="gap-2">
					<Link href="/projects">
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</Button>
			</motion.div>
		</section>
	);
}
