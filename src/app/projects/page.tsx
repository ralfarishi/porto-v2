import { getProjects } from "@/lib/mdx";
import { ManifestList, ManifestItem } from "@/components/manifest-list";

export default function ProjectsPage() {
	const projects = getProjects();

	return (
		<div className="container px-4 mx-auto py-5">
			<div className="flex flex-col items-center mb-8 mt-5">
				<div className="mb:text-xs text-[11px] font-mono text-primary/50 mb-2 tracking-[0.5em] uppercase">
					{"// ARCHIVE_ACCESS_GRANTED"}
				</div>
				<h1 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest relative">
					<span className="absolute -left-8 top-0 text-primary/20 hidden md:block">[</span>
					All <span className="text-primary">_Projects</span>
					<span className="absolute -right-8 top-0 text-primary/20 hidden md:block">]</span>
				</h1>
			</div>
			<ManifestList>
				{projects.map((project, i) => (
					<ManifestItem
						key={project.slug}
						index={i}
						id={`PRJ-${String(i + 1).padStart(3, "0")}`}
						title={project.title}
						date={new Date(project.date).toLocaleDateString(undefined, {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						})}
						tech={project.techStack}
						href={`/projects/${project.slug}`}
					/>
				))}
			</ManifestList>
		</div>
	);
}
