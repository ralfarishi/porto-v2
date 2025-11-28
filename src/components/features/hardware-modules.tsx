"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Star } from "lucide-react";

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
		<div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto py-4">{children}</div>
	);
};

export const HardwareModule = ({ name, issuer, date, badge, url, index }: ModuleProps) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative w-full md:w-80 h-auto bg-card border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--foreground)] transition-all flex flex-col"
			initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -1 : 1 }}
			whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			viewport={{ once: true }}
		>
			{/* Badge Header */}
			<div className="flex justify-between items-center mb-4 border-b-4 border-foreground pb-2">
				<div className="bg-black text-white px-2 py-1 font-heading text-sm uppercase tracking-wider -rotate-2">
					{badge}
				</div>
				<Shield className="w-6 h-6 text-foreground" />
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col gap-2 mb-4">
				<h3 className="font-heading font-bold text-2xl leading-none uppercase text-foreground group-hover:text-primary transition-colors">
					{name}
				</h3>
				<div className="flex items-center gap-2 mt-auto">
					<Award className="w-4 h-4 text-muted-foreground" />
					<p className="text-sm font-sans font-bold text-muted-foreground uppercase">{issuer}</p>
				</div>
			</div>

			{/* Footer / Stats */}
			<div className="bg-accent border-2 border-foreground p-2 flex justify-between items-center">
				<span className="text-[10px] text-neutral-100 font-mono font-bold uppercase">
					Acquired: {date}
				</span>
				<div className="flex gap-1">
					<Star className="w-3 h-3 text-accent-foreground fill-accent-foreground" />
					<Star className="w-3 h-3 text-accent-foreground fill-accent-foreground" />
					<Star className="w-3 h-3 text-accent-foreground fill-accent-foreground" />
				</div>
			</div>

			{/* Decorative Corner */}
			<div className="absolute -top-2 -right-2 w-6 h-6 bg-accent border-2 border-foreground rounded-full flex items-center justify-center z-20 shadow-sm">
				<span className="font-heading text-xs text-neutral-100">+1</span>
			</div>
		</motion.a>
	);
};
