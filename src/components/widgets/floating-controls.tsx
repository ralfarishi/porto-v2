"use client";

import { useState } from "react";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SourceDownloadButton } from "@/components/widgets/source-download-fab";
import { cn } from "@/lib/utils";
import { ThemePreviewButton } from "./theme-preview-button";
import { Icons } from "../ui/icons";

export function FloatingControls() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
			{/* Unified Panel */}
			<div
				className={cn(
					"bg-background/80 backdrop-blur-md border border-border p-4 shadow-xl rounded-2xl w-72 transition-all duration-300 origin-bottom-right",
					isOpen
						? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
						: "opacity-0 scale-95 translate-y-10 pointer-events-none"
				)}
			>
				<div className="space-y-6">
					<ThemePreviewButton />

					<div className="border-t border-border" />

					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2 mb-1 text-muted-foreground">
							<Icons.gitHub className="w-4 h-4" />
							<h3 className="text-sm font-medium">Source Code</h3>
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
					"h-12 w-12 rounded-full shadow-lg transition-all z-50 pointer-events-auto",
					isOpen
						? "bg-primary text-primary-foreground"
						: "bg-background border border-border hover:bg-muted"
				)}
			>
				{isOpen ? <X className="h-5 w-5" /> : <Settings className="h-5 w-5 text-foreground" />}
				<span className="sr-only">Toggle Controls</span>
			</Button>
		</div>
	);
}
