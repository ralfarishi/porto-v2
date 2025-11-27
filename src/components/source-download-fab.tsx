"use client";

import { Download } from "lucide-react";
import Link from "next/link";

export function SourceDownloadButton() {
	const USERNAME = "ralfarishi";
	const REPO = "porto-v2";
	const BRANCH = "comic-retro-vintage";

	const downloadUrl = `https://github.com/${USERNAME}/${REPO}/archive/refs/heads/theme/${BRANCH}.zip`;

	return (
		<Link
			href={downloadUrl}
			target="_blank"
			className="flex items-center justify-between p-2 border-2 border-transparent hover:border-foreground hover:bg-yellow-400 hover:text-black hover:shadow-[2px_2px_0px_0px_var(--foreground)] transition-all group cursor-pointer bg-background"
			aria-label="Download Source Code"
		>
			<span className="font-bold uppercase text-sm">Download Source</span>
			<Download className="w-4 h-4" />
		</Link>
	);
}
