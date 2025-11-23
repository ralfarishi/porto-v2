"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{certifications.map((cert, index) => (
					<motion.a
						key={cert.name}
						href={cert.url}
						target="_blank"
						rel="noopener noreferrer"
						className="block h-full group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Card className="bg-background/50 backdrop-blur-sm border-muted/50 group-hover:border-primary/50 transition-colors h-full py-4">
							<CardHeader>
								<div className="flex justify-between items-start mb-2">
									<Badge variant="outline">{cert.badge}</Badge>
									<span className="text-sm text-muted-foreground">{cert.date}</span>
								</div>
								<CardTitle className="font-heading text-lg">{cert.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{cert.issuer}</p>
							</CardContent>
						</Card>
					</motion.a>
				))}
			</div>
		</section>
	);
}
