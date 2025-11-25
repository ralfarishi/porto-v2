"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import Link from "next/link";
import { ArrowRight, Zap, Bug, Coffee, Crosshair } from "lucide-react";

export function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
		<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden group">
			{/* Scanline Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] pointer-events-none opacity-10 z-10" />

			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-20 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
			>
				{/* Left Column: Identity / Name */}
				<div className="lg:col-span-7 text-left space-y-6">
					<motion.div
						variants={itemVariants}
						className="inline-flex items-center gap-2 px-3 py-1 md:mt-0 mt-4 rounded-sm bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest backdrop-blur-sm"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
						<span>Status: Rogue_Unit</span>
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter text-foreground uppercase leading-[0.8]"
					>
						<span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50">
							Anton
						</span>
						<span className="block text-primary relative pl-2 md:pl-4">
							Rayne
							<span className="absolute -top-4 -right-4 md:top-0 md:-right-12 text-xs md:text-sm font-mono text-primary/50 border border-primary/30 px-2 py-1 rounded-full tracking-widest rotate-12 hidden md:block">
								[WANTED]
							</span>
						</span>
					</motion.h1>

					<motion.div
						variants={itemVariants}
						className="flex flex-col gap-2 border-l-4 border-primary pl-6 py-2"
					>
						<h2 className="text-xl md:text-2xl font-mono font-bold uppercase tracking-widest text-muted-foreground">
							Full-Stack Mercenary
						</h2>
						<p className="text-sm md:text-base font-mono text-primary/80 max-w-md">
							Specializing in digital infiltration, frontend fortification, and server-side sabotage
							(the good kind). Tbh, Gemini 3 Pro carried like 99.9% of it.
						</p>
					</motion.div>

					<motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
						<MagneticButton>
							<Button
								asChild
								size="lg"
								className="h-14 px-8 text-lg rounded-none border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] relative overflow-hidden group"
							>
								<Link href="/projects">
									<span className="relative z-10 flex items-center gap-2">
										Initialize_Protocol <ArrowRight className="h-4 w-4" />
									</span>
									<div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
								</Link>
							</Button>
						</MagneticButton>
						<MagneticButton>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-14 px-8 text-lg rounded-none border border-border hover:border-primary/50 bg-background/50 backdrop-blur-md uppercase tracking-widest font-bold hover:text-primary transition-all"
							>
								<Link href="#contact">Establish_Uplink</Link>
							</Button>
						</MagneticButton>
					</motion.div>
				</div>

				{/* Right Column: Personal Stats / 'Dossier' */}
				<div className="lg:col-span-5 relative mt-12 lg:mt-0">
					<motion.div
						variants={itemVariants}
						className="relative bg-card/30 border border-primary/20 p-6 backdrop-blur-sm"
					>
						{/* Decorative Corners */}
						<div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
						<div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
						<div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
						<div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

						<div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-2">
							<span className="text-xs font-mono text-primary uppercase tracking-widest">
								Operator_Stats
							</span>
							<Crosshair className="w-4 h-4 text-primary animate-spin-slow" />
						</div>

						<div className="space-y-6">
							<div className="space-y-2">
								<div className="flex justify-between text-xs font-mono uppercase">
									<span className="text-muted-foreground flex items-center gap-2">
										<Zap className="w-3 h-3 text-primary" /> Energy_Output
									</span>
									<span className="text-primary">110%</span>
								</div>
								<div className="h-1 w-full bg-primary/10 overflow-hidden">
									<div className="h-full bg-primary w-[110%] animate-pulse" />
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between text-xs font-mono uppercase">
									<span className="text-muted-foreground flex items-center gap-2">
										<Bug className="w-3 h-3 text-primary" /> Bugs_Neutralized
									</span>
									<span className="text-primary">8,472</span>
								</div>
								<div className="h-1 w-full bg-primary/10 overflow-hidden">
									<div className="h-full bg-primary w-[85%]" />
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between text-xs font-mono uppercase">
									<span className="text-muted-foreground flex items-center gap-2">
										<Coffee className="w-3 h-3 text-primary" /> Caffeine_Level
									</span>
									<span className="text-primary">CRITICAL</span>
								</div>
								<div className="h-1 w-full bg-primary/10 overflow-hidden">
									<div className="h-full bg-destructive w-[95%] animate-pulse" />
								</div>
							</div>
						</div>

						<div className="mt-8 pt-4 border-t border-primary/10">
							<div className="text-[10px] font-mono text-muted-foreground leading-relaxed">
								<span className="text-primary">WARNING:</span> Subject is known to refactor legacy
								code without authorization. Approach with extreme caution and a fresh pot of coffee.
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
