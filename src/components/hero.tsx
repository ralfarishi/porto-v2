"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<section
			ref={ref}
			className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
			</div>

			<motion.div
				style={{ y, opacity }}
				className="container px-6 md:px-8 mx-auto text-center z-10"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
						Hello, I&apos;m
					</h2>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50">
						John Doe
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						A passionate developer building digital experiences that matter. Specializing in modern
						web technologies and creative design.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button asChild size="lg" className="rounded-full">
							<Link href="#projects">View Projects</Link>
						</Button>
						<Button asChild variant="outline" size="lg" className="rounded-full">
							<Link href="#contact">Contact Me</Link>
						</Button>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				style={{ opacity }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 1.5 }}
			>
				<ArrowDown className="h-6 w-6 text-muted-foreground" />
			</motion.div>
		</section>
	);
}
