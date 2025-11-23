import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t bg-background/50 backdrop-blur-sm py-8 mt-auto">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="flex flex-col items-center md:items-start gap-2">
					<span className="font-heading text-lg font-bold">John Doe</span>
					<p className="text-sm text-muted-foreground text-center md:text-left">
						© {new Date().getFullYear()} All rights reserved.
					</p>
				</div>

				<div className="flex items-center gap-4">
					<Link
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Github className="h-5 w-5" />
						<span className="sr-only">GitHub</span>
					</Link>
					<Link
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Linkedin className="h-5 w-5" />
						<span className="sr-only">LinkedIn</span>
					</Link>
					<Link
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						<Twitter className="h-5 w-5" />
						<span className="sr-only">Twitter</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}
