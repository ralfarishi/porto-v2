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
		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 my-8", className)}>
			{React.Children.map(children, (child, index) => (
				<div className="relative group">
					{/* Frame Decorations */}
					<div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors z-20" />
					<div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors z-20" />
					<div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors z-20" />
					<div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors z-20" />

					<div className="relative aspect-video overflow-hidden rounded-none border border-primary/20 bg-muted/10 group-hover:border-primary/50 transition-all duration-300">
						{/* Scanline Overlay */}
						<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] pointer-events-none opacity-0 group-hover:opacity-20 z-10 transition-opacity" />

						{/* Label */}
						<div className="absolute top-2 left-2 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="bg-primary/90 text-primary-foreground text-[10px] font-mono uppercase px-1.5 py-0.5 tracking-wider">
								IMG_0{index + 1}
							</span>
						</div>

						{/* Icon */}
						<div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="bg-black/50 backdrop-blur-sm p-1.5 border border-primary/50 text-primary">
								<Maximize2 className="w-3 h-3" />
							</div>
						</div>

						<div className="absolute inset-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-700 group-hover:[&>img]:scale-105 [&>img]:grayscale-[0.5] group-hover:[&>img]:grayscale-0">
							{child}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
