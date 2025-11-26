"use client";

import * as React from "react";
import { Palette, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const themes = [
	{ name: "Pastel", url: "https://porto-v2-alpha.vercel.app/" },
	{
		name: "Tech Military",
		url: "https://porto-v2-git-theme-tech-military-ralfarishis-projects.vercel.app/",
	},
];

export function ThemePreviewWidget() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
			{/* Expanded Content */}
			<div
				className={cn(
					"flex flex-col gap-2 transition-all duration-300 origin-bottom-right",
					isOpen
						? "scale-100 opacity-100 translate-y-0"
						: "scale-0 opacity-0 translate-y-10 pointer-events-none"
				)}
			>
				<div className="bg-card border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_var(--foreground)] w-64">
					<div className="flex items-center justify-between mb-3 border-b-2 border-foreground pb-2">
						<h3 className="font-heading text-lg uppercase">Explore Themes</h3>
					</div>
					<p className="text-xs font-mono mb-4 text-muted-foreground">
						Check out other portfolio styles available in this collection.
					</p>
					<div className="flex flex-col gap-2">
						{themes.map((theme) => (
							<a
								key={theme.name}
								href={theme.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between p-2 border-2 border-transparent hover:border-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-[2px_2px_0px_0px_var(--foreground)] transition-all group cursor-pointer bg-background"
							>
								<span className="font-bold uppercase text-sm">{theme.name}</span>
								<ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Toggle Button */}
			<Button
				onClick={() => setIsOpen(!isOpen)}
				size="icon"
				className={cn(
					"h-12 w-12 rounded-none border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--foreground)]",
					isOpen
						? "bg-destructive text-destructive-foreground"
						: "bg-primary text-primary-foreground"
				)}
			>
				{isOpen ? <X className="h-6 w-6" /> : <Palette className="h-6 w-6" />}
				<span className="sr-only">Toggle Theme Preview</span>
			</Button>
		</div>
	);
}
