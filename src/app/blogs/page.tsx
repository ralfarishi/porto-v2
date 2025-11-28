import { getBlogs } from "@/lib/mdx";
import { BentoGrid, BentoGridItem } from "@/components/features/bento-grid";
import { Newspaper } from "lucide-react";

export default function BlogsPage() {
	const blogs = getBlogs();

	return (
		<div className="container px-4 mx-auto py-20">
			<h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 mt-5 text-center">
				All <span className="text-primary">Articles</span>
			</h1>
			<BentoGrid className="max-w-4xl mx-auto">
				{blogs.map((blog, i) => (
					<BentoGridItem
						key={blog.slug}
						title={blog.title}
						description={blog.date}
						header={
							<div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-muted/30 p-4">
								<p className="text-sm text-muted-foreground line-clamp-3">{blog.description}</p>
							</div>
						}
						className={i % 4 === 0 || i % 4 === 3 ? "md:col-span-2" : ""}
						icon={<Newspaper className="h-4 w-4 text-neutral-500" />}
						href={`/blogs/${blog.slug}`}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
