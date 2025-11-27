"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";

interface GalleryProps {
	children: React.ReactNode;
	className?: string;
}

export function Gallery({ children, className }: GalleryProps) {
	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-3 my-12", className)}>
			{React.Children.map(children, (child, index) => (
				<div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
					{/* Hover Overlay */}
					<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />

					{/* Icon */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
						<div className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
							<Maximize2 className="w-5 h-5 text-foreground" />
						</div>
					</div>

					<div className="absolute inset-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-500 group-hover:[&>img]:scale-105">
						{child}
					</div>
				</div>
			))}
		</div>
	);
}
