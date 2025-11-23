"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden group">
			<motion.div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100" />

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 max-w-4xl mx-auto space-y-8"
			>
				<motion.h1
					variants={itemVariants}
					className="text-5xl md:text-7xl mt-10 font-heading font-bold tracking-tight text-foreground"
				>
					Making the web <br />
					<span className="text-primary">fun again.</span>
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
				>
					I&apos;m a developer who loves building things that look good and work well. No fluff,
					just code. Yep, Gemini 3 Pro did most of the work.
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<MagneticButton>
						<Button asChild size="lg" className="rounded-full h-12 px-8 text-lg gap-2">
							<Link href="/projects">
								Check my work <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</MagneticButton>
					<MagneticButton>
						<Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-lg">
							<Link href="#contact">Say hi</Link>
						</Button>
					</MagneticButton>
				</motion.div>
			</motion.div>
		</section>
	);
}
