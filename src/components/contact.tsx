"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "./icons";

export function Contact() {
	const [commandOutput, setCommandOutput] = useState<string[]>([]);

	const handleCommand = (cmd: string) => {
		const newOutput = [...commandOutput, `> ${cmd}`, "EXECUTING PROTOCOL...", "STATUS: SENT"];
		if (newOutput.length > 6) newOutput.shift(); // Keep log short
		setCommandOutput(newOutput);
	};

	return (
		<section
			id="contact"
			className="container px-4 md:px-6 mx-auto py-20 bg-background relative overflow-hidden"
		>
			{/* Comic Burst Background */}
			<div className="absolute inset-0 bg-comic-burst opacity-5 pointer-events-none" />

			<div className="max-w-5xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col md:flex-row gap-8"
				>
					{/* Left Panel: The Form (Letter to Editor) */}
					<div className="flex-1 bg-card border-4 border-foreground p-6 md:p-8 shadow-[12px_12px_0px_0px_var(--foreground)] relative">
						{/* Tape Element */}
						<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200 opacity-80 rotate-1 shadow-sm" />

						<div className="mb-8 border-b-4 border-foreground pb-4">
							<h2 className="text-3xl md:text-4xl font-heading text-foreground uppercase tracking-widest leading-none">
								Letters to the <span className="text-primary">Editor</span>
							</h2>
							<p className="font-sans font-bold text-sm uppercase tracking-widest text-muted-foreground mt-2">
								Or just say hello. We read everything.
							</p>
						</div>

						<form className="space-y-6">
							<div className="space-y-2">
								<label className="text-sm font-heading uppercase text-foreground">
									Identity (Name)
								</label>
								<Input
									className="bg-muted/20 border-2 border-foreground text-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none font-mono font-bold shadow-[4px_4px_0px_0px_var(--foreground)] h-12"
									placeholder="CLARK KENT"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-heading uppercase text-foreground">
									Frequency (Email)
								</label>
								<Input
									className="bg-muted/20 border-2 border-foreground text-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none font-mono font-bold shadow-[4px_4px_0px_0px_var(--foreground)] h-12"
									placeholder="SUPERMAN@DAILYPLANET.COM"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-heading uppercase text-foreground">
									The Scoop (Message)
								</label>
								<Textarea
									className="bg-muted/20 border-2 border-foreground text-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none font-mono font-bold min-h-[150px] shadow-[4px_4px_0px_0px_var(--foreground)] resize-none p-4"
									placeholder="I FOUND A BUG IN THE MATRIX..."
								/>
							</div>
							<Button
								type="submit"
								className="w-full h-14 rounded-none border-4 border-foreground bg-primary text-primary-foreground hover:bg-card hover:text-foreground hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-y-1 transition-all font-heading text-xl uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--foreground)]"
							>
								<Send className="w-5 h-5 mr-2" /> Submit Story
							</Button>
						</form>
					</div>

					{/* Right Panel: Classifieds / Socials */}
					<div className="w-full md:w-80 flex flex-col gap-8">
						{/* Classifieds Box */}
						<div className="bg-yellow-400 border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)] rotate-1">
							<h3 className="font-heading text-2xl uppercase text-foreground border-b-4 border-foreground pb-2 mb-4 text-center">
								Classifieds
							</h3>
							<div className="space-y-4">
								<a
									href="mailto:hello@example.com"
									className="group block bg-card border-2 border-foreground p-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer shadow-[2px_2px_0px_0px_var(--foreground)]"
									onClick={() => handleCommand("MAIL_TO")}
								>
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5 text-card-foreground group-hover:text-primary-foreground" />
										<span className="font-sans uppercase text-sm text-card-foreground group-hover:text-primary-foreground">
											Send Email
										</span>
									</div>
								</a>
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="group block bg-card border-2 border-foreground p-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer shadow-[2px_2px_0px_0px_var(--foreground)]"
									onClick={() => handleCommand("GITHUB_UPLINK")}
								>
									<div className="flex items-center gap-3">
										<Icons.gitHub className="w-5 h-5 text-card-foreground group-hover:text-primary-foreground" />
										<span className="font-sans uppercase text-sm text-card-foreground group-hover:text-primary-foreground">
											Github HQ
										</span>
									</div>
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="group block bg-card border-2 border-foreground p-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer shadow-[2px_2px_0px_0px_var(--foreground)]"
									onClick={() => handleCommand("LINKEDIN_CONNECT")}
								>
									<div className="flex items-center gap-3">
										<Icons.linkedIn className="w-5 h-5 text-card-foreground group-hover:text-primary-foreground" />
										<span className="font-sans uppercase text-sm text-card-foreground group-hover:text-primary-foreground">
											LinkedIn Network
										</span>
									</div>
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="group block bg-card border-2 border-foreground p-3 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer shadow-[2px_2px_0px_0px_var(--foreground)]"
									onClick={() => handleCommand("INSTAGRAM_FEED")}
								>
									<div className="flex items-center gap-3">
										<Icons.instagram className="w-5 h-5 text-card-foreground group-hover:text-primary-foreground" />
										<span className="font-sans uppercase text-sm text-card-foreground group-hover:text-primary-foreground">
											Instagram Feed
										</span>
									</div>
								</a>
							</div>
						</div>

						{/* Comic Action Log */}
						<div className="bg-card border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)] -rotate-1 relative">
							{/* Pin/Tape */}
							<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-foreground shadow-sm z-10" />

							<div className="flex items-center justify-between mb-4 border-b-2 border-foreground pb-2">
								<span className="font-heading text-xl uppercase text-foreground">Action Log</span>
								<span className="text-xs font-sans font-bold text-muted-foreground uppercase">
									{new Date().toLocaleDateString()}
								</span>
							</div>
							<div className="font-mono text-xs text-muted-foreground space-y-2 min-h-[80px]">
								{commandOutput.length === 0 && (
									<span className="opacity-50 italic">Waiting for user input...</span>
								)}
								{commandOutput.map((line, i) => (
									<div key={i} className="border-b border-dashed border-foreground/20 pb-1">
										{line}
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
