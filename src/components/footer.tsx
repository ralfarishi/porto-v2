export function Footer() {
	return (
		<footer className="border-t-8 border-foreground bg-background pt-5 pb-5 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					{/* Brand / Rating Box */}
					<div className="flex flex-col items-center md:items-start gap-2">
						<div className="border-4 border-foreground p-2 bg-card shadow-[4px_4px_0px_0px_var(--foreground)]">
							<div className="border-2 border-foreground p-1">
								<span className="block font-heading text-4xl leading-none uppercase text-foreground">
									AR
								</span>
							</div>
						</div>
						<span className="font-sans font-bold text-xs uppercase tracking-widest text-foreground">
							Approved by the
							<br />
							Comics Code Authority
						</span>
					</div>

					{/* Center Text */}
					<div className="text-center">
						<h2 className="font-heading text-3xl md:text-5xl uppercase text-foreground mb-2">
							The End?
						</h2>
						<p className="font-sans font-bold text-sm uppercase tracking-widest text-muted-foreground">
							See you in the next issue!
						</p>
					</div>

					{/* Barcode / Price */}
					<div className="flex flex-col items-center md:items-end gap-2">
						<div className="bg-card border-2 border-foreground p-2 w-32">
							<div className="h-8 flex items-end gap-px justify-center mb-1">
								{[...Array(25)].map((_, i) => (
									<div
										key={i}
										className={`bg-foreground ${i % 2 === 0 ? "w-[2px]" : "w-px"} h-full`}
										style={{ height: `${30 + ((i * 17) % 70)}%` }}
									/>
								))}
							</div>
							<div className="flex justify-between text-[8px] font-mono font-bold uppercase text-foreground">
								<span>00112</span>
								<span>$1.00</span>
							</div>
						</div>
						<span className="font-sans font-bold text-xs uppercase tracking-widest text-foreground">
							© {new Date().getFullYear()} Anton Rayne
						</span>
					</div>
				</div>
			</div>

			{/* Bottom Strip */}
			<div className="absolute bottom-0 left-0 w-full h-2 bg-foreground" />
		</footer>
	);
}
