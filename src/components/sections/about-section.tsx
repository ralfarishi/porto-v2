"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";

const timeline = [
	{
		year: "1998",
		title: "Born",
		description: "Hello World! I arrived on Earth.",
	},
	{
		year: "2016",
		title: "First Line of Code",
		description: "Wrote my first HTML tag. It was a marquee. I'm sorry.",
	},
	{
		year: "2020",
		title: "University",
		description: "Started Computer Science degree. Learned that P != NP (probably).",
	},
	{
		year: "2024",
		title: "Graduated",
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
	"Framer Motion",
	"Git",
];

export function AboutSection() {
	return (
		<section className="container px-6 mx-auto py-20">
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true, margin: "-100px" }}
				className="text-3xl md:text-5xl font-heading font-bold text-center mb-12"
			>
				About <span className="text-primary">Me</span>
			</motion.h2>

			<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
				{/* Timeline */}
				<div className="space-y-8">
					<motion.h3
						initial={{ opacity: 0, y: 70 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-100px" }}
						className="text-2xl font-bold mb-6"
					>
						My Journey
					</motion.h3>
					<div className="relative border-l border-border ml-3 space-y-8 pb-8">
						{timeline.map((item, index) => (
							<ScrollReveal key={index} className="ml-6 relative">
								<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary border border-background" />
								<div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
									<span className="text-sm font-mono text-primary font-bold">{item.year}</span>
									<h4 className="text-lg font-semibold">{item.title}</h4>
								</div>
								<p className="text-muted-foreground">{item.description}</p>
							</ScrollReveal>
						))}
					</div>
				</div>

				{/* Tech Stack */}
				<div>
					<motion.h3
						initial={{ opacity: 0, y: 70 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-100px" }}
						className="text-2xl font-bold mb-6"
					>
						Tech Stack
					</motion.h3>
					<div className="flex flex-wrap gap-3">
						{techStack.map((tech) => (
							<ScrollReveal key={tech} className="inline-block">
								<MagneticButton>
									<div className="px-4 py-2 rounded-full bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default">
										{tech}
									</div>
								</MagneticButton>
							</ScrollReveal>
						))}
					</div>

					<ScrollReveal className="mt-12">
						<div className="p-6 rounded-2xl bg-muted/30 border border-border">
							<p className="text-lg leading-relaxed italic">
								&quot;I build things for the web. Sometimes they work. Sometimes they break. But I
								always learn something new.&quot;
							</p>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

function ScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.2 1"],
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

	return (
		<motion.div ref={ref} style={{ opacity, y }} className={className}>
			{children}
		</motion.div>
	);
}
