import type { Metadata } from "next";
import "@fontsource/tektur";
import "@fontsource/orbitron";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemePreviewWidget } from "@/components/theme-preview-widget";

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
			<body className={`antialiased font-mono`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SmoothScroll>
						<div className="flex min-h-screen flex-col">
							<Navbar />
							<main className="flex-1">{children}</main>
							<Footer />
						</div>
						<ThemePreviewWidget />
					</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
