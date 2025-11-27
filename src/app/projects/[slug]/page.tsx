import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Database } from "lucide-react";
import { getProject, getProjects } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { CommitInfo } from "@/components/commit-info";
import { MdxContent } from "@/components/mdx-content";
import { Icons } from "@/components/icons";

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
		<div className="min-h-screen pb-20 bg-background relative overflow-hidden">
			{/* Halftone Background */}
			<div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[20px_20px] opacity-5 pointer-events-none" />

			<div className="container px-6 mx-auto py-12">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
					{/* Main Content */}
					<main className="space-y-12">
						{/* Project Image / Visual */}
						{project.image && (
							<div className="relative w-full aspect-video border-4 border-foreground bg-white overflow-hidden group shadow-[12px_12px_0px_0px_var(--foreground)]">
								{/* Caption Box */}
								<div className="absolute top-0 left-0 bg-secondary border-b-4 border-r-4 border-foreground px-4 py-2 z-20">
									<span className="font-heading text-lg uppercase text-secondary-foreground">
										FIG. 1
									</span>
								</div>

								<div
									className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-100"
									style={{ backgroundImage: `url(${project.image})` }}
								/>
							</div>
						)}

						{/* Mission Briefing */}
						<div className="relative">
							<article className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-foreground prose-p:text-foreground/80 prose-p:font-sans prose-strong:text-foreground prose-ul:text-foreground/80 prose-li:marker:text-foreground prose-img:rounded-none prose-img:border-4 prose-img:border-black prose-img:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
								<p className="lead text-xl text-foreground mb-8 font-sans uppercase tracking-wide">
									{project.description}
								</p>
								<Suspense
									fallback={<div className="animate-pulse h-96 bg-muted/50 rounded-none" />}
								>
									<MdxContent mdxSource={project.content} />
								</Suspense>
							</article>
						</div>
					</main>

					{/* Sidebar / Data Panel */}
					<aside className="space-y-8 lg:sticky lg:top-32 h-fit">
						{/* Issue Specs */}
						<div className="bg-card border-4 border-foreground p-6 relative overflow-hidden shadow-[8px_8px_0px_0px_var(--foreground)]">
							<div className="absolute top-0 right-0 p-2 opacity-10">
								<Database className="w-24 h-24 text-foreground" />
							</div>

							<h3 className="font-heading text-2xl mb-6 uppercase tracking-widest flex items-center gap-2 border-b-4 border-foreground pb-4 text-foreground">
								<Cpu className="w-6 h-6 text-foreground" />
								Issue Specs
							</h3>

							<div className="space-y-6 relative z-10">
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1 border-l-4 border-secondary pl-2">
										<span className="text-[10px] font-sans font-bold text-muted-foreground uppercase tracking-widest">
											Status
										</span>
										<span className="text-sm font-bold font-heading uppercase text-foreground">
											Completed
										</span>
									</div>
									<div className="flex flex-col gap-1 border-l-4 border-primary pl-2">
										<span className="text-[10px] font-sans font-bold text-muted-foreground uppercase tracking-widest">
											Clearance
										</span>
										<span className="text-sm font-bold font-heading uppercase text-foreground">
											Public
										</span>
									</div>
									<div className="flex flex-col gap-1 col-span-2 border-l-4 border-accent pl-2">
										<span className="text-[10px] font-sans font-bold text-muted-foreground uppercase tracking-widest">
											Deployment Date
										</span>
										<span className="text-sm font-bold font-heading uppercase text-foreground">
											{new Date(project.date).toLocaleDateString(undefined, {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
								</div>

								{project.techStack && project.techStack.length > 0 && (
									<div className="flex flex-col gap-2 pt-4 border-t-4 border-dashed border-foreground/20">
										<span className="text-[10px] font-sans font-bold text-muted-foreground uppercase tracking-widest">
											Mission Equipment
										</span>
										<div className="flex flex-wrap gap-2">
											{project.techStack.map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 bg-background border-2 border-foreground text-[10px] font-bold uppercase hover:bg-foreground hover:text-background transition-colors cursor-default"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}

								<div className="space-y-3 pt-4 border-t-4 border-foreground">
									{project.repo && (
										<Button
											asChild
											variant="outline"
											className="w-full justify-between h-12 rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-sans font-bold uppercase tracking-wider group shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
										>
											<Link href={project.repo} target="_blank">
												<span className="flex items-center gap-2">
													<Icons.gitHub className="h-4 w-4" /> Source Code
												</span>
												<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
											</Link>
										</Button>
									)}
									{project.demo && (
										<Button
											asChild
											className="w-full justify-between h-12 rounded-none bg-primary border-2 border-foreground text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold uppercase tracking-wider group shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
										>
											<Link href={project.demo} target="_blank">
												<span className="flex items-center gap-2">
													<Globe className="h-4 w-4" /> Live Uplink
												</span>
												<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
											</Link>
										</Button>
									)}
								</div>
							</div>
						</div>

						{/* Commit Log */}
						{project.repo && (
							<Suspense
								fallback={
									<div className="h-32 bg-card border-4 border-foreground animate-pulse flex items-center justify-center text-xs font-sans font-bold text-muted-foreground">
										ESTABLISHING CONNECTION...
									</div>
								}
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
