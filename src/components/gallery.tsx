import React from "react";
import { cn } from "@/lib/utils";

interface GalleryProps {
	children: React.ReactNode;
	className?: string;
}

export function Gallery({ children, className }: GalleryProps) {
	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 my-8", className)}>
			{React.Children.map(children, (child) => (
				<div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/30 hover:shadow-lg transition-all duration-300 group">
					<div className="absolute inset-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-500 group-hover:[&>img]:scale-105">
						{child}
					</div>
				</div>
			))}
		</div>
	);
}
