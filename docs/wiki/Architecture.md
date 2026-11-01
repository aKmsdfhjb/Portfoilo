# Nayan Engineering Portfolio — Architecture

## System flow

```mermaid
flowchart TD
 A[Visitor] --> B[React and Vite site]
 B --> C[Profile]
 B --> D[Project gallery]
 B --> E[Engineering calculators]
 C --> F[Contact links]
 D --> F
 E --> G[Client-side estimate]
 G --> H[Results and caveats]
```

## Deployment boundary

GitHub Pages supports static frontend assets. Server-side React Router actions, private environment variables, database operations and backend services require a separate application host.

## Engineering notes

Keep configuration separate from source, validate user input, test the production build and verify complete user journeys after deployment.
