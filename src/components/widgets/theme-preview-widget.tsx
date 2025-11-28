"use client";

import { ExternalLink } from "lucide-react";

const themes = [
	{ name: "Pastel", url: "https://porto-v2-alpha.vercel.app/" },
	{
		name: "Tech Military",
		url: "https://porto-v2-git-theme-tech-military-ralfarishis-projects.vercel.app/",
	},
];

export function ThemeList() {
	return (
		<div className="flex flex-col gap-2">
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
	);
}
