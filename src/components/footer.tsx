export function Footer() {
	return (
		<footer className="border-t border-border bg-background/50 backdrop-blur-sm py-6 mt-auto relative overflow-hidden">
			{/* Grid overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-size-4rem_4rem mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

			<div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4 relative z-10 text-center">
				<div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
					System_Status: <span className="text-primary">Online</span>
				</div>
				<div className="text-xs font-mono text-muted-foreground">
					© {new Date().getFullYear()} Anton Rayne. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
