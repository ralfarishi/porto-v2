import { getProjects } from "@/lib/mdx";
import Link from "next/link";

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<div className="container px-4 mx-auto py-12 md:py-24 relative overflow-hidden">
			{/* Background Elements */}
			<div className="fixed inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] opacity-5 pointer-events-none" />

			{/* Central Timeline (Desktop) */}
			<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-foreground -translate-x-1/2 z-0 dashed-border" />

			{/* Header */}
			<div className="relative z-10 mb-24 text-center">
				<div className="inline-block bg-background border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] transform rotate-1">
					<h1 className="font-heading text-4xl md:text-6xl uppercase text-foreground leading-none">
						Mission{" "}
						<span className="text-primary drop-shadow-[2px_2px_0px_var(--foreground)]">
							Archives
						</span>
					</h1>
				</div>
				<div className="mt-4 inline-block bg-yellow-400 border-2 border-foreground px-3 py-1 transform -rotate-1">
					<span className="font-mono font-bold text-xs uppercase tracking-widest">
						Top Secret Clearance
					</span>
				</div>
			</div>

			<div className="md:space-y-24 space-y-7 relative z-10">
				{projects.map((project, i) => {
					const isEven = i % 2 === 0;
					return (
						<div
							key={project.slug}
							className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
								!isEven ? "md:flex-row-reverse" : ""
							}`}
						>
							{/* Image Panel */}
							<div className="hidden md:block w-1/2 group">
								<Link href={`/projects/${project.slug}`} className="block relative">
									<div className="aspect-video w-full border-4 border-foreground bg-background shadow-[8px_8px_0px_0px_var(--foreground)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_var(--foreground)] overflow-hidden relative z-10">
										{project.image ? (
											<div
												className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
												style={{ backgroundImage: `url(${project.image})` }}
											/>
										) : (
											<div className="w-full h-full bg-neutral-100 flex items-center justify-center">
												<span className="font-heading text-6xl text-neutral-200">CONFIDENTIAL</span>
											</div>
										)}
										{/* Comic Corner Fold */}
										<div className="absolute top-0 right-0 w-8 h-8 bg-white border-b-4 border-l-4 border-black z-20" />
									</div>
									{/* "ZAP" Badge on Hover */}
									<div
										className={`absolute -top-6 ${
											!isEven ? "-left-6 -rotate-12" : "-right-6 rotate-12"
										} bg-yellow-400 text-black font-heading text-xl p-4 border-4 border-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform z-30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
									>
										INSPECT!
									</div>
								</Link>
							</div>

							{/* Connector Dot (Desktop) */}
							<div className="hidden md:flex items-center justify-center w-8 h-8 bg-foreground border-4 border-background rounded-full absolute left-1/2 -translate-x-1/2 z-20 shadow-[0_0_0_4px_var(--foreground)]" />

							{/* Text Panel / Narrator Box */}
							<div className="w-full md:w-1/2">
								<div
									className={`bg-background border-4 border-foreground p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--foreground)] relative ${
										isEven ? "md:-rotate-1" : "md:rotate-1"
									}`}
								>
									{/* Narrator Label */}
									<div className="absolute -top-4 left-4 bg-accent text-primary-foreground border-2 border-black px-2 py-1">
										<span className="font-bold font-mono text-xs uppercase tracking-widest">
											File #{String(i + 1).padStart(3, "0")}
										</span>
									</div>

									<h2 className="font-heading text-2xl md:text-3xl uppercase leading-tight mb-4">
										<Link
											href={`/projects/${project.slug}`}
											className="hover:text-primary transition-colors hover:underline decoration-4 underline-offset-4"
										>
											{project.title}
										</Link>
									</h2>

									<p className="font-sans text-sm md:text-base text-neutral-600 mb-6 line-clamp-3 leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dashed border-neutral-300">
										{project.techStack?.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-background border-2 border-foreground text-[10px] font-bold uppercase hover:bg-foreground hover:text-background transition-colors cursor-default"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
