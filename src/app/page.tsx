import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { FeaturedBlogs } from "@/components/featured-blogs";
import { Contact } from "@/components/contact";
import { CertificationList } from "@/components/certification-list";
import { getBlogs, getProjects } from "@/lib/mdx";

export default function Home() {
	const projects = getProjects().slice(0, 4);
	const blogs = getBlogs().slice(0, 4);

	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<FeaturedProjects projects={projects} />
			<FeaturedBlogs blogs={blogs} />
			<CertificationList />
			<Contact />
		</main>
	);
}

