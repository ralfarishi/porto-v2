"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Terminal, Cpu, History } from "lucide-react";

const timeline = [
	{
		year: "1998",
		title: "Unit_Initialized",
		description: "Hello World! I arrived on Earth.",
	},
	{
		year: "2016",
		title: "First_Directive",
		description: "Wrote my first HTML tag. It was a marquee. I'm sorry.",
	},
	{
		year: "2020",
		title: "System_Upgrade",
		description: "Started Computer Science degree. Learned that P != NP (probably).",
	},
	{
		year: "2024",
		title: "Deployment_Ready",
		description: "Survived the pandemic and algorithms class. Ready to build.",
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
		<section className="container px-6 mx-auto py-20 relative overflow-hidden">
			{/* Background Grid */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-5xl mx-auto"
			>
				{/* Header */}
				<div className="flex items-center gap-4 mb-16 border-b border-primary/20 pb-4">
					<Terminal className="w-8 h-8 text-primary" />
					<h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest">
						System_<span className="text-primary">Specs</span>
					</h2>
					<div className="ml-auto text-xs font-mono text-muted-foreground hidden md:block">
						ID: 8472-ALPHA
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-16">
					{/* Timeline / Changelog */}
					<div className="space-y-8">
						<div className="flex items-center gap-2 mb-6">
							<History className="w-5 h-5 text-primary" />
							<h3 className="text-xl font-heading font-bold uppercase tracking-wider">Changelog</h3>
						</div>

						<div className="relative border-l-2 border-primary/20 ml-3 space-y-12">
							{timeline.map((item, index) => (
								<ScrollReveal key={index} className="ml-8 relative">
									{/* Timeline Node */}
									<div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full flex items-center justify-center">
										<div className="w-2 h-2 bg-primary rounded-full" />
									</div>

									<div className="flex flex-col gap-1">
										<span className="text-xs font-mono text-primary/60 uppercase tracking-widest">
											[{item.year}]
										</span>
										<h4 className="text-lg font-bold font-heading uppercase text-foreground">
											{item.title}
										</h4>
										<p className="text-muted-foreground font-mono text-sm mt-1 border-l border-border/50 pl-4">
											{item.description}
										</p>
									</div>
								</ScrollReveal>
							))}
						</div>
					</div>

					{/* Tech Stack / Modules */}
					<div>
						<div className="flex items-center gap-2 mb-8">
							<Cpu className="w-5 h-5 text-primary" />
							<h3 className="text-xl font-heading font-bold uppercase tracking-wider">
								Installed_Modules
							</h3>
						</div>

						<div className="grid grid-cols-2 gap-2">
							{techStack.map((tech, index) => (
								<ScrollReveal key={tech} className="w-full" delay={index * 0.05}>
									<div className="group relative bg-card/30 border border-border/50 p-3 hover:border-primary/50 transition-all overflow-hidden">
										<div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
										<div className="relative z-10 flex justify-between items-center">
											<span className="font-mono text-sm uppercase tracking-wider">{tech}</span>
											<div className="w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary rounded-full transition-colors" />
										</div>
									</div>
								</ScrollReveal>
							))}
						</div>

						{/* Quote / Status */}
						<ScrollReveal className="mt-16">
							<div className="relative p-6 border border-primary/20 bg-primary/5">
								<Quote className="absolute -top-3 -left-3 w-6 h-6 text-primary bg-background p-1" />
								<p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed italic">
									&quot;The best way to predict the future is to invent it. Or at least write clean
									code that doesn&apos;t break when you look at it wrong.&quot;
								</p>
								<div className="mt-4 flex justify-end">
									<span className="text-xs font-mono text-primary uppercase">
										{"// STATUS: OPTIMIZED"}
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
