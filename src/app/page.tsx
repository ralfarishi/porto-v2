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
		<main className="min-h-screen bg-background relative">
			{/* Page Fold Shadow Effect */}
			<div className="fixed inset-y-0 left-0 w-1 bg-linear-to-r from-black/20 to-transparent pointer-events-none z-50 md:hidden" />

			<Hero />

			<div className="space-y-0">
				<AboutSection />
				<HomeDashboard projects={projects} blogs={blogs} />
				<CertificationList />
				<Contact />
			</div>
		</main>
	);
}
