"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Crosshair } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

const navItems = [
	{ name: "Projects", href: "/projects" },
	{ name: "Blogs", href: "/blogs" },
	{ name: "Contact", href: "/#contact" },
];

export function Navbar() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300",
				isScrolled ? "border-primary/50 bg-background/95" : "border-border/20"
			)}
		>
			{/* Top Decorative Line */}
			<div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-50" />

			<div className="container flex h-16 items-center justify-between px-6 relative">
				{/* Corner Markers */}
				<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
				<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50" />
				<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50" />
				<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />

				<Link href="/" className="flex items-center gap-2 mr-8 group relative z-10">
					<div className="relative flex items-center justify-center w-8 h-8 border border-primary/30 bg-primary/5 rounded-sm group-hover:border-primary/80 transition-colors">
						<Crosshair className="w-5 h-5 text-primary group-hover:rotate-90 transition-transform duration-500" />
					</div>
					<div className="flex flex-col">
						<span className="font-heading text-lg font-bold tracking-widest text-foreground uppercase group-hover:text-primary transition-colors leading-none">
							ANTON_RAYNE
						</span>
						<span className="text-[10px] font-mono text-primary/50 tracking-[0.2em] leading-none group-hover:text-primary transition-colors">
							OPERATOR
						</span>
					</div>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"relative px-4 py-2 text-sm font-mono tracking-widest uppercase transition-all group overflow-hidden",
								pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
							)}
						>
							<span className="relative z-10 flex items-center gap-2">
								{pathname === item.href && (
									<span className="text-primary animate-pulse">{">"}</span>
								)}
								{item.name}
							</span>
							{/* Hover Background */}
							<span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
							{/* Active Underline */}
							{pathname === item.href && (
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
							)}
						</Link>
					))}
					<div className="ml-4 pl-4 border-l border-border/50 h-6 flex items-center">
						<ThemeToggle />
					</div>
				</nav>

				{/* Mobile Nav */}
				<div className="md:hidden flex items-center gap-4">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="rounded-none border-primary/50 bg-background/50 hover:bg-primary/10 hover:border-primary"
							>
								<Menu className="h-5 w-5 text-primary" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[300px] border-l border-primary/20 bg-background/95 backdrop-blur-xl pt-4"
						>
							<SheetTitle className="font-heading text-xl font-bold text-left tracking-widest text-primary border-b border-primary/20 pb-4 pl-3 flex items-center gap-2">
								<Crosshair className="w-5 h-5" />
								NAVIGATION
							</SheetTitle>
							<div className="flex flex-col gap-2 items-start">
								<SheetClose asChild>
									<Link
										href="/"
										className="group w-full p-3 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all"
									>
										<div className="flex items-center gap-3">
											<span className="text-primary/50 group-hover:text-primary font-mono">00</span>
											<span className="text-lg font-mono uppercase tracking-widest group-hover:text-primary transition-colors">
												Home
											</span>
										</div>
									</Link>
								</SheetClose>
								{navItems.map((item, index) => (
									<SheetClose key={item.href} asChild>
										<Link
											href={item.href}
											className={cn(
												"group w-full p-3 border transition-all",
												pathname === item.href
													? "border-primary/50 bg-primary/10"
													: "border-transparent hover:border-primary/30 hover:bg-primary/5"
											)}
										>
											<div className="flex items-center gap-3">
												<span
													className={cn(
														"font-mono transition-colors",
														pathname === item.href
															? "text-primary"
															: "text-primary/50 group-hover:text-primary"
													)}
												>
													0{index + 1}
												</span>
												<span
													className={cn(
														"text-lg font-mono uppercase tracking-widest transition-colors",
														pathname === item.href
															? "text-primary font-bold"
															: "text-muted-foreground group-hover:text-primary"
													)}
												>
													{item.name}
												</span>
											</div>
										</Link>
									</SheetClose>
								))}
							</div>
							<div className="absolute bottom-8 left-6 right-6">
								<div className="h-px w-full bg-primary/20 mb-4" />
								<div className="flex justify-between text-xs font-mono text-muted-foreground">
									<span>SYS: ONLINE</span>
									<span>V.2.0.4</span>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
