"use client";

import * as React from "react";
import Link from "next/link";
import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemePreviewButton() {
	return (
		<div className="fixed bottom-6 right-6 z-50">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="default"
									size="icon"
									className="h-12 w-12 rounded-full shadow-lg transition-transform hover:scale-110"
								>
									<Palette className="h-6 w-6 text-white" />
									<span className="sr-only">View other themes</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" side="top" className="mb-2">
								<DropdownMenuLabel>View other themes</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link
										href="https://porto-v2-git-theme-tech-military-ralfarishis-projects.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Tech Military
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										href="https://porto-v2-git-theme-comic-retro-vintage-ralfarishis-projects.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Comic Retro Vintage
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</TooltipTrigger>
					<TooltipContent side="left">
						<p>View other themes</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
