"use client";

import { Download, Database } from "lucide-react";
import Link from "next/link";

export function SourceDownloadButton() {
	const USERNAME = "ralfarishi";
	const REPO = "porto-v2";
	const BRANCH = "tech-military";

	const downloadUrl = `https://github.com/${USERNAME}/${REPO}/archive/refs/heads/theme/${BRANCH}.zip`;

	return (
		<Link
			href={downloadUrl}
			target="_blank"
			className="group relative flex items-center justify-between p-3 border border-primary/20 bg-background/50 hover:bg-primary/10 hover:border-primary transition-all cursor-pointer overflow-hidden"
			aria-label="Download Source Code"
		>
			{/* Hover Scanline */}
			<div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

			{/* Corner Markers */}
			<div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
			<div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

			<div className="flex items-center gap-2 relative z-10">
				<Database className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
				<span className="font-mono text-xs uppercase tracking-wider group-hover:text-primary transition-colors">
					Extract_Source
				</span>
			</div>
			<Download className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors relative z-10" />
		</Link>
	);
}
