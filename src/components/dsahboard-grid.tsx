"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const LayoutGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const GridItem = ({
	className,
	title,
	description,
	header,
	icon,
	href,
	label,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	href?: string;
	label?: string;
}) => {
	const content = (
		<>
			<React.Fragment key="header">{header}</React.Fragment>
			<div
				key="content"
				className="group-hover/dashboard:translate-x-2 transition duration-200 relative z-20"
			>
				<div className="flex items-center justify-between mb-2 mt-2">
					{icon}
					{label && (
						<span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-none">
							{label}
						</span>
					)}
				</div>
				<div className="font-heading font-bold text-foreground mb-2 uppercase tracking-wide">
					{title}
				</div>
				<div className="font-mono font-normal text-muted-foreground text-xs">{description}</div>
			</div>

			<div className="absolute top-2 right-2 text-[8px] font-mono text-primary/20 group-hover/dashboard:text-primary/50 transition-colors pointer-events-none">
				{title?.toString().slice(0, 3).toUpperCase()}_0{title?.toString().length}
			</div>
			<div className="absolute bottom-2 left-2 flex gap-1 pointer-events-none">
				<div className="w-1 h-1 bg-primary/20 group-hover/dashboard:bg-primary/50" />
				<div className="w-1 h-1 bg-primary/20 group-hover/dashboard:bg-primary/50" />
				<div className="w-1 h-1 bg-primary/20 group-hover/dashboard:bg-primary/50" />
			</div>
		</>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			viewport={{ once: true }}
			className={cn(
				"row-span-1 rounded-none group/dashboard hover:shadow-xl transition duration-200 shadow-none p-4 bg-card border border-border/50 justify-between flex flex-col space-y-4 relative overflow-hidden",
				className
			)}
		>
			<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/30 group-hover/dashboard:border-primary transition-colors" />
			<div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary/30 group-hover/dashboard:border-primary transition-colors" />
			<div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/30 group-hover/dashboard:border-primary transition-colors" />
			<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/30 group-hover/dashboard:border-primary transition-colors" />

			{/* Scanline Effect */}
			<div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover/dashboard:translate-y-full transition-transform duration-1000 pointer-events-none" />

			{href ? (
				<Link href={href} className="flex flex-col h-full justify-between relative z-10">
					{content}
				</Link>
			) : (
				<div className="flex flex-col h-full justify-between relative z-10">{content}</div>
			)}
		</motion.div>
	);
};
