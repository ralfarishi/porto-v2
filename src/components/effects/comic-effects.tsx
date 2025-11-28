"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["POW!", "ZAP!", "SNAP!", "BOOM!", "WHAM!", "CRASH!", "BHAAAP!", "ZAAAM!"];
const COLORS = [
	"text-primary",
	"text-secondary",
	"text-accent",
	"text-emerald-500",
	"text-lime-500",
];

interface Effect {
	id: number;
	word: string;
	x: number;
	y: number;
	color: string;
	rotation: number;
	targetRotation: number;
}

export function ComicEffects() {
	const [effects, setEffects] = useState<Effect[]>([]);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			// Ignore clicks on interactive elements
			const target = e.target as HTMLElement;
			if (
				target.closest("a") ||
				target.closest("button") ||
				target.closest("input") ||
				target.closest("textarea")
			) {
				return;
			}

			setEffects((prev) => {
				// Limit concurrent effects
				if (prev.length >= 5) return prev.slice(1);

				const id = Date.now();
				const word = WORDS[Math.floor(Math.random() * WORDS.length)];
				const color = COLORS[Math.floor(Math.random() * COLORS.length)];

				// Position at cursor
				const x = (e.clientX / window.innerWidth) * 100;
				const y = (e.clientY / window.innerHeight) * 100;

				const rotation = Math.random() * 40 - 20;
				const targetRotation = rotation + (Math.random() > 0.5 ? 10 : -10);

				return [...prev, { id, word, x, y, color, rotation, targetRotation }];
			});
		};

		window.addEventListener("click", handleClick);
		return () => window.removeEventListener("click", handleClick);
	}, []);

	// Remove effects after they animate out
	const removeEffect = (id: number) => {
		setEffects((prev) => prev.filter((e) => e.id !== id));
	};

	return (
		<div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
			<AnimatePresence>
				{effects.map((effect) => (
					<motion.div
						key={effect.id}
						initial={{ scale: 0, opacity: 0, rotate: effect.rotation }}
						animate={{
							scale: [0, 1.5, 1],
							opacity: [0, 1, 0],
							rotate: effect.targetRotation,
						}}
						transition={{ duration: 1.5, times: [0, 0.2, 1] }}
						onAnimationComplete={() => removeEffect(effect.id)}
						className={`absolute font-heading font-black text-4xl md:text-6xl uppercase tracking-widest drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] ${effect.color}`}
						style={{
							left: `${effect.x}%`,
							top: `${effect.y}%`,
							textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
						}}
					>
						{effect.word}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
