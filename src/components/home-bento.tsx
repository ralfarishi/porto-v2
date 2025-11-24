"use client";

import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Project, Blog } from "@/lib/mdx";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, SquareCode } from "lucide-react";

interface HomeBentoProps {
	projects: Project[];
	blogs: Blog[];
}

export function HomeBento({ projects, blogs }: HomeBentoProps) {
	return (
		<section className="container px-6 mx-auto py-10">
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true, margin: "-100px" }}
				className="text-3xl md:text-5xl font-heading font-bold text-center mb-12"
			>
				Stuff I&apos;ve <span className="text-primary">Built</span>
			</motion.h2>

			<BentoGrid className="max-w-6xl mx-auto">
				{/* Featured Project 1 (Large) */}
				{projects[0] && (
					<BentoGridItem
						title={projects[0].title}
						description={projects[0].description}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/50 overflow-hidden relative group">
								{projects[0].image && (
									<Image
										src={projects[0].image}
										alt={projects[0].title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								)}
								<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
							</div>
						}
						className="md:col-span-2 md:row-span-2"
						icon={<SquareCode className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${projects[0].slug}`}
						label="Project"
					/>
				)}

				{/* Latest Blog */}
				{blogs[0] && (
					<BentoGridItem
						title={blogs[0].title}
						description={blogs[0].date}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/30 p-4">
								<p className="text-sm text-muted-foreground line-clamp-3">{blogs[0].description}</p>
							</div>
						}
						className="md:col-span-1"
						icon={<Newspaper className="h-4 w-4 text-neutral-500" />}
						href={`/blogs/${blogs[0].slug}`}
						label="Article"
					/>
				)}

				{blogs[1] && (
					<BentoGridItem
						title={blogs[1].title}
						description={blogs[1].date}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/30 p-4">
								<p className="text-sm text-muted-foreground line-clamp-3">{blogs[1].description}</p>
							</div>
						}
						className="md:col-span-1"
						icon={<Newspaper className="h-4 w-4 text-neutral-500" />}
						href={`/blogs/${blogs[1].slug}`}
						label="Article"
					/>
				)}

				{/* Featured Project 2 */}
				{projects[1] && (
					<BentoGridItem
						title={projects[1].title}
						description={projects[1].description}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/50 overflow-hidden relative group">
								{projects[1].image && (
									<Image
										src={projects[1].image}
										alt={projects[1].title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								)}
							</div>
						}
						className="md:col-span-1"
						icon={<SquareCode className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${projects[1].slug}`}
						label="Project"
					/>
				)}

				{projects[2] && (
					<BentoGridItem
						title={projects[2].title}
						description={projects[2].description}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/50 overflow-hidden relative group">
								{projects[2].image && (
									<Image
										src={projects[2].image}
										alt={projects[2].title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								)}
							</div>
						}
						className="md:col-span-1"
						icon={<SquareCode className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${projects[2].slug}`}
						label="Project"
					/>
				)}

				{projects[3] && (
					<BentoGridItem
						title={projects[3].title}
						description={projects[3].description}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/50 overflow-hidden relative group">
								{projects[3].image && (
									<Image
										src={projects[3].image}
										alt={projects[3].title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								)}
							</div>
						}
						className="md:col-span-1"
						icon={<SquareCode className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${projects[3].slug}`}
						label="Project"
					/>
				)}
			</BentoGrid>
		</section>
	);
}
