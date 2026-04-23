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
git clone git@github.com:smial-tech/rule-of-life.git
```

Install the dependencies:

```bash
npm install
#or
pnpm install

```

### Configuration

Copy the `.env.example` file to `.env` (create the file if not exists) and fill in the required environment variables:

```bash
cp .env.example .env
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


## Project Architecture

- app/ (App Router - Next.js specific files and router)
- config/ (application config files - environment variables, constants)
- modules/  (each module/feature codebase inside an specific feature folder)
- - core/ ( general, global and shared files for other modules/features )
- public/ (application assets)
- database/ (database migrations ***DON'T TOUCH***)


## Pages
  - Sign In ( Sign in page, allow users to sign in, auth is not required )
  - Dashboard ( Dashboard page, our platform, auth is required )
  - Onboarding ( Onboarding page, allow users to create their account, auth is required )
  - Landing ( Marketing page, show the benefits of the product , auth is not required )


## Scripts
  - dev ( run the development server )
  - build ( build the application for production )
  - start ( start the production server )
  - lint ( lint the code )
  - format ( format the code )
  - typecheck ( type check the code )
  - db:start ( start a docker local database )
  - db:stop ( stop the docker local database )
  - db:studio ( open the database studio )
  - db:generate ( generate a migration file )
  - db:migrate ( migrate the database using the migration file )
