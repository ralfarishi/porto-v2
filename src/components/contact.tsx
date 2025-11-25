"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
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
		<section id="contact" className="container px-6 md:px-8 mx-auto py-20">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="border border-primary/30 bg-black/90 font-mono p-1 rounded-sm shadow-2xl"
				>
					{/* Terminal Header */}
					<div className="bg-primary/10 border-b border-primary/30 p-2 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Terminal className="w-4 h-4 text-primary" />
							<span className="text-xs text-primary uppercase tracking-widest">
								SECURE_UPLINK_V.2.0
							</span>
						</div>
						<div className="flex gap-1">
							<div className="w-3 h-3 bg-red-500/50 rounded-full" />
							<div className="w-3 h-3 bg-yellow-500/50 rounded-full" />
							<div className="w-3 h-3 bg-green-500/50 rounded-full" />
						</div>
					</div>

					{/* Terminal Body */}
					<div className="p-6 md:p-10 space-y-8">
						<div className="space-y-2 text-sm md:text-base text-primary/80">
							<p>{">"} INITIATING HANDSHAKE PROTOCOL...</p>
							<p>{">"} CONNECTION ESTABLISHED.</p>
							<p>{">"} AWAITING INPUT:</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							{/* Command List (Socials) */}
							<div className="space-y-6">
								<h3 className="text-primary font-bold uppercase tracking-widest border-b border-primary/30 pb-2 mb-4">
									AVAILABLE_COMMANDS
								</h3>
								<div className="flex flex-col gap-4">
									<a
										href="mailto:hello@example.com"
										className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
										onClick={() => handleCommand("EXECUTE: MAIL_TO")}
									>
										<span className="text-primary/50 group-hover:text-primary">{">"}</span>
										<span className="border-b border-transparent group-hover:border-primary">
											EXECUTE: EMAIL_ME
										</span>
										<Icons.mail className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
									</a>
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
										onClick={() => handleCommand("EXECUTE: GITHUB_UPLINK")}
									>
										<span className="text-primary/50 group-hover:text-primary">{">"}</span>
										<span className="border-b border-transparent group-hover:border-primary">
											EXECUTE: GITHUB_UPLINK
										</span>
										<Icons.gitHub className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
									</a>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
										onClick={() => handleCommand("EXECUTE: LINKEDIN_HANDSHAKE")}
									>
										<span className="text-primary/50 group-hover:text-primary">{">"}</span>
										<span className="border-b border-transparent group-hover:border-primary">
											EXECUTE: LINKEDIN_HANDSHAKE
										</span>
										<Icons.linkedIn className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
									</a>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
										onClick={() => handleCommand("EXECUTE: INSTAGRAM_SYNC")}
									>
										<span className="text-primary/50 group-hover:text-primary">{">"}</span>
										<span className="border-b border-transparent group-hover:border-primary">
											EXECUTE: INSTAGRAM_SYNC
										</span>
										<Icons.instagram className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
									</a>
								</div>
							</div>

							{/* Message Input Form */}
							<div className="space-y-4">
								<h3 className="text-primary font-bold uppercase tracking-widest border-b border-primary/30 pb-2 mb-4">
									SEND_TRANSMISSION
								</h3>
								<form className="space-y-4">
									<div className="space-y-1">
										<label className="text-xs text-primary/60 uppercase">Subject_ID</label>
										<Input
											className="bg-primary/5 border-primary/20 text-primary focus-visible:ring-primary/50 rounded-none font-mono"
											placeholder="ENTER_NAME"
										/>
									</div>
									<div className="space-y-1">
										<label className="text-xs text-primary/60 uppercase">
											Transmission_Content
										</label>
										<Textarea
											className="bg-primary/5 border-primary/20 text-primary focus-visible:ring-primary/50 rounded-none font-mono min-h-[100px]"
											placeholder="TYPE_MESSAGE..."
										/>
									</div>
									<Button
										type="submit"
										className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-widest"
									>
										<Send className="w-4 h-4 mr-2" /> TRANSMIT
									</Button>
								</form>
							</div>
						</div>

						{/* Output Log */}
						<div className="border-t border-primary/20 pt-4 mt-4 min-h-[100px] text-xs text-primary/70 font-mono">
							{commandOutput.map((line, i) => (
								<div key={i} className="mb-1">
									{line}
								</div>
							))}
							<div className="animate-pulse">_</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
