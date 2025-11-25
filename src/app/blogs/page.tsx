import { getBlogs } from "@/lib/mdx";
import { ManifestList, ManifestItem } from "@/components/manifest-list";

export default function BlogsPage() {
	const blogs = getBlogs();

	return (
		<div className="container px-4 mx-auto py-5">
			<div className="flex flex-col items-center mb-8 mt-5">
				<div className="text-xs font-mono text-primary/50 mb-2 tracking-[0.5em] uppercase">
					{"// TRANSMISSIONS_LOG"}
				</div>
				<h1 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase tracking-widest relative">
					<span className="absolute -left-8 top-0 text-primary/20 hidden md:block">[</span>
					All <span className="text-primary">_Articles</span>
					<span className="absolute -right-8 top-0 text-primary/20 hidden md:block">]</span>
				</h1>
			</div>
			<ManifestList>
				{blogs.map((blog, i) => (
					<ManifestItem
						key={blog.slug}
						index={i}
						id={`LOG-${String(i + 1).padStart(3, "0")}`}
						title={blog.title}
						date={new Date(blog.date).toLocaleDateString(undefined, {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						})}
						tech={blog.tags}
						href={`/blogs/${blog.slug}`}
					/>
				))}
			</ManifestList>
		</div>
	);
}
