"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
				"sticky top-0 z-50 w-full border-b-4 border-foreground bg-background transition-all duration-300",
				isScrolled ? "shadow-[0px_4px_0px_0px_var(--foreground)]" : ""
			)}
		>
			<div className="container flex h-18 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
				{/* Brand */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="bg-primary text-primary-foreground px-2 py-1 font-heading text-xl md:text-2xl uppercase tracking-wider transform group-hover:-rotate-2 transition-transform border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]">
						AR
					</div>
					<div className="flex flex-col">
						<span className="font-heading font-bold text-lg leading-none uppercase tracking-widest">
							Anton Rayne
						</span>
						<span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mt-1">
							Vol. 1
						</span>
					</div>
				</Link>

				{/* Desktop Nav - Comic Strip Style */}
				<nav className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"px-4 py-2 font-heading font-bold uppercase text-sm tracking-widest transition-all border-2 border-transparent hover:border-foreground hover:bg-accent hover:text-neutral-100 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)]",
								pathname === item.href &&
									"bg-accent text-neutral-100 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] -translate-y-1"
							)}
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Right Side Actions */}
				<div className="flex items-center gap-4">
					<ThemeToggle />

					{/* Mobile Nav */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-none border-2 border-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-[4px_4px_0px_0px_var(--foreground)] transition-all"
								>
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] border-l-4 border-foreground bg-background pt-12 p-0"
							>
								<SheetTitle className="sr-only">Menu</SheetTitle>
								<div className="flex flex-col h-full">
									<div className="p-6 border-b-4 border-foreground bg-secondary relative overflow-hidden">
										{/* Halftone Pattern */}
										<div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[10px_10px] opacity-10 pointer-events-none" />
										<h2 className="font-heading text-4xl uppercase text-center relative z-10 text-secondary-foreground">
											Menu
										</h2>
									</div>
									<div className="flex flex-col p-4 gap-2">
										<SheetClose asChild>
											<Link
												href="/"
												className="p-4 text-center font-heading font-bold uppercase text-xl border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-y-1 transition-all bg-card"
											>
												Home
											</Link>
										</SheetClose>
										{navItems.map((item) => (
											<SheetClose key={item.href} asChild>
												<Link
													href={item.href}
													className={cn(
														"p-4 text-center font-heading font-bold uppercase text-xl border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-y-1 transition-all bg-card",
														pathname === item.href &&
															"bg-accent text-background shadow-[4px_4px_0px_0px_var(--foreground)] -translate-y-1"
													)}
												>
													{item.name}
												</Link>
											</SheetClose>
										))}
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
