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
	{ name: "Contact", href: "#contact" },
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
				"fixed top-0 z-50 w-full transition-all duration-300",
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
					: "bg-transparent py-4"
			)}
		>
			<div className="container mx-auto px-4 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<span className="font-heading text-2xl font-bold tracking-tight">John Doe</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								pathname === item.href ? "text-primary" : "text-muted-foreground"
							)}
						>
							{item.name}
						</Link>
					))}
					<ThemeToggle />
				</nav>

				{/* Mobile Nav */}
				<div className="md:hidden flex items-center gap-2">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetTitle className="font-heading text-xl font-bold mb-4">Menu</SheetTitle>
							<div className="flex flex-col gap-4 mt-8">
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
