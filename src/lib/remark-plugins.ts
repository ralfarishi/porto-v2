import { visit } from "unist-util-visit";
import { Node } from "unist";

export function remarkCallout() {
	return (tree: Node) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		visit(tree, (node: any) => {
			if (
				node.type === "containerDirective" ||
				node.type === "leafDirective" ||
				node.type === "textDirective"
			) {
				if (["info", "warning", "danger", "success"].includes(node.name)) {
					const data = node.data || (node.data = {});

					data.hName = "Callout";
					data.hProperties = {
						type: node.name,
						title: node.attributes.title,
					};
				}
			}
		});
	};
}
