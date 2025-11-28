"use client";

import { Project, Blog } from "@/lib/mdx";
import { ManifestList, ManifestItem } from "@/components/features/manifest-list";
import { Wifi } from "lucide-react";
import Link from "next/link";

interface HomeDashboardProps {
	projects: Project[];
	blogs: Blog[];
}

export function HomeDashboard({ projects, blogs }: HomeDashboardProps) {
	return (
		<section className="container px-4 md:px-6 mx-auto py-16">
			{/* Control Panel Container */}
			<div className="bg-card border-8 border-foreground p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--foreground)] md:shadow-[16px_16px_0px_0px_var(--foreground)] relative overflow-hidden">
				{/* Decorative Screws */}
				<div className="absolute top-2 left-2 w-4 h-4 border-2 border-foreground rounded-full flex items-center justify-center">
					<div className="w-full h-[2px] bg-foreground rotate-45" />
				</div>
				<div className="absolute top-2 right-2 w-4 h-4 border-2 border-foreground rounded-full flex items-center justify-center">
					<div className="w-full h-[2px] bg-foreground rotate-45" />
				</div>
				<div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-foreground rounded-full flex items-center justify-center">
					<div className="w-full h-[2px] bg-foreground rotate-45" />
				</div>
				<div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-foreground rounded-full flex items-center justify-center">
					<div className="w-full h-[2px] bg-foreground rotate-45" />
				</div>

				{/* Header Section */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b-4 border-foreground pb-6 gap-6">
					<div className="flex items-center gap-4">
						<div className="bg-red-500 w-12 h-12 border-4 border-foreground rounded-full animate-pulse shadow-[2px_2px_0px_0px_var(--foreground)] shrink-0" />
						<div>
							<h2 className="text-4xl md:text-5xl font-heading text-foreground uppercase leading-none">
								Mission Control
							</h2>
							<p className="font-sans font-bold text-sm uppercase tracking-widest text-muted-foreground">
								Sector 7G // Authorized Personnel Only
							</p>
						</div>
					</div>

					{/* Status Indicators */}
					<div className="flex gap-4">
						<div className="flex flex-col items-center bg-foreground p-2 border-2 border-background shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
							<span className="text-[10px] font-mono text-card uppercase mb-1">DEFCON</span>
							<span className="text-2xl font-heading text-red-500 leading-none">1</span>
						</div>
						<div className="flex flex-col items-center bg-secondary p-2 border-4 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)]">
							<span className="text-[10px] font-mono text-secondary-foreground uppercase mb-1">
								Uptime
							</span>
							<span className="text-xl font-heading text-secondary-foreground leading-none">
								99.9%
							</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Main Screen: Active Missions */}
					<div className="lg:col-span-8 flex flex-col gap-4">
						<div className="flex justify-between items-end border-b-4 border-foreground pb-2">
							<h3 className="text-2xl font-heading text-foreground uppercase flex items-center gap-2">
								Active Missions
							</h3>
							<Link
								href="/projects"
								className="text-sm font-sans font-bold uppercase hover:bg-black hover:text-white px-2 py-1 transition-colors"
							>
								View All Files &rarr;
							</Link>
						</div>

						<div className="bg-muted/20 border-4 border-foreground p-4 min-h-[400px] relative">
							{/* Grid Overlay */}
							<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

							<ManifestList className="relative z-10">
								{projects.slice(0, 3).map((project, i) => (
									<ManifestItem
										key={project.slug}
										index={i}
										id={`ARCH-${String(i + 1).padStart(3, "0")}`}
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
					</div>

					{/* Side Panel: Intel Feed */}
					<div className="lg:col-span-4 flex flex-col gap-4 mb-2 md:mb-0">
						<div className="flex justify-between items-end border-b-4 border-foreground pb-2">
							<h3 className="text-2xl font-heading text-foreground uppercase flex items-center gap-2">
								Intel Feed
							</h3>
							<Link
								href="/blogs"
								className="text-sm font-sans font-bold uppercase hover:bg-black hover:text-white px-2 py-1 transition-colors"
							>
								Logs &rarr;
							</Link>
						</div>

						<div className="bg-card border-4 border-foreground p-4 flex-1 flex flex-col gap-4 shadow-[5px_5px_0px_0px_var(--foreground)]">
							{blogs.slice(0, 3).map((blog, i) => (
								<Link
									key={blog.slug}
									href={`/blogs/${blog.slug}`}
									className="group block bg-card border-4 border-foreground hover:border-primary p-3 transition-all relative overflow-hidden"
								>
									<div className="flex justify-between items-start mb-2">
										<span className="text-[10px] font-mono bg-foreground text-background px-1">
											CONFIDENTIAL
										</span>
										<Wifi className="w-3 h-3 text-muted-foreground" />
									</div>
									<h4 className="font-heading text-lg uppercase leading-tight mb-1 group-hover:text-primary transition-colors">
										{blog.title}
									</h4>
									<p className="text-xs font-sans text-muted-foreground line-clamp-2">
										{blog.description}
									</p>
								</Link>
							))}

							{/* Decorative Static */}
							<div className="mt-auto pt-4 border-t border-foreground/20">
								<div className="flex justify-between text-[10px] font-mono text-foreground/50">
									<span>SIGNAL STRENGTH</span>
									<span className="animate-pulse">STRONG</span>
								</div>
								<div className="h-1 w-full bg-background/10 mt-1 overflow-hidden">
									<div className="h-full bg-green-500 w-[80%] animate-pulse" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
