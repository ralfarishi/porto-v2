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
		<div className="min-h-screen pb-20">
			{/* Hero Section */}
			<div className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-end pb-12 bg-muted/30 border-b border-border/50">
				<div className="absolute inset-0 overflow-hidden">
					{project.image && (
						<>
							<div
								className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110"
								style={{ backgroundImage: `url(${project.image})` }}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
						</>
					)}
				</div>
				<div className="container px-6 mx-auto relative z-10">
					<Button
						asChild
						variant="ghost"
						className="mb-8 gap-2 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground"
					>
						<Link href="/projects">
							<ArrowLeft className="h-4 w-4" /> Back to Projects
						</Link>
					</Button>
					<h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 max-w-4xl leading-tight">
						{project.title}
					</h1>
					<div className="flex flex-wrap gap-3 items-center">
						{project.techStack?.map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="text-sm px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/50"
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>
			</div>

			<div className="container px-6 mx-auto py-12">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">
					<article className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-img:rounded-2xl prose-img:shadow-lg">
						<p className="lead text-xl md:text-2xl text-foreground font-medium mb-8">
							{project.description}
						</p>

						{project.image && (
							<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 shadow-lg mb-12 bg-muted">
								<div
									className="w-full h-full bg-cover bg-center"
									style={{ backgroundImage: `url(${project.image})` }}
								/>
							</div>
						)}

						<Suspense fallback={<div className="animate-pulse h-96 bg-muted/50 rounded-2xl" />}>
							<MdxContent mdxSource={project.content} />
						</Suspense>
					</article>

					<aside className="space-y-8 lg:sticky lg:top-32 h-fit">
						<div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-sm">
							<h3 className="font-heading font-bold text-xl mb-6">Project Details</h3>
							<div className="space-y-6">
								<div className="flex items-center gap-3 text-muted-foreground">
									<div className="p-2 rounded-full bg-primary/10 text-primary">
										<Calendar className="h-5 w-5" />
									</div>
									<div className="flex flex-col">
										<span className="text-xs font-medium uppercase tracking-wider opacity-70">
											Released
										</span>
										<span className="font-medium text-foreground">
											{new Date(project.date).toLocaleDateString(undefined, {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
								</div>

								<Separator className="bg-border/50" />

								<div className="flex flex-col gap-3">
									{project.repo && (
										<Button
											asChild
											variant="outline"
											className="w-full justify-start gap-3 h-12 rounded-xl border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all"
										>
											<Link href={project.repo} target="_blank">
												<Github className="h-5 w-5" /> Source Code
											</Link>
										</Button>
									)}
									{project.demo && (
										<Button
											asChild
											className="w-full justify-start gap-3 h-12 rounded-xl shadow-md hover:shadow-lg transition-all"
										>
											<Link href={project.demo} target="_blank">
												<Globe className="h-5 w-5" /> Live Demo
											</Link>
										</Button>
									)}
								</div>
							</div>
						</div>

						{project.repo && (
							<Suspense
								fallback={<div className="h-32 rounded-2xl border bg-muted/50 animate-pulse" />}
							>
								<CommitInfo repo={project.repo} />
							</Suspense>
						)}
					</aside>
				</div>
			</div>
		</div>
	);
}
