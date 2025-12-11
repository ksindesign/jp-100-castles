export interface FullAddress {
  details?: string;
  portal?: string | number;
  lat?: number;
  lng?: number;
}

export interface AreaNode {
  id?: string;
  name?: string;
}

export interface Areas {
  edges?: {
    node: AreaNode;
  }[];
}

export interface DestinationFields {
  businessHours?: string;
  access?: string;
  holiday?: string;
  pr?: string;
  prContent?: string;
  fullAddress?: FullAddress;
  tel?: string;
  website?: string;
  sns?: string;
  areas: Areas;
  labels?: string[];
  spotsDetails?: SpotsDetails;
}

export interface SpotsDetails {
  spotDetails?: string;
}

export interface Destination {
  id: string;
  databaseId?: number;
  uri: string;
  title: string;
  slug: string;
  excerpt?: string;
  genreDestination?: {
    nodes: GenreNode[];
  };
  featuredImage?: {
    node: {
      title?: string;
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
      };
    };
  };
  destinations?: DestinationFields;
  areas?: Areas;
  gener?: {
    node: {
      name?: string;
    };
  };
  spotsDetails?: SpotsDetails;
}

// GraphQL Response Types
export interface DestinationEdge {
  node: Destination;
}

export interface DestinationsResponse {
  destinations: {
    edges: DestinationEdge[];
  };
}

export interface GenreNode {
  name: string;
  description?: string;
}

export interface GenreDestinationNode {
  name: string;
  slug: string;
  description?: string | null;
  destinations: {
    nodes: Destination[];
  };
}

export interface GenreDestinationResponse {
  allGenreDestination: {
    nodes: GenreDestinationNode[];
  };
}
