"use client";

import * as React from "react";
import Link from "next/link";
import { Palette, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemePreviewButton() {
	const themes = [
		{
			name: "Tech Military",
			url: "https://porto-v2-git-theme-tech-military-ralfarishis-projects.vercel.app/",
		},
		{
			name: "Comic Retro Vintage",
			url: "https://porto-v2-git-theme-comic-retro-vintage-ralfarishis-projects.vercel.app/",
		},
	];

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
				<Palette className="w-4 h-4" />
				<span>Theme Preview</span>
			</div>
			<div className="grid gap-2">
				{themes.map((theme) => (
					<Button
						key={theme.name}
						asChild
						variant="outline"
						className="w-full justify-between group h-auto py-3"
					>
						<Link href={theme.url} target="_blank" rel="noopener noreferrer">
							<span className="font-medium">{theme.name}</span>
							<ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
						</Link>
					</Button>
				))}
			</div>
		</div>
	);
}
