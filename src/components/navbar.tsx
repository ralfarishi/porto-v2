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
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto md:min-w-[600px] max-w-5xl rounded-full border border-border/40 transition-all duration-300",
				isScrolled
					? "bg-background/70 backdrop-blur-xl shadow-md py-2"
					: "bg-background/40 backdrop-blur-md py-3"
			)}
		>
			<div className="px-6 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 mr-8">
					<span className="font-heading text-xl font-bold tracking-tight text-foreground">
						Anton Rayne
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary",
								pathname === item.href
									? "bg-primary/10 text-primary font-semibold"
									: "text-muted-foreground"
							)}
						>
							{item.name}
						</Link>
					))}
					<div className="ml-2 pl-2 border-l border-border/50">
						<ThemeToggle />
					</div>
				</nav>

				{/* Mobile Nav */}
				<div className="md:hidden flex items-center gap-2">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="rounded-full">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="top" className="w-full h-auto rounded-b-3xl pt-16 pb-8">
							<SheetTitle className="font-heading text-xl font-bold mb-4 text-center">
								Menu
							</SheetTitle>
							<div className="flex flex-col gap-4 items-center">
								<SheetClose asChild>
									<Link
										href="/"
										className="text-lg font-medium hover:text-primary transition-colors"
									>
										Home
									</Link>
								</SheetClose>
								{navItems.map((item) => (
									<SheetClose key={item.href} asChild>
										<Link
											href={item.href}
											className={cn(
												"text-lg font-medium hover:text-primary transition-colors",
												pathname === item.href ? "text-primary" : "text-muted-foreground"
											)}
										>
											{item.name}
										</Link>
									</SheetClose>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
