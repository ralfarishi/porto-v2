"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SourceDownloadButton() {
	const USERNAME = "ralfarishi";
	const REPO = "porto-v2";
	const BRANCH = "main";

	const downloadUrl = `https://github.com/${USERNAME}/${REPO}/archive/refs/heads/${BRANCH}.zip`;

	return (
		<Button asChild variant="outline" className="w-full justify-between group">
			<Link href={downloadUrl} target="_blank">
				<span className="flex items-center gap-2">
					<span>Download Source</span>
				</span>
				<Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
			</Link>
		</Button>
	);
}
