import React from "react";
import { cn } from "@/lib/utils";

interface GalleryProps {
	children: React.ReactNode;
	className?: string;
}

export function Gallery({ children, className }: GalleryProps) {
	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 my-8 px-2", className)}>
			{React.Children.map(children, (child, index) => {
				const label = String.fromCharCode(65 + (index % 26)); // A, B, C...
				return (
					<div className="relative aspect-video overflow-hidden border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_var(--foreground)] transition-all duration-300 group">
						{/* Exhibit Label */}
						<div className="absolute top-0 left-0 z-20 bg-accent border-b-4 border-r-4 border-foreground px-3 py-1">
							<span className="font-sans text-neutral-100 text-xs uppercase tracking-widest">
								Exhibit {label}
							</span>
						</div>

						<div className="absolute inset-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-500 group-hover:[&>img]:scale-110 grayscale group-hover:grayscale-0">
							{child}
						</div>

						{/* Comic Corner Fold/Detail */}
						<div className="absolute bottom-0 right-0 w-6 h-6 bg-background border-t-4 border-l-4 border-foreground z-20" />
					</div>
				);
			})}
		</div>
	);
}
