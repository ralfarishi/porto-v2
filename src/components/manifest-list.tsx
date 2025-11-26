"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
		<div className={cn("flex flex-col w-full max-w-5xl mx-auto font-sans text-sm", className)}>
			{/* Header Row */}
			<div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 border-4 border-foreground bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_var(--foreground)]">
				<div className="col-span-2">No.</div>
				<div className="col-span-4">Subject</div>
				<div className="col-span-2">Date Log</div>
				<div className="col-span-3">Tech Stack</div>
				<div className="col-span-1 text-right">Action</div>
			</div>
			<div className="space-y-4">{children}</div>
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
				className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 border-4 border-foreground bg-card hover:bg-primary hover:text-primary-foreground items-center overflow-hidden shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_var(--foreground)] transition-all"
			>
				{/* ID Column */}
				<div className="col-span-12 md:col-span-2 flex items-center gap-2 text-card-foreground group-hover:text-primary-foreground transition-colors">
					<span className="opacity-70 font-bold">{id}</span>
				</div>

				{/* Title Column */}
				<div className="col-span-12 md:col-span-4 font-heading text-card-foreground uppercase tracking-wide group-hover:text-primary-foreground transition-colors text-xl md:text-lg">
					{title}
				</div>

				{/* Date Column */}
				<div className="col-span-12 md:col-span-2 text-card-foreground/70 group-hover:text-primary-foreground/90 text-xs font-bold">
					{date || "UNKNOWN"}
				</div>

				{/* Tech Column */}
				<div className="col-span-12 md:col-span-3 flex flex-wrap gap-2">
					{tech?.slice(0, 3).map((t) => (
						<span
							key={t}
							className="px-2 py-1 bg-card border-2 border-foreground text-[10px] text-card-foreground font-bold uppercase shadow-[2px_2px_0px_0px_var(--foreground)] group-hover:shadow-none transition-all"
						>
							{t}
						</span>
					))}
					{tech && tech.length > 3 && (
						<span className="px-2 py-1 text-[10px] text-card-foreground group-hover:text-primary-foreground font-bold">
							+{tech.length - 3}
						</span>
					)}
				</div>

				{/* Action Column */}
				<div className="col-span-12 md:col-span-1 flex justify-end">
					<ArrowRight className="w-6 h-6 text-card-foreground group-hover:text-primary-foreground transition-all -translate-x-2 group-hover:translate-x-0" />
				</div>
			</Link>
		</motion.div>
	);
};
