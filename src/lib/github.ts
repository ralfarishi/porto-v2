export async function getLatestCommit(repoUrl: string) {
	try {
		// Extract owner and repo from URL
		// Format: https://github.com/owner/repo
		const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
		if (!match) return null;

		const [, owner, repo] = match;
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
			{
				next: { revalidate: 3600 }, // Revalidate every hour
			}
		);

		if (!response.ok) return null;

		const data = await response.json();
		if (!data || !data[0]) return null;

		return {
			date: data[0].commit.author.date,
			message: data[0].commit.message,
			sha: data[0].sha,
		};
	} catch (error) {
		console.error("Error fetching commit:", error);
		return null;
	}
}
