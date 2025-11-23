"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const certifications = [
	{
		name: "AWS Certified Solutions Architect",
		issuer: "Amazon Web Services",
		date: "2023",
		badge: "Professional",
		url: "https://aws.amazon.com/certification/",
	},
	{
		name: "Meta Front-End Developer",
		issuer: "Meta",
		date: "2023",
		badge: "Specialization",
		url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
	},
	{
		name: "Google UX Design",
		issuer: "Google",
		date: "2022",
		badge: "Professional",
		url: "https://www.coursera.org/professional-certificates/google-ux-design",
	},
];

export function CertificationList() {
	return (
		<section id="certifications" className="container px-6 md:px-8 mx-auto py-10">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
			>
				Certifications
			</motion.h2>
			<div className="max-w-2xl mx-auto flex flex-col gap-4">
				{certifications.map((cert, index) => (
					<motion.a
						key={cert.name}
						href={cert.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className="flex flex-col gap-1">
							<h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
								{cert.name}
							</h3>
							<p className="text-sm text-muted-foreground">{cert.issuer}</p>
						</div>

						<div className="flex items-center gap-4 mt-4 md:mt-0">
							<Badge
								variant="secondary"
								className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
							>
								{cert.badge}
							</Badge>
							<span className="text-sm font-mono text-muted-foreground/60">{cert.date}</span>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
}
