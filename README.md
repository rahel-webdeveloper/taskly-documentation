# Taskly Pro documentaion

## Taskly Front End Documentaion

> A lightweight, Full Stack task-management PWA built with Vanilla JavaScript, NanoStores, Chart.js and AI Advisor powered task advising.

![📷Screenshot](./public/welcome%20page%20screenshot.png)

## 🌐 Live Demo

Check out the live demo here: **[Taskly](https://task-ly-ai.vercel.app/)**

---

## 📋 Table of Contents

- [Taskly Pro Documentation](#taskly-pro)
  - [🌐 Live Demo](#-live-demo)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔍 Description](#-description)
  - [✨ Features](#-features)
      - [This app is completely responsive from small to large devices](#this-app-is-completely-responsive-from-small-to-large-devices)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [🧠 Waht I Learned](#-waht-i-learned)
  - [🤌 What Was Intresting For Me:](#-what-was-intresting-for-me)
  - [project-structure 📂](#project-structure-)
    - [Future Enhancements💡](#future-enhancements)
    - [Author](#author)

---

## 🔍 Description

Taskly Pro is a Progressive Web App that helps you create, track, and analyze your tasks in real-time. It combines intuitive UI components, data-driven charts, and an AI-powered advisor (via Puter.js the AI Advisor API) to keep you productive and informed about your task load.

---

## ✨ Features

- Authentacation and Authorization

  - Creating account via Sign Up page
  - Sign In to your account via Sign In page
  - Removing accoute with validation of password

- Task Hub

  - Generate task description base on given title by AI
  - Create, edit, delete, and track tasks
  - Filter tasks by status
  - Sort by name and date
  - Special button for task assistant

- AI Advisor

  - Get personalized advice on how to prioritize or tackle your tasks
  - Powered by AI Advisor API through Puter.js
  - Achieve best advices base on your history messages feature
  - Save every new chat saparatly on local storage

- Dashboard

  - Categories Bar: breakdown of tasks by category
  - 7-Day Activity: line/bar chart of tasks completed over the last week
  - Progress Donut Chart: visual summary of On-Hold, In-Progress, and Done statuss
  - Time Reports: tracked vs. remaining time per task

- Timer
  - Smooth animations and an easy-to-use timer
  - Circular, interactive timer UI for custom intervals
  - Start/Pause/Reset controls

#### This app is completely responsive from small to large devices

---

## 🛠 Tech Stack

- HTML5 & SCSS
- Vanilla JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) for interactive charts
- [NanoStores](https://nanostores.dev/) for global status management
- [Navigo](https://github.com/krasimir/navigo) for client-side routing
- [Notyf](https://github.com/caroso1222/notyf) for toast notifications
- Puter.js + AI Advisor API for AI-driven task advising
- Service Worker & Web App Manifest for PWA support
- EmailJs for getting feedback and opinions
- Notyf for giving beutifull UI notification

---

## 🚀 Getting Started

### Installation

- **Clone the repo and install the defendencies**

  ```bash
  git clone https://github.com/rahel-webdeveloper/taskly.git
  cd taskly
  npm install
  ```

### Usage

```bash
npm run dev
```

- **Task Creation:** Navigate to Task Hub and click "Create task or plus icon"
- **Task Management:** Drag tasks between status columns to update progress
- **Productivity Insights:** Visit the Dashboard to view your productivity metrics and today's report
- **Focus Sessions:** Use the Timer feature to maintain concentration on important tasks
- **AI Assistance:** Consult the AI Advisor when you need help organizing or prioritizing tasks

## 🧠 Waht I Learned

Building **Taskly** taught me to:

- **Creating and structuring an AI driven app from scratch📝**
- **Integrate AI** advice with AI Advisor API via Puter.js
- **Manage status** effectively with Nano Stores.
- **Route** seamlessly using Navigo.
- **Visualize data** via Chart.js (bar, doughnut, line, pie).
- **Polish UX** with Notyf toasts and a custom SVG timer.

## 🤌 What Was Intresting For Me:

For the first time managing an AI assistant base on your own thoughts through code

```js
export const systemMsg = {
  role: "system",
  content: `
  your name is Taskly! you are a task advisor!
  `,
};

export const getAdvice = async () => {
  const reply = await puter.ai.chat(systemMsg, {
    model: "claude-3-7-sonnet",
  });

  return reply;
};
```

## project-structure 📂

```

taskly/
├── public/                 # Images, Minifest.json, and other assets
├── src/                    # Main source code for the app
│   ├── assets/             # Images, fonts, and other assets
│   ├── components/         # Reusable React/Vue/JS components
│   ├── sass/               # SCSS stylesheets and variables
│   ├── data/               # UI data and local storage
│   ├── services/           # API Client and auth services
│   ├── tasks/              # Tasks all logic and UI
│   ├── routes.js           # SPR (single page route) controller
│   ├── pages/              # Main page views/screens
│          ├── welcome/            # Welcome page and getting user feedback
│          ├── auth/               # auth logic and components (Sign In, Sign Up, Remove Account)
│          ├── taskHub/            # First page of APP where create new task and see today's report
│          ├── dashsboard/         # data charts and show user productivity
│          ├── aiAdvice/           # AI Advice page you can chat and get advices
│          ├── timer/              # Timer logic and components (picker, focus)

├── .env                    # Environment variables (API keys, config)
├── App.js                  # Root app component
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── vercel.json             # vercel config
```

### Future Enhancements💡

- Mobile application with cross-platform synchronization
- Calender integration for deadline management
- Team collabration features
- Advanced reporting and analytics
- Custom themes and persolzation options


## Taskly Backend Documentaion

Taskly backend project developed with JavaScript(Express.js) designed to support the Taskly application ecosystem. This service provides the necessary APIs, business logic, and data handling for the Taskly front-end and its features.

---

## Table of Contents

- [Taskly Backend Documentation](#taskly-backend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [auth](#auth)
    - [Tasks](#tasks)
    - [Users](#users)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)

---

## Overview

**Taskly Backend** handles core logic, user management, task operations, and analytics for the Taskly productivity suite. It is built for seamless integration with a JavaScript/TypeScript front-end and is suitable for deployment as a cloud-based or local service.

---

## Features

- User authentication and authorization
- CRUD operations for tasks and categories
- Fully RESTful API design with JSON responses
- Integrated  with AI-based task task advisor
- Designed for extensibility and easy deployment

---

## Project Structure

```
taskly-backend/
├── config/             # Configuration files (arcjet, environment)
├── controllers/        # Main controllers (auth, tasks, user)
├── database/           # Connect to database
├── middleware/         # All Middlewares (arcjet, auth, error)
├── models/             # Models for (tasks, user)
├── routes/             # All routes like (auth, tasks, user)
├── app.js              #Main file for controlling server
├── .env.development.local              #Environment variables for development mode file for controlling server
├── .env.production.local              #Environment variables for production mode file for controlling server
├── package.json
└── README.md
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rahel-webdeveloper/taskly-backend.git
   cd taskly-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment:**
   - Add to `.env.(development/production).local` all below envirment variables.
  
```

PORT=5000

NODE_ENV="development"

DB_URI="your db uri"

JWT_SECRET="your jwt secret"

JWT_EXPIRES_IN="your jwt expires time"

ARCJET_KEY="ajkey_092ftm9ccefz"

ARCJET_ENV="development/production"

```

---

## Usage

Start the backend server (default port is typically 5000):

```bash
npm start
```

Or, for development with auto-reload:

```bash
npm run dev
```

The backend will be accessible at `http://localhost:5000/` (or your configured port).

---

## API Endpoints

> Some API Emdpoits are below.

### auth

- `POST /auth/sign-up` – Register a new user
- `POST /auth/sign-in` – Authenticate user and retrieve token
- `POST /auth/sign-out` – Sign Out user
- `POST /auth/remove-account` – Deleting user account with validation of password.

### Tasks

- `GET /tasks` – Retrieve all tasks for the authenticated user
- `POST /tasks` – Create a new task
- `PUT /tasks/:id` – Update a task
- `DELETE /tasks/:id` – Delete a task

### Users

- `GET /users` – Retrieve all users only to admin user
- `GET /users/:id` – Retrieve  data for the authenticated user

- _...and more depending on project scope_

---

## Contributing

Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

---

## License

This project is public and currently does not specify a license.

### Author

Made with 💜 by [**Khatibullah Rahel**](https://www.linkedin.com/in/khatibullah-rahel-a93a74281/)

--- 

> [!IMPORTANT]
> Love Taskly? Throw us a ⭐ — it makes our day!😊

---

**Follow us on social media**
[LinkdIn](https://www.linkedin.com/in/khatibullah-rahel-a93a74281/)
[Facebook](https://www.facebook.com/khatibullah.asaad.7)
[Telegram](https://t.me/rahel_023)

_Taskly - Organize, Focus, Achieve_
