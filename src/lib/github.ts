export async function getLatestCommit(repoUrl: string) {
	try {
		const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
		if (!match) return null;

		const [, owner, repo] = match;
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
			{
				next: { revalidate: 3600 },
			}
		);

		if (!response.ok) return null;

		const data = await response.json();
		if (!data || !data[0]) return null;

		return {
			date: data[0].commit.author.date,
			message: data[0].commit.message,
			sha: data[0].sha,
			html_url: data[0].html_url,
		};
	} catch (error) {
		console.error("Error fetching commit:", error);
		return null;
	}
}
