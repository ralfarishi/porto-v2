import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { getBlog, getBlogs, getAdjacentBlogs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdxContent } from "@/components/markdown/mdx-content";
import { Suspense } from "react";

interface BlogPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const blogs = getBlogs();
	return blogs.map((blog) => ({
		slug: blog.slug,
	}));
}

export default async function BlogPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const blog = getBlog(slug);
	const adjacentBlogs = getAdjacentBlogs(slug);

	if (!blog) {
		notFound();
	}

	return (
		<div className="container px-4 mx-auto py-20 max-w-3xl">
			<Button asChild variant="ghost" className="mb-8 gap-2 pl-0 hover:pl-2 transition-all">
				<Link href="/blogs">
					<ArrowLeft className="h-4 w-4" /> Back to Articles
				</Link>
			</Button>

			<article>
				<div className="mb-8">
					<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
						<div className="flex items-center gap-1">
							<Calendar className="h-4 w-4" />
							<span>{new Date(blog.date).toLocaleDateString()}</span>
						</div>
						<div className="flex items-center gap-2">
							{blog.tags?.map((tag) => (
								<Badge key={tag} variant="outline" className="rounded-full text-xs font-normal">
									{tag}
								</Badge>
							))}
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
						{blog.title}
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed">{blog.description}</p>
				</div>

				{blog.image && (
					<div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted mb-12">
						<div
							className="w-full h-full bg-cover bg-center"
							style={{ backgroundImage: `url(${blog.image})` }}
						/>
					</div>
				)}

				<div className="prose prose-neutral dark:prose-invert max-w-none">
					<Suspense fallback={<div className="animate-pulse h-96 bg-muted rounded-lg" />}>
						<MdxContent mdxSource={blog.content} />
					</Suspense>
				</div>

				<div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-6">
					{adjacentBlogs.previous ? (
						<Link
							href={`/blogs/${adjacentBlogs.previous.slug}`}
							className="group flex flex-col gap-2 p-4 rounded-xl border border-border/40 hover:bg-muted/30 transition-all"
						>
							<span className="text-sm text-muted-foreground flex items-center gap-1">
								<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
								Previous Article
							</span>
							<span className="font-heading font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
								{adjacentBlogs.previous.title}
							</span>
						</Link>
					) : (
						<div />
					)}
					{adjacentBlogs.next && (
						<Link
							href={`/blogs/${adjacentBlogs.next.slug}`}
							className="group flex flex-col gap-2 p-4 rounded-xl border border-border/40 hover:bg-muted/30 transition-all text-right items-end"
						>
							<span className="text-sm text-muted-foreground flex items-center gap-1">
								Next Article
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</span>
							<span className="font-heading font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
								{adjacentBlogs.next.title}
							</span>
						</Link>
					)}
				</div>
			</article>
		</div>
	);
}
