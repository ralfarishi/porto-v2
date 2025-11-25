"use client";

import { Project, Blog } from "@/lib/mdx";
import { motion } from "framer-motion";
import { ManifestList, ManifestItem } from "@/components/manifest-list";
import { Terminal, Activity, Wifi, Database } from "lucide-react";
import Link from "next/link";

interface HomeDashboardProps {
	projects: Project[];
	blogs: Blog[];
}

export function HomeDashboard({ projects, blogs }: HomeDashboardProps) {
	return (
		<section className="container px-4 md:px-6 mx-auto py-10">
			{/* Dashboard Header */}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-primary/20 pb-4">
				<div className="w-full md:w-auto">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-xs font-mono text-primary/60 mb-2 uppercase tracking-widest text-left"
					>
						{"// SYSTEM_OVERVIEW"}
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-left"
					>
						Command_Center
					</motion.h2>
				</div>

				{/* System Status Indicators */}
				<div className="flex gap-6 mt-6 md:mt-0 font-mono text-xs text-muted-foreground">
					<div className="flex items-center gap-2">
						<Activity className="w-4 h-4 text-primary animate-pulse" />
						<span>SYS: ONLINE</span>
					</div>
					<div className="flex items-center gap-2">
						<Wifi className="w-4 h-4 text-primary" />
						<span>NET: SECURE</span>
					</div>
					<div className="flex items-center gap-2">
						<Database className="w-4 h-4 text-primary" />
						<span>DB: CONNECTED</span>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{/* Main Sector: Active Projects */}
				<div className="lg:col-span-2 space-y-6">
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between border-l-2 border-primary pl-4 gap-2">
						<h3 className="text-xl font-heading font-bold uppercase tracking-widest">
							Active_Missions
						</h3>
						<Link
							href="/projects"
							className="text-xs font-mono text-primary hover:underline uppercase"
						>
							[VIEW_ALL_MISSIONS]
						</Link>
					</div>

					<div className="bg-card/30 border border-border/50 p-1">
						<ManifestList className="max-w-full">
							{projects.slice(0, 3).map((project, i) => (
								<ManifestItem
									key={project.slug}
									index={i}
									id={`MSN-${String(i + 1).padStart(3, "0")}`}
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

				{/* Side Sector: Intel Feed */}
				<div className="space-y-6">
					<div className="flex items-center justify-between border-l-2 border-primary pl-4">
						<h3 className="text-xl font-heading font-bold uppercase tracking-widest">Intel_Feed</h3>
						<Link
							href="/blogs"
							className="text-xs font-mono text-primary hover:underline uppercase"
						>
							[ARCHIVE]
						</Link>
					</div>

					<div className="flex flex-col gap-2">
						{blogs.slice(0, 3).map((blog, i) => (
							<motion.div
								key={blog.slug}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
							>
								<Link
									href={`/blogs/${blog.slug}`}
									className="group block bg-card/30 border border-border/40 p-4 hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
								>
									<div className="absolute top-0 right-0 p-1">
										<Terminal className="w-3 h-3 text-primary/20 group-hover:text-primary transition-colors" />
									</div>
									<div className="text-[10px] font-mono text-primary/50 mb-2">
										LOG_ENTRY_{new Date(blog.date).getTime().toString().slice(-6)}
									</div>
									<h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-primary transition-colors line-clamp-2">
										{blog.title}
									</h4>
									<p className="text-xs text-muted-foreground font-mono line-clamp-2">
										{blog.description}
									</p>
									<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
