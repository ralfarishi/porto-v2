"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export const BentoGrid = ({
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

export const BentoGridItem = ({
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
			<div key="content" className="group-hover/bento:translate-x-2 transition duration-200">
				<div className="flex items-center justify-between mb-2 mt-2">
					{icon}
					{label && (
						<span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded-full">
							{label}
						</span>
					)}
				</div>
				<div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
					{title}
				</div>
				<div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
					{description}
				</div>
			</div>
		</>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/20 bg-white border border-transparent justify-between flex flex-col space-y-4",
				className
			)}
		>
			{href ? (
				<Link href={href} className="flex flex-col h-full justify-between">
					{content}
				</Link>
			) : (
				content
			)}
		</motion.div>
	);
};
