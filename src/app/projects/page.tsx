import { getProjects } from "@/lib/mdx";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Image from "next/image";
import { SquareCode } from "lucide-react";

export default function ProjectsPage() {
	const projects = getProjects();

	return (
		<div className="container px-4 mx-auto py-20">
			<h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 mt-5 text-center">
				All <span className="text-primary">Projects</span>
			</h1>
			<BentoGrid className="max-w-4xl mx-auto">
				{projects.map((project, i) => (
					<BentoGridItem
						key={project.slug}
						title={project.title}
						description={project.description}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/50 overflow-hidden relative group">
								{project.image && (
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								)}
								<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
							</div>
						}
						className={i % 4 === 0 || i % 4 === 3 ? "md:col-span-2" : ""}
						icon={<SquareCode className="h-4 w-4 text-neutral-500" />}
						href={`/projects/${project.slug}`}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
