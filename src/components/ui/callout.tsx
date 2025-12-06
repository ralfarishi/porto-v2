"use client";

import { cn } from "@/lib/utils";
import { TriangleAlert, CheckCircle, Info, XCircle } from "lucide-react";

interface CalloutProps {
	type?: "info" | "warning" | "danger" | "success";
	title?: string;
	children?: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
	const icons = {
		info: Info,
		warning: TriangleAlert,
		danger: XCircle,
		success: CheckCircle,
	};

	const Icon = icons[type];

	return (
		<div
			className={cn("my-2.5 flex items-start gap-2.5 rounded-lg border p-4", {
				"border-blue-500/20 bg-blue-500/10 text-blue-500": type === "info",
				"border-yellow-500/20 bg-yellow-500/10 text-yellow-500": type === "warning",
				"border-red-500/20 bg-red-500/10 text-red-500": type === "danger",
				"border-green-500/20 bg-green-500/10 text-green-500": type === "success",
			})}
		>
			<Icon className="h-4 w-4 mt-0.5 shrink-0" />
			<div className="flex flex-col gap-0.5 text-sm [&>p]:leading-relaxed text-foreground">
				{title && <div className="font-semibold">{title}</div>}
				{children}
			</div>
		</div>
	);
}
