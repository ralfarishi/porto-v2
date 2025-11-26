import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { getBlog, getBlogs, getAdjacentBlogs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdxContent } from "@/components/mdx-content";
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
		<div className="container px-4 mx-auto py-5 max-w-3xl">
			<Button
				asChild
				variant="ghost"
				className="mb-8 gap-2 pl-0 hover:pl-2 transition-all font-mono uppercase tracking-wider text-muted-foreground hover:text-primary"
			>
				<Link href="/blogs">
					<ArrowLeft className="h-4 w-4" /> Retreat to Articles
				</Link>
			</Button>

			<article>
				<div className="mb-8 border-l-4 border-primary pl-6 py-2">
					<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground mb-4 font-mono uppercase tracking-wider items-start">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-primary" />
							<span>{new Date(blog.date).toLocaleDateString()}</span>
						</div>
						<div className="flex flex-wrap items-center gap-1">
							{blog.tags?.map((tag) => (
								<Badge
									key={tag}
									variant="outline"
									className="rounded-none text-xs font-normal border-primary/30 text-primary"
								>
									{tag}
								</Badge>
							))}
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight uppercase tracking-tight relative">
						{blog.title}
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed font-mono">
						{"// "}
						{blog.description}
					</p>
				</div>

				{blog.image && (
					<div className="relative aspect-video w-full overflow-hidden rounded-none border border-border/50 bg-muted mb-12 group">
						<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary z-10" />
						<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary z-10" />
						<div
							className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
							style={{ backgroundImage: `url(${blog.image})` }}
						/>
						<div className="absolute inset-0 bg-grid-small-white/[0.1] pointer-events-none" />
					</div>
				)}

				<div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-p:font-mono prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-none prose-img:border prose-img:border-primary/20">
					<Suspense fallback={<div className="animate-pulse h-96 bg-muted rounded-none" />}>
						<MdxContent mdxSource={blog.content} />
					</Suspense>
				</div>

				<div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-1 md:grid-cols-2 gap-6">
					{adjacentBlogs.previous ? (
						<Link
							href={`/blogs/${adjacentBlogs.previous.slug}`}
							className="group flex flex-col gap-2 p-6 rounded-none border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
						>
							<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors" />
							<span className="text-sm text-muted-foreground flex items-center gap-1 font-mono uppercase tracking-wider">
								<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-primary" />
								Previous Article
							</span>
							<span className="font-heading font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors uppercase">
								{adjacentBlogs.previous.title}
							</span>
						</Link>
					) : (
						<div />
					)}
					{adjacentBlogs.next && (
						<Link
							href={`/blogs/${adjacentBlogs.next.slug}`}
							className="group flex flex-col gap-2 p-6 rounded-none border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all text-right items-end relative overflow-hidden"
						>
							<div className="absolute right-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors" />
							<span className="text-sm text-muted-foreground flex items-center gap-1 font-mono uppercase tracking-wider">
								Next Article
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
							</span>
							<span className="font-heading font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors uppercase">
								{adjacentBlogs.next.title}
							</span>
						</Link>
					)}
				</div>
			</article>
		</div>
	);
}
