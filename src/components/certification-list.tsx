"use client";

import { motion } from "framer-motion";
import { HardwareModules, HardwareModule } from "./hardware-modules";

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
				className="text-4xl md:text-5xl font-heading mb-12 text-center uppercase tracking-widest text-foreground drop-shadow-[4px_4px_0px_var(--foreground)]"
			>
				Licensed to <span className="text-primary">Code</span>
			</motion.h2>
			<HardwareModules>
				{certifications.map((cert, index) => (
					<HardwareModule
						key={cert.name}
						index={index}
						name={cert.name}
						issuer={cert.issuer}
						date={cert.date}
						badge={cert.badge}
						url={cert.url}
					/>
				))}
			</HardwareModules>
		</section>
	);
}
