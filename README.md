# Tech Blog MVC

A full-stack, CMS-style blog platform where developers can publish posts, comment on each other's work, and manage their own content from a personal dashboard. Built with the Model-View-Controller pattern and server-side rendering.

**Live demo:** [ADD LINK AFTER DEPLOYING — e.g. https://tech-blog-mvc.onrender.com]

![Tech Blog MVC homepage](<Screenshot 2024-09-05 at 10.03.28 PM.png>)

## Features

- **User authentication** — sign up and log in with credentials secured by bcrypt password hashing and express-session cookies
- **Session management** — sessions persist in the database via connect-session-sequelize, and idle users are automatically logged out after a set time
- **Create, edit & delete posts** — a personal dashboard shows only your posts, with full CRUD control
- **Commenting** — logged-in users can comment on any post, with author and timestamp displayed
- **Access control** — visitors can read posts, but creating, editing, deleting, and commenting require login

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime & server | Node.js, Express.js |
| Views | Handlebars (express-handlebars) — server-side rendering |
| Database | PostgreSQL |
| ORM | Sequelize |
| Auth & security | bcrypt, express-session, connect-session-sequelize |
| Config | dotenv |
| Code quality | ESLint, Prettier |

## Architecture

The app follows the **MVC pattern**:

- **Models** — Sequelize models for `User`, `Post`, and `Comment`, with associations (a user has many posts; a post has many comments)
- **Views** — Handlebars templates rendered on the server, with a main layout and partials
- **Controllers** — Express routes split into page-rendering routes and a JSON API for auth and CRUD operations

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL installed and running

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/jesse437/Tech-Blog-MVC.git
   cd Tech-Blog-MVC
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   DB_NAME='tech_blog_db'
   DB_USER='your_postgres_username'
   DB_PASSWORD='your_postgres_password'
   ```

4. Create the database (from `psql`):
   ```sql
   CREATE DATABASE tech_blog_db;
   ```

5. Start the server:
   ```bash
   npm run start
   ```
   Then open `http://localhost:3001` in your browser.

For development with auto-reload:
```bash
npm run dev
```

## What I'd Improve Next

- Add rich-text or Markdown support for post bodies
- Add pagination for the homepage post feed
- Write unit tests for the API routes
- Add password reset via email

## Author

**Jesus Ruiz Gutierrez** — [GitHub](https://github.com/jesse437) · [LinkedIn](https://www.linkedin.com/in/jesusruiz437/)
