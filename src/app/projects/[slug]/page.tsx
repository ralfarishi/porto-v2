import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe, Calendar } from "lucide-react";
import { getProject, getProjects } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { CommitInfo } from "@/components/commit-info";
import { MdxContent } from "@/components/mdx-content";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const projects = getProjects();
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="container px-4 mx-auto py-20">
			<Button asChild variant="ghost" className="mb-8 gap-2 pl-0 hover:pl-2 transition-all">
				<Link href="/projects">
					<ArrowLeft className="h-4 w-4" /> Back to Projects
				</Link>
			</Button>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
				<article>
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{project.title}</h1>
					<p className="text-xl text-muted-foreground mb-6">{project.description}</p>

					<div className="flex flex-wrap gap-2 mb-8">
						{project.techStack?.map((tech) => (
							<Badge key={tech} variant="secondary" className="text-sm">
								{tech}
							</Badge>
						))}
					</div>

					<div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted mb-12">
						{project.image ? (
							<div
								className="w-full h-full bg-cover bg-center"
								style={{ backgroundImage: `url(${project.image})` }}
							/>
						) : (
							<div className="flex flex-col justify-center h-full p-8 bg-muted/50">
								<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
									<Calendar className="h-4 w-4" />
									<span>Released: {new Date(project.date).toLocaleDateString()}</span>
								</div>

								<Separator className="mb-4" />

								<div className="flex flex-col gap-3">
									{project.repo && (
										<Button asChild variant="outline" className="w-full justify-start gap-2">
											<Link href={project.repo} target="_blank">
												<Github className="h-4 w-4" /> Source Code
											</Link>
										</Button>
									)}
									{project.demo && (
										<Button asChild className="w-full justify-start gap-2">
											<Link href={project.demo} target="_blank">
												<Globe className="h-4 w-4" /> Live Demo
											</Link>
										</Button>
									)}
								</div>
							</div>
						)}
					</div>

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<Suspense fallback={<div className="animate-pulse h-96 bg-muted rounded-lg" />}>
							<MdxContent mdxSource={project.content} />
						</Suspense>
					</div>
				</article>

				<aside className="space-y-8">
					<div className="rounded-xl border bg-card p-6">
						<h3 className="font-heading font-bold mb-4">Project Details</h3>
						<div className="space-y-4">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Calendar className="h-4 w-4" />
								<span>Released: {new Date(project.date).toLocaleDateString()}</span>
							</div>

							<Separator />

							<div className="flex flex-col gap-3">
								{project.repo && (
									<Button asChild variant="outline" className="w-full justify-start gap-2">
										<Link href={project.repo} target="_blank">
											<Github className="h-4 w-4" /> Source Code
										</Link>
									</Button>
								)}
								{project.demo && (
									<Button asChild className="w-full justify-start gap-2">
										<Link href={project.demo} target="_blank">
											<Globe className="h-4 w-4" /> Live Demo
										</Link>
									</Button>
								)}
							</div>
						</div>
					</div>

					{project.repo && (
						<Suspense fallback={<div className="h-32 rounded-xl border bg-muted animate-pulse" />}>
							<CommitInfo repo={project.repo} />
						</Suspense>
					)}
				</aside>
			</div>
		</div>
	);
}
