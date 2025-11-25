import { getLatestCommit } from "@/lib/github";
import { Clock, Terminal, Hash } from "lucide-react";

interface CommitInfoProps {
	repo: string;
}

export async function CommitInfo({ repo }: CommitInfoProps) {
	const commit = await getLatestCommit(repo);

	if (!commit) {
		return (
			<div className="p-4 text-xs font-mono text-muted-foreground text-center border border-dashed border-border/50 bg-muted/5">
				{"// ERROR: SIGNAL_LOST"}
				<br />
				Unable to retrieve commit data.
			</div>
		);
	}

	return (
		<div className="font-mono text-xs bg-black/40 border border-primary/20 p-4 space-y-4 relative overflow-hidden group">
			{/* Scanline */}
			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20 z-10" />

			<div className="relative z-20 space-y-4">
				<div className="flex items-start gap-3">
					<Terminal className="w-4 h-4 text-primary mt-0.5 shrink-0" />
					<div className="space-y-1">
						<div className="text-primary uppercase tracking-wider text-[10px]">Commit_Message</div>
						<p className="text-neutral-300 leading-relaxed line-clamp-3">
							<span className="text-primary mr-2">{">"}</span>
							{commit.message}
						</p>
					</div>
				</div>

				<div className="h-px w-full bg-primary/20" />

				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-1">
						<div className="flex items-center gap-1 text-primary">
							<Clock className="w-3 h-3" />
							<span className="text-[10px] uppercase tracking-wider">Timestamp</span>
						</div>
						<div className="text-neutral-300">
							{new Date(commit.date).toLocaleDateString("en-US", {
								month: "2-digit",
								day: "2-digit",
								year: "2-digit",
							})}
						</div>
					</div>
					<div className="space-y-1">
						<div className="flex items-center gap-1 text-primary">
							<Hash className="w-3 h-3" />
							<span className="text-[10px] uppercase tracking-wider">Hash_ID</span>
						</div>
						<div className="text-neutral-300 truncate">7f3a9c2</div>
					</div>
				</div>
			</div>
		</div>
	);
}
