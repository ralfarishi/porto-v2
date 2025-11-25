import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-mono uppercase tracking-wider relative overflow-hidden group [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/80 border border-transparent",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border border-input bg-background hover:bg-primary/5 hover:text-accent-foreground hover:border-primary/50",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost:
					"hover:bg-primary/5 hover:text-accent-foreground dark:hover:bg-accent/50 border border-transparent hover:border-primary/20",
				link: "text-primary underline-offset-4 hover:underline [clip-path:none]",
			},
			size: {
				default: "h-10 px-6 py-2 has-[>svg]:px-4",
				sm: "h-9 rounded-none gap-1.5 px-4 has-[>svg]:px-3 text-xs",
				lg: "h-12 rounded-none px-8 has-[>svg]:px-6 text-base",
				icon: "size-10",
				"icon-sm": "size-8",
				"icon-lg": "size-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };

