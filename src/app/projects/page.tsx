import { getProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
	const projects = getProjects();

	return (
		<div className="container px-4 mx-auto py-20">
			<h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">All Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</div>
	);
}
