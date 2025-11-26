"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Terminal, Cpu, History, Zap, BookOpen } from "lucide-react";

const timeline = [
	{
		year: "1998",
		title: "Unit Initialized",
		description: "Hello World! I arrived on Earth.",
		icon: Zap,
	},
	{
		year: "2016",
		title: "First Directive",
		description: "Wrote my first HTML tag. It was a marquee. I'm sorry.",
		icon: Terminal,
	},
	{
		year: "2020",
		title: "System Upgrade",
		description: "Started Computer Science degree. Learned that P != NP (probably).",
		icon: BookOpen,
	},
	{
		year: "2024",
		title: "Deployment Ready",
		description: "Survived the pandemic and algorithms class. Ready to build.",
		icon: Cpu,
	},
];

const techStack = [
	"React",
	"Next.js",
	"TypeScript",
	"Tailwind CSS",
	"Node.js",
	"PostgreSQL",
	"Motion",
	"Git",
];

export function AboutSection() {
	return (
		<section className="container px-4 md:px-6 mx-auto py-20 relative overflow-hidden bg-background">
			{/* Halftone Background */}
			<div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[20px_20px] opacity-5 pointer-events-none" />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{/* Narration Box Header */}
				<div className="max-w-3xl mx-auto mb-16 relative">
					<div className="bg-yellow-400 border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] rotate-1">
						<h2 className="text-4xl md:text-5xl font-heading text-foreground uppercase tracking-widest text-center leading-none">
							The Origin Story
						</h2>
						<p className="font-sans font-bold text-sm uppercase tracking-widest text-center mt-2">
							How it all began...
						</p>
					</div>
					<div className="absolute -top-6 -left-6 hidden md:block">
						<div className="bg-card border-4 border-foreground px-4 py-2 shadow-[4px_4px_0px_0px_var(--foreground)] -rotate-6">
							<span className="font-heading text-xl">Vol. 1</span>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-16">
					{/* Timeline */}
					<div className="space-y-8">
						<div className="flex items-center gap-2 mb-6 bg-foreground text-background p-2 w-fit -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
							<History className="w-6 h-6" />
							<h3 className="text-2xl font-heading uppercase tracking-wider">Plot Twists</h3>
						</div>

						<div className="relative space-y-8">
							{/* Vertical Line */}
							<div className="absolute left-[19px] top-0 bottom-0 w-1 bg-foreground" />

							{timeline.map((item, index) => (
								<ScrollReveal key={index} className="relative pl-12">
									{/* Timeline Node */}
									<div className="absolute left-0 top-0 w-10 h-10 bg-card border-4 border-foreground rounded-full flex items-center justify-center z-10">
										<item.icon className="w-5 h-5 text-foreground" />
									</div>

									<div className="bg-card border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-y-1 transition-transform relative group">
										<div className="flex justify-between items-start mb-2 border-b-2 border-foreground pb-2">
											<h4 className="text-xl font-heading uppercase text-foreground">
												{item.title}
											</h4>
											<span className="font-sans font-bold bg-primary text-primary-foreground text-xs px-2 py-1 border-2 border-foreground -rotate-2">
												{item.year}
											</span>
										</div>
										<p className="text-muted-foreground font-sans text-sm font-medium">
											{item.description}
										</p>
									</div>
								</ScrollReveal>
							))}
						</div>
					</div>

					{/* Tech Stack / Superpowers */}
					<div>
						<div className="flex items-center gap-2 mb-8 bg-foreground text-background p-2 w-fit rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
							<Cpu className="w-6 h-6" />
							<h3 className="text-2xl font-heading uppercase tracking-wider">Superpowers</h3>
						</div>

						<div className="grid grid-cols-2 gap-4">
							{techStack.map((tech, index) => (
								<ScrollReveal key={tech} className="w-full" delay={index * 0.05}>
									<div className="group relative bg-card border-4 border-foreground p-3 hover:bg-primary hover:text-primary-foreground transition-all overflow-hidden shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)]">
										<div className="relative z-10 flex justify-between items-center">
											<span className="font-sans font-bold text-sm uppercase tracking-wider">
												{tech}
											</span>
											<div className="w-3 h-3 border-2 border-foreground bg-card group-hover:bg-foreground rounded-full transition-colors" />
										</div>
									</div>
								</ScrollReveal>
							))}
						</div>

						{/* Quote / Status */}
						<ScrollReveal className="mt-16">
							<div className="relative p-8 border-4 border-foreground bg-card shadow-[12px_12px_0px_0px_var(--foreground)] clip-jagged">
								<Quote className="absolute -top-6 -left-2 w-10 h-10 text-foreground bg-yellow-400 border-4 border-foreground p-1 shadow-[4px_4px_0px_0px_var(--foreground)] -rotate-12" />
								<p className="font-sans text-lg md:text-xl text-foreground leading-relaxed font-bold uppercase text-center">
									&quot;I write code so clean, even my vacuum is jealous. But seriously, I build
									things that work, look good, and don&apos;t explode.&quot;
								</p>
								<div className="mt-6 flex justify-center">
									<span className="text-xs font-mono font-bold text-background bg-foreground px-4 py-1 border-2 border-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
										NO PUN INTENDED
									</span>
								</div>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

function ScrollReveal({
	children,
	className,
	delay = 0,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.2 1"],
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

	return (
		<motion.div ref={ref} style={{ opacity, y }} transition={{ delay }} className={className}>
			{children}
		</motion.div>
	);
}
