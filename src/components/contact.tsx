"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Contact() {
	return (
		<section id="contact" className="container px-6 md:px-8 mx-auto py-10 text-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get In Touch</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto mb-12">
					I&apos;m always open to discussing new projects, creative ideas or opportunities to be
					part of your visions.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex flex-wrap justify-center gap-6"
			>
				<Button asChild variant="outline" size="lg" className="rounded-full gap-2 h-12 px-8">
					<Link href="mailto:john@example.com">
						<Mail className="h-5 w-5" />
						<span>Email Me</span>
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg" className="rounded-full gap-2 h-12 px-8">
					<Link href="https://github.com" target="_blank">
						<Github className="h-5 w-5" />
						<span>GitHub</span>
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg" className="rounded-full gap-2 h-12 px-8">
					<Link href="https://linkedin.com" target="_blank">
						<Linkedin className="h-5 w-5" />
						<span>LinkedIn</span>
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg" className="rounded-full gap-2 h-12 px-8">
					<Link href="https://twitter.com" target="_blank">
						<Twitter className="h-5 w-5" />
						<span>Twitter</span>
					</Link>
				</Button>
			</motion.div>
		</section>
	);
}
