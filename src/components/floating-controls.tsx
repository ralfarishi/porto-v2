"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SourceDownloadButton } from "@/components/source-download-fab";
import { ThemeList } from "@/components/theme-preview-widget";
import { cn } from "@/lib/utils";

export function FloatingControls() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
			{/* Unified Panel */}
			<div
				className={cn(
					"bg-card border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] w-72 transition-all duration-300 origin-bottom-right",
					isOpen
						? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
						: "opacity-0 scale-95 translate-y-10 pointer-events-none"
				)}
			>
				<ThemeList />

				<div className="my-4 border-t-2 border-dashed border-foreground/50" />

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between mb-2">
						<h3 className="font-heading text-lg uppercase">Source Intel</h3>
					</div>
					<SourceDownloadButton />
				</div>
			</div>

			{/* Main Trigger Button */}
			<Button
				onClick={() => setIsOpen(!isOpen)}
				size="icon"
				className={cn(
					"h-14 w-14 rounded-full border-4 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--foreground)] z-50",
					isOpen ? "rotate-45" : "rotate-0"
				)}
			>
				<Zap className="h-8 w-8" />
				<span className="sr-only">Toggle Controls</span>
			</Button>
		</div>
	);
}
