# Core Module folder

This folder contains the core module of the project. It includes the following files:

## api/ (API codebase)

This folder contains the API codebase for the project. It includes the TRPC setup for client and server side, and the API routes for the project.

## components/ (UI components)

This folder contains the UI components for the project. Each component is a reusable piece of UI that can be used throughout the application. The components are organized into separate folders based on their functionality or purpose.

## lib/ (utility functions and helpers)

This folder contains the utility functions and helpers that are common to the project's modules or features. The functions are designed to be used across different parts of the application.

## hooks/ (common hooks)

This folder contains the hooks that are common to the project's modules or features. The hooks are designed to be used across different parts of the application, such as API clients, database queries, or utility functions.

## auth/ (authentication module)

This folder contains the authentication module for the project. It contains the main logic for the authentication module. It is responsible for handling user authentication, session management, and authorization checks. The file imports necessary dependencies, such as the `better-auth` package, and defines the `auth` object, which contains the authentication logic.


## db/ (database module)

This folder contains the database module for the project. It contains the main logic for the database module. It is responsible for connecting to the database, defining the database schema, and performing CRUD operations on the database. The file imports necessary dependencies, such as the `drizzle-orm` package, and defines the `db` object, which contains the database logic.