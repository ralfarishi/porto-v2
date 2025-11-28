import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
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
		<div className="container px-4 mx-auto py-5 max-w-3xl">
			<Button
				asChild
				variant="ghost"
				className="mb-8 gap-2 pl-0 hover:pl-2 transition-all font-sans uppercase tracking-wider text-foreground hover:text-neutral-100 hover:bg-accent dark:hover:bg-accent"
			>
				<Link href="/blogs">
					<ArrowLeft className="h-5 w-5" /> Back to the Future
				</Link>
			</Button>

			<article>
				<div className="mb-8 border-l-8 border-foreground pl-6 py-2">
					<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-foreground mb-4 font-sans  uppercase tracking-wider items-start">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-foreground" />
							<span>{new Date(blog.date).toLocaleDateString()}</span>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							{blog.tags?.map((tag) => (
								<Badge
									key={tag}
									variant="outline"
									className="rounded-none text-xs border-2 border-foreground text-foreground bg-background shadow-[4px_4px_0px_0px_var(--foreground)] gap-1"
								>
									<Tag className="w-3 h-3" />
									{tag}
								</Badge>
							))}
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-heading mb-6 leading-tight uppercase tracking-tight relative text-foreground drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
						{blog.title}
					</h1>
					<p className="text-xl text-foreground/80 leading-relaxed font-sans italic">
						{blog.description}
					</p>
				</div>

				{blog.image && (
					<div className="relative w-full aspect-video mb-10 border-4 border-foreground bg-white overflow-hidden group shadow-[12px_12px_0px_0px_var(--foreground)]">
						{/* Caption Box */}
						<div className="absolute top-0 left-0 bg-secondary border-b-4 border-r-4 border-foreground px-4 py-2 z-20">
							<span className="font-heading text-lg uppercase text-secondary-foreground">
								FIG. 1
							</span>
						</div>

						<div
							className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-100"
							style={{ backgroundImage: `url(${blog.image})` }}
						/>
					</div>
				)}

				<div className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-foreground prose-p:font-sans prose-p:text-foreground/80 prose-a:text-primary prose-a: prose-a:no-underline hover:prose-a:underline prose-img:rounded-none prose-img:border-4 prose-img:border-black prose-img:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] prose-strong:text-foreground prose-li:marker:text-foreground">
					<Suspense fallback={<div className="animate-pulse h-96 bg-muted rounded-none" />}>
						<MdxContent mdxSource={blog.content} />
					</Suspense>
				</div>

				<div className="mt-12 pt-8 border-t-4 border-foreground grid grid-cols-1 md:grid-cols-2 gap-6">
					{adjacentBlogs.previous ? (
						<Link
							href={`/blogs/${adjacentBlogs.previous.slug}`}
							className="group flex flex-col gap-2 p-6 rounded-none border-4 border-foreground bg-background hover:bg-primary hover:text-background transition-all relative overflow-hidden shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-y-1"
						>
							<span className="text-sm text-foreground group-hover:text-neutral-200 flex items-center gap-1 font-sans  uppercase tracking-wider">
								<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-foreground group-hover:text-neutral-200" />
								Previous Article
							</span>
							<span className="font-heading text-lg line-clamp-2 text-foreground group-hover:text-neutral-200 transition-colors uppercase">
								{adjacentBlogs.previous.title}
							</span>
						</Link>
					) : (
						<div />
					)}
					{adjacentBlogs.next && (
						<Link
							href={`/blogs/${adjacentBlogs.next.slug}`}
							className="group flex flex-col gap-2 p-6 rounded-none border-4 border-foreground bg-background hover:bg-primary hover:text-background transition-all text-right items-end relative overflow-hidden shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:-translate-y-1"
						>
							<span className="text-sm text-foreground group-hover:text-neutral-200 flex items-center gap-1 font-sans uppercase tracking-wider">
								Next Article
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-foreground group-hover:text-neutral-200" />
							</span>
							<span className="font-heading text-lg line-clamp-2 text-foreground group-hover:text-neutral-200 transition-colors uppercase">
								{adjacentBlogs.next.title}
							</span>
						</Link>
					)}
				</div>
			</article>
		</div>
	);
}
