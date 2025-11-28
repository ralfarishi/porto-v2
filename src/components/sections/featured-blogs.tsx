"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/features/blog-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/lib/mdx";

interface FeaturedBlogsProps {
	blogs: Blog[];
}

export function FeaturedBlogs({ blogs }: FeaturedBlogsProps) {
	return (
		<section id="blogs" className="container px-6 md:px-8 mx-auto py-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="flex items-center justify-between mb-12"
			>
				<div>
					<h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Latest Articles</h2>
					<p className="text-muted-foreground max-w-2xl">
						Thoughts on web development, design, and technology.
					</p>
				</div>
				<Button asChild variant="ghost" className="hidden md:flex gap-2">
					<Link href="/blogs">
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</Button>
			</motion.div>

			<div className="flex flex-wrap justify-center gap-6">
				{blogs.map((blog, index) => (
					<motion.div
						key={blog.slug}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
					>
						<BlogCard blog={blog} />
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="mt-8 text-center md:hidden"
			>
				<Button asChild variant="ghost" className="gap-2">
					<Link href="/blogs">
						View All <ArrowRight className="h-4 w-4" />
					</Link>
				</Button>
			</motion.div>
		</section>
	);
}
