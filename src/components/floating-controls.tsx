"use client";

import { useState } from "react";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SourceDownloadButton } from "@/components/source-download-fab";
import { ThemeList } from "@/components/theme-preview-widget";
import { cn } from "@/lib/utils";

export function FloatingControls() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
			{/* Unified Panel */}
			<div
				className={cn(
					"bg-background/95 backdrop-blur-md border border-primary/30 p-1 shadow-[0_0_30px_rgba(var(--primary),0.1)] w-72 transition-all duration-300 origin-bottom-right relative overflow-hidden",
					isOpen
						? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
						: "opacity-0 scale-95 translate-y-10 pointer-events-none"
				)}
			>
				{/* Decorative Grid Background */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[1rem_1rem] pointer-events-none opacity-20" />

				{/* Corner Markers */}
				<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
				<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
				<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
				<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

				<div className="relative z-10 p-4 space-y-6">
					<ThemeList />

					<div className="border-t border-primary/20" />

					<div className="flex flex-col gap-2">
						<div className="flex items-center justify-between mb-1">
							<h3 className="font-heading text-sm font-bold uppercase tracking-widest">
								Source_Intel
							</h3>
						</div>
						<SourceDownloadButton />
					</div>
				</div>
			</div>

			{/* Main Trigger Button */}
			<Button
				onClick={() => setIsOpen(!isOpen)}
				size="icon"
				className={cn(
					"h-12 w-12 rounded-none border border-primary/50 bg-background/80 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] hover:bg-primary/10 hover:border-primary transition-all z-50 group relative overflow-hidden pointer-events-auto",
					isOpen && "border-primary bg-primary/10"
				)}
			>
				{/* Scanline */}
				<div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

				{/* Corner Markers */}
				<div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/50 group-hover:border-primary transition-colors" />
				<div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/50 group-hover:border-primary transition-colors" />

				<div className="relative z-10 transition-transform duration-300">
					{isOpen ? (
						<X className="h-5 w-5 text-primary" />
					) : (
						<Settings className="h-5 w-5 text-primary group-hover:rotate-90 transition-transform duration-500" />
					)}
				</div>
				<span className="sr-only">Toggle Controls</span>
			</Button>
		</div>
	);
}
