"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Contact() {
	return (
		<section id="contact" className="container px-6 md:px-8 mx-auto py-20 text-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl mx-auto bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg"
			>
				<h2 className="text-2xl md:text-4xl font-heading font-bold mb-6 text-foreground">
					Get In Touch
				</h2>
				<p className="text-lg text-muted-foreground mb-10 leading-relaxed">
					I&apos;m always open to discussing new projects, creative ideas or opportunities to be
					part of your visions. Let&apos;s build something amazing together.
				</p>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl mx-auto">
					<MagneticButton className="w-full">
						<Button
							asChild
							size="sm"
							className="w-full rounded-full gap-2 h-10 px-4 text-md shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90"
						>
							<Link href="mailto:john@example.com">
								<Icons.mail className="h-5 w-5" />
								<span>Email</span>
							</Link>
						</Button>
					</MagneticButton>
					<MagneticButton className="w-full">
						<Button
							asChild
							variant="outline"
							size="sm"
							className="w-full rounded-full gap-2 h-10 px-4 text-md border-border/50 bg-background/50 hover:bg-background hover:border-primary/50 transition-all hover:-translate-y-1"
						>
							<Link href="https://github.com" target="_blank">
								<Icons.gitHub className="h-5 w-5" />
								<span>GitHub</span>
							</Link>
						</Button>
					</MagneticButton>
					<MagneticButton className="w-full">
						<Button
							asChild
							variant="outline"
							size="sm"
							className="w-full rounded-full gap-2 h-10 px-4 text-md border-border/50 bg-background/50 hover:bg-background hover:border-primary/50 transition-all hover:-translate-y-1"
						>
							<Link href="https://linkedin.com" target="_blank">
								<Icons.linkedIn className="h-5 w-5" />
								<span>LinkedIn</span>
							</Link>
						</Button>
					</MagneticButton>
					<MagneticButton className="w-full">
						<Button
							asChild
							variant="outline"
							size="sm"
							className="w-full rounded-full gap-2 h-10 px-4 text-md border-border/50 bg-background/50 hover:bg-background hover:border-primary/50 transition-all hover:-translate-y-1"
						>
							<Link href="https://instagram.com" target="_blank">
								<Icons.instagram className="h-5 w-5" />
								<span>Instagram</span>
							</Link>
						</Button>
					</MagneticButton>
				</div>
			</motion.div>
		</section>
	);
}
