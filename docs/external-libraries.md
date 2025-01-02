## External Libraries and APIs

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Google Fonts**: 'Poppins' font is imported for modern typography.
- **@sentry/react**: For error logging and monitoring in the frontend.
- **@sentry/node**: For error logging and monitoring in the backend.
- **@supabase/auth-ui-react**: Supabase Auth UI components for authentication.
- **@zapt/zapt-js**: Initialization and event handling for ZAPT.
- **Drizzle ORM**: Lightweight ORM for database interactions.
- **Postgres**: Database driver for PostgreSQL.

## Environment Variables

All required environment variables are listed in the `.env` file:

- `COCKROACH_DB_URL`
- `NPM_TOKEN`
- `VITE_PUBLIC_APP_ID`
- `VITE_PUBLIC_APP_ENV`
- `VITE_PUBLIC_SENTRY_DSN`
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`

Ensure to add these variables with their respective values to the `.env` file before running the app.