import type { Metadata } from "next";
import "@fontsource/monoton";
import "@fontsource/righteous";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ComicEffects } from "@/components/comic-effects";

export const metadata: Metadata = {
	title: "Anton Rayne - Portfolio",
	description: "Portfolio of Anton Rayne, a developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased font-sans bg-background text-foreground`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SmoothScroll>
						<ComicEffects />
						<div className="flex min-h-screen flex-col">
							<Navbar />
							<main className="flex-1">{children}</main>
							<Footer />
						</div>
					</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
