# Smial Tech - Rule of Life

Una plataforma web PWA minimalista y “cozy” donde los usuarios construyen, siguen y reflexionan sobre su propia Regla de Vida inspirada en la tradición benedictina (Ora et labora) y la estructura de 8 hábitos de The Common Rule.


## Getting Started

### Prerequisites

- Node: You will need to have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/en/download/) website.
- Git: You will need to have Git installed on your machine. You can download it from [Git](https://git-scm.com/downloads) website.
- PNPM: You will need to have PNPM installed on your machine. You can download it from [PNPM](https://pnpm.io/installation) website.
- VS Code: You will need to have VS Code installed on your machine. You can download it from [VS Code](https://code.visualstudio.com/download) website.
- Docker (Optional): You should have Docker installed on your machine if you want to run a DB locally (offline support for development). You can download it from [Docker](https://www.docker.com/products/docker-desktop/) website. On the other hand, if you don't want to use a Neon DB instance for development database (internet connection required), you can skip this step.

### Installation

Clone the repository:

```bash
git clone https://github.com/shadcn/ui.shadcn.com.git
```

Install the dependencies:

```bash
npm install
#or
pnpm install
```

### Development

First, run the development server:

```bash
npm run dev
#or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js (https://nextjs.org/)
- React (https://reactjs.org/)
- Tailwind CSS  (https://tailwindcss.com/)
- Shadcn UI (https://ui.shadcn.com/)
- React Table (https://tanstack.com/table/latest/docs/introduction)
- React Query (https://tanstack.com/query/latest/docs/framework/react/overview)
- React Hook Form (https://react-hook-form.com/)
- Drizzle ORM (https://orm.drizzle.team/)
- Better Auth (https://better-auth.com/)
- Zod (https://zod.dev/)
- tRPC (https://trpc.io/)
- Zustand (https://zustand.docs.pmnd.rs/learn/getting-started/introduction)


## Adding components from Shadcn UI

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
# or
pnpm dlx shadcn add button
```

This will place the ui components in the `components` directory.