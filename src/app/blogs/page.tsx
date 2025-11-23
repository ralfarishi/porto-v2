import { getBlogs } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";

export default function BlogsPage() {
	const blogs = getBlogs();

	return (
		<div className="container px-4 mx-auto py-20">
			<h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">All Articles</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogs.map((blog) => (
					<BlogCard key={blog.slug} blog={blog} />
				))}
			</div>
		</div>
	);
}
