import { HomeBento } from "@/components/sections/home-bento";
import { AboutSection } from "@/components/sections/about-section";
import { CertificationList } from "@/components/sections/certification-list";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

import { getBlogs, getProjects } from "@/lib/mdx";

export default function Home() {
	const projects = getProjects().slice(0, 4);
	const blogs = getBlogs().slice(0, 4);

	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<AboutSection />
			<HomeBento projects={projects} blogs={blogs} />
			<CertificationList />
			<Contact />
		</main>
	);
}
