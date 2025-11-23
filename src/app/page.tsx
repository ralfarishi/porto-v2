import { Hero } from "@/components/hero";
import { HomeBento } from "@/components/home-bento";
import { CertificationList } from "@/components/certification-list";
import { Contact } from "@/components/contact";
import { getProjects, getBlogs } from "@/lib/mdx";

export default function Home() {
	const projects = getProjects().slice(0, 4);
	const blogs = getBlogs().slice(0, 4);

	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<HomeBento projects={projects} blogs={blogs} />
			<CertificationList />
			<Contact />
		</main>
	);
}

