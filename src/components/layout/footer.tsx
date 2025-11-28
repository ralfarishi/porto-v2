export function Footer() {
	return (
		<footer className="border-t border-border/40 bg-background/30 backdrop-blur-md py-8 mt-auto">
			<div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
				<div className="text-xs text-muted-foreground/60">
					© {new Date().getFullYear()} Anton Rayne. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
