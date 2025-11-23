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
		<Card className="group flex flex-col h-full border-muted/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md py-4">
			<CardHeader>
				<div className="flex items-center justify-between mb-2">
					<div className="text-xs text-muted-foreground">
						{new Date(blog.date).toLocaleDateString()}
					</div>
					{blog.tags?.[0] && (
						<Badge variant="outline" className="rounded-full text-xs">
							{blog.tags[0]}
						</Badge>
					)}
				</div>
				<CardTitle className="line-clamp-2 font-heading text-xl group-hover:text-primary transition-colors">
					<Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
				</CardTitle>
				<CardDescription className="line-clamp-2 mt-2">{blog.description}</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto pt-0">
				<Link
					href={`/blogs/${blog.slug}`}
					className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
				>
					Read More{" "}
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</CardFooter>
		</Card>
	);
}
