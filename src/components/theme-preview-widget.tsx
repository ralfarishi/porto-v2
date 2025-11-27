"use client";

import { ExternalLink, Monitor } from "lucide-react";

const themes = [
	{ name: "Pastel", url: "https://porto-v2-alpha.vercel.app/" },
	{
		name: "Comic Retro",
		url: "https://porto-v2-git-theme-comic-retro-vintage-ralfarishis-projects.vercel.app/",
	},
];

export function ThemeList() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between mb-1 border-b border-primary/20 pb-2">
				<h3 className="font-heading text-sm font-bold uppercase tracking-widest flex items-center gap-2">
					<Monitor className="w-4 h-4 text-primary" />
					System_Themes
				</h3>
			</div>
			<p className="text-[10px] font-mono mb-2 text-muted-foreground uppercase tracking-wider">
				{"// Select_Interface_Mode"}
			</p>
			<div className="flex flex-col gap-2">
				{themes.map((theme) => (
					<a
						key={theme.name}
						href={theme.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative flex items-center justify-between p-3 border border-primary/20 bg-background/50 hover:bg-primary/10 hover:border-primary transition-all cursor-pointer overflow-hidden"
					>
						{/* Hover Scanline */}
						<div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

						{/* Corner Markers */}
						<div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
						<div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

						<span className="font-mono text-xs uppercase tracking-wider relative z-10 group-hover:text-primary transition-colors">
							{theme.name}
						</span>
						<ExternalLink className="h-3 w-3 text-primary/50 group-hover:text-primary transition-colors relative z-10" />
					</a>
				))}
			</div>
		</div>
	);
}
