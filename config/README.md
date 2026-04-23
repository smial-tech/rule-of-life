# Config folder

This folder contains the configuration files for the project. It includes the following files:

## env.ts

This file contains the environment variables for the project. It is used to configure the project's settings, such as the database connection, authentication, and other settings. Using "@t3-oss/env-nextjs" package, the environment variables are loaded from the ".env" file in the root directory. The ".env" file is ignored by Git, so it is safe to store sensitive information like database passwords or API keys.