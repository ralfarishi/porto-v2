"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

export const MagneticButton = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
	const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

	function handleMouseMove({ clientX, clientY }: MouseEvent) {
		const { left, top, width, height } = ref.current!.getBoundingClientRect();

		const center = { x: left + width / 2, y: top + height / 2 };

		const distance = { x: clientX - center.x, y: clientY - center.y };

		x.set(distance.x * 0.35);
		y.set(distance.y * 0.35);
	}

	function handleMouseLeave() {
		x.set(0);
		y.set(0);
	}

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ x: mouseX, y: mouseY }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
