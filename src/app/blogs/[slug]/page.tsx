import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlog, getBlogs } from "@/lib/mdx";
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
			</article>
		</div>
	);
}
