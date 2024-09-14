# Eklavya

Eklavya is a web application designed for managing and tracking student registrations and information.

## Features

- User registration form for students
- Data collection including name, registration number, phone, email, year, program, and reason for joining
- Responsive design for various screen sizes
- Animated UI elements for enhanced user experience
- Form validation to ensure data integrity
- Database integration for storing student information

## Tech Stack

- **Frontend:**
  - Next.js 14.2.11
  - React
  - TypeScript
  - Tailwind CSS for styling
  - Shadcn UI components for consistent design
  - Framer Motion for animations

- **Backend:**
  - Next.js API routes
  - Prisma ORM for database operations
  - PostgreSQL database for data storage

- **DevOps:**
  - Vercel for deployment and hosting
  - Vercel Analytics for performance monitoring

## Project Structure

- \`app/\`: Next.js app directory containing pages and API routes
- \`components/\`: Reusable React components
- \`lib/\`: Utility functions and shared code
- \`prisma/\`: Prisma schema and database migrations

## Database Schema

The main database model is the User, which includes:
- name
- registration number
- phone
- email
- year
- program
- reason for joining

## Key Components

- Registration form with input validation
- Responsive layout adapting to different screen sizes
- Animated UI elements for improved user engagement
- Server-side data processing and storage

## Future Enhancements

- Admin dashboard for managing student data
- Analytics and reporting features
- Integration with other school systems
- Email notifications for successful registrations

## Contributing

Contributions to Eklavya are welcome. Please ensure to follow the project's coding standards and submit pull requests for any new features or bug fixes.

## License

[MIT License](LICENSE)