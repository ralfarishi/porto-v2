"use client";

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
		<Link href={`/projects/${project.slug}`} className="block h-full">
			<Card className="group flex flex-col h-full overflow-hidden border-border/50 bg-card hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
				<div className="relative aspect-video w-full overflow-hidden bg-muted">
					{/* Placeholder for image if not present */}
					{project.image ? (
						<div
							className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
							style={{ backgroundImage: `url(${project.image})` }}
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/30">
							No Image
						</div>
					)}
					<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
				</div>
				<CardHeader className="relative z-10">
					<div className="flex items-center justify-between gap-2">
						<CardTitle className="line-clamp-1 text-xl font-heading text-foreground group-hover:text-primary transition-colors">
							{project.title}
						</CardTitle>
						<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
							<ArrowUpRight className="h-5 w-5" />
							<span className="sr-only">View Project</span>
						</div>
					</div>
					<CardDescription className="line-clamp-2 text-muted-foreground/80">
						{project.description}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex-1">
					<div className="flex flex-wrap gap-2">
						{(project.techStack || []).slice(0, 3).map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="rounded-full px-3 font-normal bg-secondary/50 hover:bg-secondary text-secondary-foreground"
							>
								{tech}
							</Badge>
						))}
						{(project.techStack || []).length > 3 && (
							<Badge variant="outline" className="rounded-full px-3 font-normal">
								+{(project.techStack || []).length - 3}
							</Badge>
						)}
					</div>
				</CardContent>
				<CardFooter className="border-t border-border/40 bg-muted/30 p-4">
					<div className="flex items-center gap-4 w-full">
						{project.repo && (
							<div
								onClick={(e) => {
									e.stopPropagation();
									window.open(project.repo, "_blank");
								}}
								className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer z-20 relative"
							>
								<Github className="h-4 w-4" />
								<span>Source</span>
							</div>
						)}
						<div className="ml-auto text-xs text-muted-foreground font-medium">
							{new Date(project.date).toLocaleDateString(undefined, {
								year: "numeric",
								month: "short",
							})}
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
