import { Hero } from "@/components/hero";
import { HomeDashboard } from "@/components/home-dashboard";
import { CertificationList } from "@/components/certification-list";
import { Contact } from "@/components/contact";
import { getProjects, getBlogs } from "@/lib/mdx";
import { AboutSection } from "@/components/about-section";

export default function Home() {
	const projects = getProjects().slice(0, 4);
	const blogs = getBlogs().slice(0, 4);

	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<AboutSection />
			<HomeDashboard projects={projects} blogs={blogs} />
			<CertificationList />
			<Contact />
		</main>
	);
}
