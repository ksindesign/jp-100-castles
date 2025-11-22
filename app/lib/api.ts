import { fetchGraphQL } from './graphql';
import {
  DestinationsResponse,
  Destination,
  GenreDestinationResponse,
} from './types';
import {
  GET_DESTINATIONS_BY_TAXONOMY_QUERY,
  GET_DESTINATIONS_QUERY,
  GET_DESTINATION_BY_SLUG_QUERY,
} from './queries';

// Helper function to filter destinations with 百名城 label
export function filterByHyakumeijo(destinations: Destination[]): Destination[] {
  return destinations.filter((destination) => {
    const labels = destination.destinations?.labels;
    return labels && Array.isArray(labels) && labels.includes('百名城');
  });
}

// Fetch all destinations
export async function getDestinations(
  first: number = 10,
  search: string = ''
): Promise<Destination[]> {
  try {
    const data: DestinationsResponse = await fetchGraphQL(
      GET_DESTINATIONS_QUERY,
      { first, search }
    );
    return data.destinations.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }
}

// Fetch destinations by taxonomy (to filter out destinations for areas pages)
export async function GetDestinationsByTaxonomy(
  name: string,
  first: number = 20
): Promise<Destination[]> {
  try {
    const data: GenreDestinationResponse = await fetchGraphQL(
      GET_DESTINATIONS_BY_TAXONOMY_QUERY,
      { name: [name], first }
    );

    // Extract all destinations from all matching genre nodes
    const destinations = data.allGenreDestination.nodes.flatMap(
      (node) => node.destinations.nodes
    );

    return destinations;
  } catch (error) {
    console.error('Failed to fetch destinations by taxonomy:', error);
    return [];
  }
}

// Fetch taxonomy data with destinations
export async function GetTaxonomyWithDestinations(
  name: string,
  first: number = 20
): Promise<GenreDestinationResponse | null> {
  try {
    const data: GenreDestinationResponse = await fetchGraphQL(
      GET_DESTINATIONS_BY_TAXONOMY_QUERY,
      { name: [name], first }
    );

    return data;
  } catch (error) {
    console.error('Failed to fetch taxonomy with destinations:', error);
    return null;
  }
}

// Fetch a single destination by slug
export async function getDestinationBySlug(
  slug: string
): Promise<Destination | null> {
  try {
    // Decode the slug in case it's URL-encoded
    const decodedSlug = decodeURIComponent(slug);
    console.log('Fetching destination with slug:', decodedSlug);

    const data: DestinationsResponse = await fetchGraphQL(
      GET_DESTINATION_BY_SLUG_QUERY,
      { slug: decodedSlug }
    );

    const destination = data.destinations.edges[0]?.node || null;
    console.log(
      'Destination data received:',
      destination ? 'Found' : 'Not found'
    );
    return destination;
  } catch (error) {
    console.error('Error fetching destination:', error);
    return null;
  }
}
