"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

interface ManifestItemProps {
	title: string;
	id: string;
	date?: string;
	status?: string;
	tech?: string[];
	href: string;
	index: number;
}

export const ManifestList = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col w-full max-w-5xl mx-auto font-mono text-sm", className)}>
			{/* Header Row */}
			<div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 border-b border-primary/20 text-primary/50 text-xs uppercase tracking-widest mb-4">
				<div className="col-span-2">ID_REF</div>
				<div className="col-span-4">SUBJECT</div>
				<div className="col-span-2">DATE_LOG</div>
				<div className="col-span-3">TECH_STACK</div>
				<div className="col-span-1 text-right">ACTION</div>
			</div>
			{children}
		</div>
	);
};

export const ManifestItem = ({ title, id, date, tech, href, index }: ManifestItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, delay: index * 0.05 }}
			viewport={{ once: true }}
		>
			<Link
				href={href}
				className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 border-b border-border/40 hover:border-primary/50 hover:bg-primary/5 items-center overflow-hidden"
			>
				{/* Hover Scanline */}
				<div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />

				{/* ID Column */}
				<div className="col-span-12 md:col-span-2 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
					<Terminal className="w-3 h-3" />
					<span className="opacity-50">[{id}]</span>
				</div>

				{/* Title Column */}
				<div className="col-span-12 md:col-span-4 font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors text-lg md:text-sm">
					{title}
				</div>

				{/* Date Column */}
				<div className="col-span-6 md:col-span-2 text-muted-foreground/70 text-xs">
					{date || "UNKNOWN"}
				</div>

				{/* Tech Column */}
				<div className="col-span-6 md:col-span-3 flex flex-wrap gap-1">
					{tech?.slice(0, 3).map((t) => (
						<span
							key={t}
							className="px-1 py-0.5 bg-background border border-border text-[10px] text-muted-foreground uppercase"
						>
							{t}
						</span>
					))}
					{tech && tech.length > 3 && (
						<span className="px-1 py-0.5 text-[10px] text-muted-foreground">
							+{tech.length - 3}
						</span>
					)}
				</div>

				{/* Action Column */}
				<div className="col-span-12 md:col-span-1 flex justify-end">
					<ArrowRight className="w-4 h-4 text-primary/0 group-hover:text-primary transition-all -translate-x-2 group-hover:translate-x-0" />
				</div>
			</Link>
		</motion.div>
	);
};
