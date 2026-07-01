export type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  forkCount: number;
  stars: number;
  primaryLanguage: { name: string; color: string } | null;
};

const PINNED_REPOS_QUERY = `
{
  user(login:"$USERNAME") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            forkCount
            stargazers { totalCount }
            url
            primaryLanguage { name color }
          }
        }
      }
    }
  }
}`;

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;
  if (!token || !username) return [];

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY.replace("$USERNAME", username),
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    const edges = json?.data?.user?.pinnedItems?.edges ?? [];

    return edges.map((edge: { node: Record<string, unknown> }) => {
      const node = edge.node;
      const stargazers = node.stargazers as { totalCount: number };
      return {
        id: node.id,
        name: node.name,
        description: node.description ?? null,
        url: node.url,
        forkCount: node.forkCount,
        stars: stargazers.totalCount,
        primaryLanguage: node.primaryLanguage as PinnedRepo["primaryLanguage"],
      };
    });
  } catch {
    return [];
  }
}
