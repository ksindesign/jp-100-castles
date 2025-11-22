// Simple GraphQL fetch function
const GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

export async function fetchGraphQL(query: string, variables = {}) {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  const json = await response.json();

  if (json.errors) {
    console.error('GraphQL errors:', json.errors);
    throw new Error('Failed to fetch data');
  }

  return json.data;
}
