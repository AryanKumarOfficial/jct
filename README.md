# JCT Journal

The **Journal Management System (JMS)** is a web-based application designed to streamline the process of managing
academic and professional journals.  
It provides an end-to-end solution for authors, reviewers, and editors, making the submission, review, and publication
process efficient and transparent.

## ✨ Features

- 📑 Manuscript submission and tracking
- 📝 Peer review workflow with reviewer assignments
- 🔍 Plagiarism check integration (optional)
- 🔄 Revision management and feedback system
- 📅 Publication scheduling and issue management
- 👥 Role-based access (Author, Reviewer, Editor, Admin)
- 📊 Dashboard and analytics for journal performance

---

## 🛠️ Tech Stack (example)

- **Frontend:** React / Next.js
- **Backend:** Node.js / Express
- **Database:** PostgreSQL / MySQL (with Prisma ORM)
- **Authentication:** JWT / OAuth2
- **Deployment:** Docker + Vercel / AWS

## 🚀 Getting Started with Docker (Recommended)

This is the recommended way to run the project for development.
It automatically sets up the Next.js application and a PostgreSQL database in isolated containers.

### Prerequisites

* Docker
* Docker Compose

---

### 1. Environment Variables

This project uses a `.env` file for environment variables. To get started, create your own by copying the example file:

```bash
cp .env.example .env
```

The default values in `.env.example` are pre-configured to work with the `docker-compose.yml` setup, so you don't need
to change anything to get started.

---

### 2. Build and Run Containers

From the root directory, build the Docker images and start the services in the background (detached mode):

```bash
docker-compose up --build -d
```

---

### 3. Run Database Migrations

The very first time you launch the application, its database will be empty.
You need to apply your Prisma schema to create the necessary tables.

Run the following command to execute the database migrations:

```bash
docker-compose exec app pnpm prisma migrate dev
```

> **Note:** You only need to run this command again if you make changes to your `prisma/schema.prisma` file.

---

### 4. Accessing the Services

You're all set! 🥳

* **Next.js Application:** [http://localhost:3000](http://localhost:3000)
* **PostgreSQL Database:** Accessible at `localhost:5432` from your host machine (for tools like TablePlus or DBeaver).

---

### Useful Docker Commands

* **Stop all services:**

  ```bash
  docker-compose down
  ```

* **View logs for all services:**

  ```bash
  docker-compose logs -f
  ```

* **View logs for a specific service (e.g., the app):**

  ```bash
  docker-compose logs -f app
  ```

* **Run a one-off command inside the app container:**

  ```bash
  docker-compose exec app <your-command>
  ```

  Example:

  ```bash
  docker-compose exec app pnpm prisma studio
  ```

---

## 🖥️ Local Development (Without Docker)

If you prefer not to use Docker, you can run the project locally.
This requires you to manage the PostgreSQL database instance yourself.

### Prerequisites

* Node.js (version ^22.14.0 or as specified in `package.json`)
* pnpm
* A running PostgreSQL database instance

---

### Steps

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up your `.env` file:
   Create a `.env` file and update the `DATABASE_URL` to point to your local PostgreSQL instance.

3. Run database migrations:

   ```bash
   pnpm prisma migrate dev
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

The application will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the **Vercel Platform** from the creators of Next.js.
Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
