import type { Metadata } from "next";
import "@fontsource/monoton";
import "@fontsource/righteous";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { ComicEffects } from "@/components/effects/comic-effects";
import { FloatingControls } from "@/components/widgets/floating-controls";

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
						<FloatingControls />
					</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
