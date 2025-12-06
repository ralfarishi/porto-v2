"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
	const [isCopied, setIsCopied] = React.useState(false);
	const preRef = React.useRef<HTMLPreElement>(null);

	const copyToClipboard = async () => {
		if (!preRef.current) return;

		const text = preRef.current.textContent || "";
		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<div className="relative group overflow-hidden rounded-lg border bg-secondary/50">
			<div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
				<button
					onClick={copyToClipboard}
					className={cn(
						"flex h-8 w-8 items-center justify-center rounded-md border bg-background/50 p-1.5 text-muted-foreground backdrop-blur transition-all hover:bg-background hover:text-foreground",
						isCopied && "border-green-500 text-green-500 hover:text-green-500"
					)}
					aria-label="Copy code"
				>
					{isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
				</button>
			</div>
			<pre ref={preRef} className={cn("overflow-x-auto p-4 py-5", className)} {...props}>
				{children}
			</pre>
		</div>
	);
}
