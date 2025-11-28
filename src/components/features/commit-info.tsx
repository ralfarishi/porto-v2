import { getLatestCommit } from "@/lib/github";
import { GitCommit, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CommitInfoProps {
	repo: string;
}

export async function CommitInfo({ repo }: CommitInfoProps) {
	const commit = await getLatestCommit(repo);

	if (!commit) {
		return (
			<Card className="bg-muted/50">
				<CardContent className="p-4 text-sm text-muted-foreground text-center">
					Commit info unavailable
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="bg-card py-1!">
			<CardContent className="p-6 space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2 text-sm font-medium">
						<Clock className="h-4 w-4 text-primary" />
						<span>Last Update</span>
					</div>
					<span className="text-sm text-muted-foreground">
						{new Date(commit.date).toLocaleDateString("en-US", {
							month: "short",
							day: "2-digit",
							year: "numeric",
						})}
					</span>
				</div>

				<Separator />

				<div className="space-y-2">
					<div className="flex items-center gap-2 text-sm font-medium">
						<GitCommit className="h-4 w-4 text-primary" />
						<span>Last Commit</span>
					</div>
					<p className="text-sm text-muted-foreground line-clamp-2 font-mono bg-muted/50 p-2 rounded">
						{commit.message}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
