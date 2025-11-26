import { getLatestCommit } from "@/lib/github";
import { Clock, GitCommit, ArrowRight } from "lucide-react";

interface CommitInfoProps {
	repo: string;
}

export async function CommitInfo({ repo }: CommitInfoProps) {
	const commit = await getLatestCommit(repo);

	if (!commit) {
		return (
			<div className="bg-red-100 border-4 border-foreground p-4 font-mono text-xs text-red-600 font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--foreground)]">
				TRANSMISSION INTERRUPTED: RETRYING...
			</div>
		);
	}

	return (
		<div className="relative max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
			{/* Narration Box Style */}
			<div className="bg-secondary border-4 border-foreground p-4 shadow-[8px_8px_0px_0px_var(--foreground)]">
				<div className="flex justify-between items-center mb-2 border-b-4 border-secondary-foreground pb-1">
					<h3 className="font-heading text-xl uppercase text-secondary-foreground tracking-widest">
						Meanwhile...
					</h3>
					<div className="bg-foreground text-background text-[10px] font-bold px-2 py-0.5 uppercase">
						Latest Issue
					</div>
				</div>

				<div className="space-y-3">
					<div className="flex items-start gap-3">
						<GitCommit className="w-6 h-6 text-secondary-foreground mt-1 shrink-0" />
						<div>
							<p className="font-sans font-bold text-sm text-secondary-foreground leading-tight uppercase">
								{commit.message}
							</p>
						</div>
					</div>

					<div className="flex justify-between items-center pt-2 border-t-2 border-secondary-foreground/20">
						<div className="flex items-center gap-1">
							<Clock className="w-3 h-3 text-secondary-foreground" />
							<span className="font-mono text-[10px] font-bold text-secondary-foreground">
								{new Date(commit.date).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "2-digit",
								})}
							</span>
						</div>
						<a
							href={commit.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-[10px] font-bold uppercase text-secondary-foreground hover:text-primary transition-colors group"
						>
							View Code{" "}
							<ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
						</a>
					</div>
				</div>
			</div>

			{/* Decorative 'Tape' */}
			<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/65 border-l-2 border-r-2 border-foreground/20 rotate-2" />
		</div>
	);
}
