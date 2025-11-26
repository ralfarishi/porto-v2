"use client";

import * as React from "react";
import { X, ExternalLink, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const themes = [
	{ name: "Pastel", url: "https://porto-v2-alpha.vercel.app/" },
	{
		name: "Comic Retro Vintage",
		url: "https://porto-v2-git-theme-comic-retro-vintage-ralfarishis-projects.vercel.app/",
	},
];

export function ThemePreviewWidget() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-4">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className="bg-background/90 backdrop-blur-md border border-primary/50 p-4 rounded-sm shadow-lg w-[calc(100vw-2rem)] md:w-auto md:min-w-[260px] max-w-[300px] relative overflow-hidden"
					>
						{/* Decorative Corner */}
						<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/50" />
						<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/50" />

						<div className="flex items-center justify-between mb-4 border-b border-primary/20 pb-2">
							<span className="text-xs font-mono text-primary tracking-widest uppercase font-bold">
								Theme Preview
							</span>
							<div className="flex gap-1">
								<div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" />
								<div className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
							</div>
						</div>

						<p className="text-[10px] text-muted-foreground font-mono mb-4 leading-relaxed uppercase tracking-wide">
							Explore other visual styles available in our system.
						</p>

						<div className="flex flex-col gap-2">
							{themes.map((theme, index) => (
								<a
									key={theme.name}
									href={theme.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between p-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all rounded-sm relative overflow-hidden"
								>
									<div className="flex items-center gap-2 relative z-10">
										<span className="text-[10px] text-primary/40 font-mono group-hover:text-primary transition-colors">
											0{index + 1}
										</span>
										<span className="text-xs font-mono text-foreground/80 group-hover:text-primary transition-colors uppercase tracking-wider">
											{theme.name}
										</span>
									</div>
									<ExternalLink className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors relative z-10" />

									{/* Hover Effect */}
									<div className="absolute inset-0 bg-primary/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<Button
				onClick={() => setIsOpen(!isOpen)}
				size="icon"
				className={cn(
					"h-12 w-12 rounded-full border border-primary/50 bg-background/80 backdrop-blur-md shadow-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 group relative z-50",
					isOpen && "border-primary bg-primary/10"
				)}
			>
				<div className="absolute inset-0 rounded-full border border-primary/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
				{isOpen ? (
					<X className="w-5 h-5 text-primary" />
				) : (
					<Palette className="w-5 h-5 text-primary group-hover:rotate-90 transition-transform duration-500" />
				)}
			</Button>
		</div>
	);
}
