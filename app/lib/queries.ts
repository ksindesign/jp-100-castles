import { readFileSync } from 'fs';
import { join } from 'path';

// Helper to read .gql files
const readQuery = (filename: string): string => {
  const filePath = join(process.cwd(), 'app', 'lib', 'gql', filename);
  return readFileSync(filePath, 'utf-8');
};

// Export all GraphQL queries
export const GET_DESTINATIONS_QUERY = readQuery('GET_DESTINATIONS_QUERY.gql');

export const GET_DESTINATIONS_BY_TAXONOMY_QUERY = readQuery(
  'GET_DESTINATION_BY_TAXONOMY.gql'
);
export const GET_DESTINATION_BY_SLUG_QUERY = readQuery(
  'GET_DESTINATION_BY_SLUG_QUERY.gql'
);
