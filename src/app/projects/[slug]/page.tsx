import { notFound } from "next/navigation";
import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	Github,
	Globe,
	Calendar,
	Terminal,
	Shield,
	Cpu,
	Database,
} from "lucide-react";
import { getProject, getProjects } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
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
		<div className="min-h-screen pb-20 bg-background relative overflow-hidden">
			{/* Background Grid */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

			{/* Hero Section */}
			<div className="relative w-full border-b border-border/50 bg-muted/10 pt-5 pb-16">
				<div className="container px-6 mx-auto relative z-10">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
							<Button
								asChild
								variant="ghost"
								className="gap-2 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary font-mono uppercase tracking-wider"
							>
								<Link href="/projects">
									<ArrowLeft className="h-4 w-4" /> Abort_Mission
								</Link>
							</Button>
							<div className="text-xs font-mono text-primary/50 uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">
								Mission_ID: {slug.toUpperCase()}
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex items-center gap-2 text-primary/60 font-mono text-xs uppercase tracking-widest">
								<Terminal className="w-3 h-3" />
								<span>Classified_Project_File</span>
							</div>
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-tighter leading-none text-foreground">
								{project.title}
							</h1>
							<div className="flex flex-wrap gap-1 items-center pt-2">
								{project.techStack?.map((tech) => (
									<div
										key={tech}
										className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider"
									>
										<div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
										{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-6 mx-auto py-12">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
					{/* Main Content */}
					<main className="space-y-12">
						{/* Project Image / Visual */}
						{project.image && (
							<div className="relative w-full aspect-video border border-primary/20 bg-card/50 overflow-hidden group">
								{/* HUD Overlays */}
								<div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 z-20" />
								<div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 z-20" />
								<div className="absolute top-4 right-4 text-[10px] font-mono text-primary/70 uppercase tracking-widest z-20">
									Visual_Feed_Live
								</div>

								{/* Scanline Effect */}
								<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20 z-10" />

								<div
									className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
									style={{ backgroundImage: `url(${project.image})` }}
								/>
							</div>
						)}

						{/* Mission Briefing */}
						<div className="relative">
							<div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-primary/20 to-transparent" />
							<h2 className="text-2xl font-heading font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
								<Shield className="w-5 h-5 text-primary" />
								Mission_Briefing
							</h2>
							<article className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide prose-p:text-muted-foreground prose-p:font-mono prose-img:rounded-none prose-img:border prose-img:border-primary/20">
								<p className="lead text-xl text-foreground font-bold mb-8 font-heading uppercase tracking-wide">
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
						{/* Mission Parameters */}
						<div className="border border-primary/30 bg-card/30 backdrop-blur-md p-6 relative overflow-hidden">
							<div className="absolute top-0 right-0 p-2 opacity-20">
								<Database className="w-24 h-24 text-primary" />
							</div>

							<h3 className="font-heading font-bold text-xl mb-6 uppercase tracking-widest flex items-center gap-2 border-b border-primary/20 pb-4">
								<Cpu className="w-5 h-5 text-primary" />
								Mission_Params
							</h3>

							<div className="space-y-6 relative z-10">
								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col gap-1">
										<span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
											Status
										</span>
										<span className="text-sm font-bold font-heading uppercase text-primary">
											Completed
										</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
											Clearance
										</span>
										<span className="text-sm font-bold font-heading uppercase text-foreground">
											Public
										</span>
									</div>
									<div className="flex flex-col gap-1 col-span-2">
										<span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
											Deployment_Date
										</span>
										<span className="text-sm font-bold font-heading uppercase text-foreground flex items-center gap-2">
											<Calendar className="w-4 h-4 text-primary" />
											{new Date(project.date).toLocaleDateString(undefined, {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
								</div>

								<div className="space-y-3 pt-4 border-t border-primary/20">
									{project.repo && (
										<Button
											asChild
											variant="outline"
											className="w-full justify-between h-12 rounded-none border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all font-mono uppercase tracking-wider group"
										>
											<Link href={project.repo} target="_blank">
												<span className="flex items-center gap-2">
													<Github className="h-4 w-4" /> Source_Code
												</span>
												<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
											</Link>
										</Button>
									)}
									{project.demo && (
										<Button
											asChild
											className="w-full justify-between h-12 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-mono uppercase tracking-wider group"
										>
											<Link href={project.demo} target="_blank">
												<span className="flex items-center gap-2">
													<Globe className="h-4 w-4" /> Live_Uplink
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
							<div className="border border-border/50 bg-black/20 p-1">
								<div className="bg-muted/10 p-2 mb-1 flex items-center justify-between">
									<span className="text-[10px] font-mono uppercase tracking-widest text-accent">
										Latest_Transmission
									</span>
									<div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
								</div>
								<Suspense
									fallback={
										<div className="h-32 bg-muted/5 animate-pulse flex items-center justify-center text-xs font-mono text-muted-foreground">
											ESTABLISHING_CONNECTION...
										</div>
									}
								>
									<CommitInfo repo={project.repo} />
								</Suspense>
							</div>
						)}
					</aside>
				</div>
			</div>
		</div>
	);
}
