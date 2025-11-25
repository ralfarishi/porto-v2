"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface ModuleProps {
	name: string;
	issuer: string;
	date: string;
	badge: string;
	url: string;
	index: number;
}

export const HardwareModules = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto py-1">{children}</div>
	);
};

export const HardwareModule = ({ name, issuer, date, badge, url, index }: ModuleProps) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative w-full md:w-72 h-40 bg-card border border-border/50 hover:border-primary/50 overflow-hidden flex flex-col justify-between p-4"
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			viewport={{ once: true }}
		>
			{/* Circuit Pattern Background */}
			<div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] bg-size-[10px_10px]" />

			{/* Top Label */}
			<div className="flex justify-between items-start relative z-10">
				<div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-primary/20 px-1 bg-primary/5">
					MOD_ID: {index.toString().padStart(4, "0")}
				</div>
				<div className="flex items-center gap-2">
					<span className="text-[10px] font-mono text-primary/60 border border-primary/20 px-1">
						{badge}
					</span>
					<Cpu className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10">
				<h3 className="font-heading font-bold text-lg leading-tight uppercase group-hover:text-primary transition-colors">
					{name}
				</h3>
				<div className="flex justify-between items-end mt-1">
					<p className="text-xs font-mono text-muted-foreground">{issuer}</p>
					<p className="text-[10px] font-mono text-muted-foreground/50">{date}</p>
				</div>
			</div>

			{/* Bottom Connectors */}
			<div className="absolute bottom-0 left-0 right-0 h-2 flex justify-center gap-1">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="w-2 h-full bg-primary/20 group-hover:bg-primary/60 transition-colors rounded-t-sm"
					/>
				))}
			</div>

			{/* Status LED */}
			<div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(var(--primary),0.5)]" />
		</motion.a>
	);
};
