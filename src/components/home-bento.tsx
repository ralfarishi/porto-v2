"use client";

import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Icons } from "@/components/icons";
import { Project, Blog } from "@/lib/mdx";
import Image from "next/image";

interface HomeBentoProps {
	projects: Project[];
	blogs: Blog[];
}

export function HomeBento({ projects, blogs }: HomeBentoProps) {
	return (
		<section className="container px-6 mx-auto py-20">
			<h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12">
				Stuff I&apos;ve <span className="text-primary">Built</span>
			</h2>
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
						icon={<Icons.gitHub className="h-4 w-4 text-neutral-500" />}
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
						icon={<Icons.mail className="h-4 w-4 text-neutral-500" />}
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
						icon={<Icons.mail className="h-4 w-4 text-neutral-500" />}
						href={`/blogs/${blogs[1].slug}`}
						label="Article"
					/>
				)}

				{/* About / Tech Stack */}
				<BentoGridItem
					title="My Stack"
					description="Tools I use."
					header={
						<div className="flex flex-wrap gap-2 p-4 min-h-24 rounded-xl bg-muted/30">
							{["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 text-xs rounded-md bg-background border border-border"
								>
									{tech}
								</span>
							))}
						</div>
					}
					className="md:col-span-1"
					icon={<Icons.instagram className="h-4 w-4 text-neutral-500" />}
					label="About"
				/>

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
						icon={<Icons.gitHub className="h-4 w-4 text-neutral-500" />}
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
						icon={<Icons.gitHub className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${projects[2].slug}`}
						label="Project"
					/>
				)}
			</BentoGrid>
		</section>
	);
}
