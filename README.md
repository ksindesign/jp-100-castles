# Japan's 100 Famous Castles

A modern web application dedicated to exploring and discovering Japan's 100
Famous Castles (日本百名城), selected by the Japan Castle Foundation. This
platform provides comprehensive information about these historically significant
castles across all regions of Japan.

NOTICE: As this site is for self-learning purpose only, the castles data are
properly not going to be completed.

## About

The "Japan 100 Famous Castles" (日本百名城) is a prestigious list selected by
the Japan Castle Foundation in 2006 to commemorate the foundation's 40th
anniversary. These castles were chosen based on:

- Historical significance and cultural importance
- Tourist appeal and accessibility
- Accuracy of restoration and preservation
- Expert evaluation and public voting

This website serves as a digital guide to help travelers and history enthusiasts
explore these magnificent castles organized by region and prefecture.

## Features

### Core Functionality

- **百名城 Filtering**: Displays only destinations marked with the "百名城"
  label
- **Real-time Search**: Filter castles by name with instant results
- **Pagination**: Browse through castles with 10 items per page
- **Region Navigation**: Explore castles by geographic region (Tohoku, Kanto,
  Chubu, Kinki, Chugoku, Shikoku, Kyushu)
- **Prefecture Filtering**: View castles within specific prefectures
- **Taxonomy Descriptions**: Informative descriptions for each region/prefecture
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience

- Smooth scroll-to-top functionality
- Breadcrumb navigation
- Interactive region/prefecture pins
- Clean, modern UI with Tailwind CSS
- Optimized image loading with Next.js Image component

## Tech Stack

### Frontend Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[FontAwesome](https://fontawesome.com/)** - Icon library

### Backend & Data

- **[WordPress Headless CMS](https://wordpress.org/)** - Content management
- **[WPGraphQL](https://www.wpgraphql.com/)** - GraphQL API for WordPress
- **[Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/)** -
  Custom fields for destinations

### Data Fetching & State Management

- **Server Components** - Server-side data fetching with Next.js
- **Client Components** - Interactive features with React hooks
- **GraphQL Queries** - Efficient data fetching with typed queries

## Project Structure

```
jp-100-castles/
├── app/
│   ├── areas/            # Region and prefecture pages
│   │   ├── tohoku/
│   │   ├── kanto/
│   │   ├── chubu/
│   │   ├── kinki/
│   │   ├── chugoku/
│   │   ├── shikoku/
│   │   └── kyushu/
│   ├── constants/        # Constant data
│   ├── destinations/     # Castle listing and detail pages
│   ├── lib/              # Utilities and API functions
│   │   ├── api.ts        # API functions
│   │   ├── graphql.ts    # GraphQL client
│   │   ├── queries.ts    # Query loader
│   │   ├── types.ts      # TypeScript types
│   │   └── gql/          # GraphQL query files
│   └── ui/               # UI components
│       ├── components/   # Reusable components
│       ├── layout/       # Layout components
│       └── styles/       # CSS modules
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Data Structure

### WordPress Custom Fields (ACF)

Each destination includes:

- **labels**: Array of labels (e.g., "百名城")
- **fullAddress**: Complete address with coordinates
- **businessHours**: Operating hours
- **access**: Transportation information
- **tel**: Contact phone number
- **website**: Official website URL
- **sns**: Social media links

### Taxonomies

- **genreDestination**: Regional classification (Tohoku, Kanto, etc.)
- **areas**: Prefecture and regional groupings

## Key Features Implementation

### 百名城 Filtering

As there different kinds of spots like restaurants are also listed in the api,
in this website, all destinations are filtered using the `filterByHyakumeijo()`
helper function:

```typescript
export function filterByHyakumeijo(destinations: Destination[]): Destination[] {
  return destinations.filter((destination) => {
    const labels = destination.destinations?.labels;
    return labels && Array.isArray(labels) && labels.includes('百名城');
  });
}
```

### Pagination

- 10 items per page
- Smooth scroll to top on page change
- Automatic reset when searching

### Real-time Search

Client-side filtering with case-insensitive matching on castle names.

## Design Principles

- **Mobile-First**: Responsive design optimized for all screen sizes
- **Performance**: Server-side rendering with Next.js for optimal loading
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO**: Optimized metadata and static generation

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- Japan Castle Foundation for the 100 Famous Castles selection
- All contributors and maintainers
- The Next.js and React communities

---

**Built for castle enthusiasts and travelers exploring Japan**
