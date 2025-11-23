import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/mdx";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card className="group flex flex-col h-full overflow-hidden border-muted/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
			<div className="aspect-video w-full overflow-hidden bg-muted">
				{/* Placeholder for image if not present */}
				{project.image ? (
					<div
						className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
						style={{ backgroundImage: `url(${project.image})` }}
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center text-muted-foreground">
						No Image
					</div>
				)}
			</div>
			<CardHeader>
				<div className="flex items-center justify-between gap-2">
					<CardTitle className="line-clamp-1 text-xl font-heading">{project.title}</CardTitle>
					<Link
						href={`/projects/${project.slug}`}
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<ArrowUpRight className="h-5 w-5" />
						<span className="sr-only">View Project</span>
					</Link>
				</div>
				<CardDescription className="line-clamp-2">{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-1">
				<div className="flex flex-wrap gap-2">
					{(project.techStack || []).slice(0, 3).map((tech) => (
						<Badge key={tech} variant="secondary" className="rounded-md">
							{tech}
						</Badge>
					))}
					{(project.techStack || []).length > 3 && (
						<Badge variant="outline" className="rounded-md">
							+{(project.techStack || []).length - 3}
						</Badge>
					)}
				</div>
			</CardContent>
			<CardFooter className="border-t bg-muted/20 p-4">
				<div className="flex items-center gap-4 w-full">
					{project.repo && (
						<Link
							href={project.repo}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							<Github className="h-4 w-4" />
							<span>Source</span>
						</Link>
					)}
					<div className="ml-auto text-xs text-muted-foreground">
						{new Date(project.date).toLocaleDateString()}
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
