import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/ui/callout";
import { Gallery } from "@/components/features/gallery";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkDirective from "remark-directive";
import { remarkCallout } from "@/lib/remark-plugins";

interface MdxContentProps {
	mdxSource: string;
}

export function MdxContent({ mdxSource }: MdxContentProps) {
	const components = {
		h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h1
				className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight font-heading", className)}
				{...props}
			/>
		),
		h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h2
				className={cn(
					"mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
					className
				)}
				{...props}
			/>
		),
		h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h3
				className={cn(
					"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
					className
				)}
				{...props}
			/>
		),
		p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
			<p className={cn("leading-7 not-first:mt-6", className)} {...props} />
		),
		ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
			<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
		),
		ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
			<ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />
		),
		li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
			<li className={cn("mt-2", className)} {...props} />
		),
		blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
			<blockquote
				className={cn("mt-6 border-l-2 pl-6 italic text-muted-foreground", className)}
				{...props}
			/>
		),
		code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
			<code
				className={cn("relative rounded font-mono text-sm font-semibold", className)}
				{...props}
			/>
		),
		pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
			<pre className={cn("overflow-x-auto rounded-lg border p-2", className)} {...props} />
		),
		Callout,
		Gallery,
		Galleries: Gallery,
	};

	return (
		<div className="mdx">
			<MDXRemote
				source={mdxSource}
				components={components}
				options={{
					mdxOptions: {
						remarkPlugins: [remarkDirective, remarkCallout],
						rehypePlugins: [
							rehypeSlug,
							[
								rehypeAutolinkHeadings,
								{
									behavior: "wrap",
								},
							],
							[
								rehypePrettyCode,
								{
									theme: "catppuccin-macchiato",
									keepBackground: true,
								},
							],
						],
					},
				}}
			/>
		</div>
	);
}
