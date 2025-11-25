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
				className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center uppercase tracking-widest"
			>
				Certifications <span className="text-primary">{"//"}</span>
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
