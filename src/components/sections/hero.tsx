"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Code, Cpu, Globe } from "lucide-react";
import TypeIt from "typeit-react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-10 pb-10 md:pb-20 px-4">
			{/* Speed Lines Background */}
			<div className="absolute inset-0 bg-comic-burst opacity-10 pointer-events-none" />

			{/* Main Cover Container */}
			<div className="relative w-full max-w-5xl aspect-3/4 md:aspect-4/3 lg:aspect-auto lg:min-h-[85vh] border-8 border-foreground bg-card shadow-[8px_8px_0px_0px_var(--foreground)] md:shadow-[16px_16px_0px_0px_var(--foreground)] flex flex-col">
				{/* Top Header Strip */}
				<div className="w-full border-b-8 border-foreground bg-secondary p-4 flex justify-between items-center">
					<div className="flex flex-col">
						<span className="font-heading text-2xl md:text-4xl uppercase text-foreground leading-none">
							The Amazing
						</span>
						<span className="font-sans font-bold text-xs md:text-sm uppercase tracking-widest text-foreground">
							Property of Anton Rayne
						</span>
					</div>

					{/* Issue Box */}
					<div className="border-4 border-foreground bg-card p-2 flex flex-col items-center shadow-[4px_4px_0px_0px_var(--foreground)] text-card-foreground">
						<span className="font-sans font-bold text-xs uppercase border-b-2 border-foreground w-full text-center pb-1">
							Vol. 1
						</span>
						<span className="font-heading text-3xl md:text-4xl leading-none pt-1">#01</span>
						<span className="font-sans font-bold text-[10px] uppercase pt-1">Price: 1 Hire</span>
					</div>
				</div>

				{/* Main Content Area */}
				<div className="flex-1 relative p-6 md:p-12 flex flex-col items-center justify-center text-center z-10">
					{/* Huge Title */}
					<motion.h1
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="text-5xl md:text-8xl lg:text-9xl font-heading text-primary drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] md:drop-shadow-[7px_7px_0px_rgba(0,0,0,1)] uppercase leading-none md:mb-6 relative z-20"
					>
						The Syntax
						<br />
						<span className="text-foreground">Avenger</span>
					</motion.h1>

					{/* Central Visual / Action Scene */}
					<div className="relative w-full max-w-2xl mx-auto my-12 md:my-0.5">
						{/* Background Burst */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary clip-jagged opacity-50 z-0" />

						{/* Character/Code Placeholder */}
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="relative z-10 bg-card border-4 border-foreground p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--foreground)] -rotate-2"
						>
							<div className="flex items-center gap-2 mb-4 border-b-4 border-foreground pb-2">
								<div className="w-3 h-3 rounded-full bg-red-500 border-2 border-foreground" />
								<div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-foreground" />
								<div className="w-3 h-3 rounded-full bg-green-500 border-2 border-foreground" />
								<span className="ml-auto font-mono text-xs font-bold">mission_critical.tsx</span>
							</div>
							<TypewriterCode />
						</motion.div>
					</div>

					{/* Bottom CTA */}
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="mt-auto pt-8"
					>
						<Button
							asChild
							size="lg"
							className="h-20 px-10 text-2xl rounded-none border-4 border-foreground bg-accent text-white hover:bg-card hover:text-card-foreground hover:shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-y-1 transition-all uppercase font-heading tracking-wider shadow-[6px_6px_0px_0px_var(--foreground)]"
						>
							<Link href="/projects">
								Start Reading <ArrowRight className="ml-3 h-8 w-8" />
							</Link>
						</Button>
					</motion.div>
				</div>

				{/* Footer Strip / Credits */}
				<div className="w-full border-t-8 border-foreground bg-card p-4 flex flex-wrap justify-center gap-4 md:gap-8 items-center z-20 shrink-0">
					<span className="font-heading text-xl uppercase text-foreground">Featuring:</span>
					<div className="flex items-center gap-2 font-sans font-bold uppercase text-sm md:text-base">
						<Globe className="w-5 h-5" /> React
					</div>
					<div className="flex items-center gap-2 font-sans font-bold uppercase text-sm md:text-base">
						<Cpu className="w-5 h-5" /> TypeScript
					</div>
					<div className="flex items-center gap-2 font-sans font-bold uppercase text-sm md:text-base">
						<Code className="w-5 h-5" /> Tailwind
					</div>
					<div className="flex items-center gap-2 font-sans font-bold uppercase text-sm md:text-base">
						<Star className="w-5 h-5" /> Framer Motion
					</div>
				</div>

				{/* Barcode (Decorative) */}
				<div className="absolute bottom-18 left-1 hidden lg:block bg-card border-2 border-foreground p-1">
					<div className="flex gap-[2px] h-12 items-end">
						{[...Array(20)].map((_, i) => (
							<div
								key={i}
								className={`bg-foreground ${i % 3 === 0 ? "w-[4px]" : "w-[2px]"}`}
								style={{ height: `${30 + ((i * 5) % 70)}%` }}
							/>
						))}
					</div>
					<span className="text-[8px] font-mono block text-center mt-1">0 12345 67890</span>
				</div>
			</div>
		</section>
	);
}

function TypewriterCode() {
	return (
		<div className="font-mono text-xs md:text-sm text-left overflow-hidden p-2 rounded-xl h-[110px]">
			<TypeIt
				options={{
					loop: true,
					speed: 35,
					waitUntilVisible: true,
				}}
				getBeforeInit={(instance) => {
					instance
						.type(
							'<span class="text-primary">function</span> <span class="text-accent">executeMission</span>() {'
						)
						.break()
						.type(
							'&nbsp;&nbsp;<span class="text-primary">const</span> target = <span class="text-green-500">"Production"</span>;'
						)
						.break()
						.type(
							'&nbsp;&nbsp;<span class="text-primary">const</span> status = <span class="text-green-500">"Deployed"</span>;'
						)
						.break()
						.type(
							'&nbsp;&nbsp;<span class="text-primary">return</span> <span class="text-accent">success</span>(target);'
						)
						.break()
						.type("}")
						.pause(2000)
						.delete()
						.pause(500);

					return instance;
				}}
			/>
		</div>
	);
}
