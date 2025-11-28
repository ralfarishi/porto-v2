import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Blog } from "@/lib/mdx";

interface BlogCardProps {
	blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
	return (
		<Card className="group flex flex-col h-full border-border/50 shadow-none bg-transparent hover:bg-card/50 duration-300 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all">
			<CardHeader className="p-0 mb-4">
				<div className="flex items-center justify-between mb-3">
					<div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						{new Date(blog.date).toLocaleDateString(undefined, {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</div>
					{blog.tags?.[0] && (
						<Badge
							variant="outline"
							className="rounded-full text-xs border-primary/20 text-primary bg-primary/5"
						>
							{blog.tags[0]}
						</Badge>
					)}
				</div>
				<CardTitle className="line-clamp-2 font-heading text-2xl group-hover:text-primary transition-colors">
					<Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
				</CardTitle>
				<CardDescription className="line-clamp-2 mt-3 text-base text-muted-foreground/80">
					{blog.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto p-0 pt-2">
				<Link
					href={`/blogs/${blog.slug}`}
					className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
				>
					Read Article{" "}
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</CardFooter>
		</Card>
	);
}
