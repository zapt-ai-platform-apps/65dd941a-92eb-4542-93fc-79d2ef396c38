# Banking App

Banking App is a simulated banking application that provides users with an interactive interface to manage their bank account. With an impressive and modern design inspired by Glassmorphism, the app offers a visually engaging user experience while maintaining simplicity and efficiency.

## User Journeys

1. [View Account Summary](docs/journeys.md#view-account-summary) - Check your account details and balance.
2. [View Card Details](docs/journeys.md#view-card-details) - Securely view your card number, expiry date, and CVC when needed.
3. [View Recent Transactions](docs/journeys.md#view-recent-transactions) - Browse your recent transactions.
4. [Add a Payee](docs/journeys.md#add-a-payee) - Add a new payee to your account.
5. [Pay a Payee](docs/journeys.md#pay-a-payee) - Make a payment to an existing payee.
6. [Responsive Design](docs/journeys.md#responsive-design) - Experience the app across devices.
7. [User-Friendly Interface](docs/journeys.md#user-friendly-interface) - Navigate the app with ease.
8. [Manage Savings Pot](docs/journeys.md#manage-savings-pot) - Deposit to and withdraw from your savings pot.

## Note

- This app is a template and does not connect to real banking systems.
- All data is simulated for demonstration purposes only.

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

## Event Handling

The app utilizes event-driven architecture with the following event types:

- **chatgpt_request**: For AI prompt and responses.
- **generate_image**: To generate images based on prompts.
- **text_to_speech**: To convert text into speech.

Refer to the documentation for detailed usage instructions.

## PWA Support

The app is enhanced with Progressive Web App functionalities using Progressier. It includes service workers and a manifest file to ensure a seamless installation experience on supported devices.

## Analytics

- **Vercel Analytics**: For real-time analytics and performance monitoring.
- **Umami Analytics**: For privacy-focused website analytics.

## Error Logging

- **Sentry**: Integrated for comprehensive error tracking in both frontend and backend.