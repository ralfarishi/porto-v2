import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const blogsDirectory = path.join(process.cwd(), "content/blogs");

export type Project = {
	slug: string;
	title: string;
	description: string;
	date: string;
	image?: string;
	techStack?: string[];
	repo?: string;
	demo?: string;
	content: string;
};

export type Blog = {
	slug: string;
	title: string;
	description: string;
	date: string;
	image?: string;
	tags?: string[];
	content: string;
};

export function getProjects(): Project[] {
	const fileNames = fs.readdirSync(projectsDirectory);
	const projects = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(projectsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			content,
			...(data as unknown as Omit<Project, "slug" | "content">),
		};
	});

	return projects.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getProject(slug: string): Project | undefined {
	const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
	if (!fs.existsSync(fullPath)) {
		return undefined;
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		content,
		...(data as unknown as Omit<Project, "slug" | "content">),
	};
}

export function getBlogs(): Blog[] {
	const fileNames = fs.readdirSync(blogsDirectory);
	const blogs = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(blogsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			content,
			...(data as unknown as Omit<Blog, "slug" | "content">),
		};
	});

	return blogs.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getBlog(slug: string): Blog | undefined {
	const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
	if (!fs.existsSync(fullPath)) {
		return undefined;
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		content,
		...(data as unknown as Omit<Blog, "slug" | "content">),
	};
}

export function getAdjacentBlogs(slug: string): { previous?: Blog; next?: Blog } {
	const blogs = getBlogs();
	const index = blogs.findIndex((blog) => blog.slug === slug);

	if (index === -1) {
		return {};
	}

	const previous = index < blogs.length - 1 ? blogs[index + 1] : undefined;
	const next = index > 0 ? blogs[index - 1] : undefined;

	return { previous, next };
}
