# SocialMediaApp-RC-Frontend

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Project Setup](#project-setup)
- [Used Libraries](#used-libraries)

## Introduction

This is the frontend repository for the SocialMediaApp-RC project. It is built using modern web technologies to provide a seamless user experience.

## Folder Structure

```
SocialMediaApp-RC-Frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `public/`: Contains the static files such as `index.html`.
- `src/`: Contains the source code of the application.
  - `assets/`: Contains images, fonts, and other static assets.
  - `components/`: Contains reusable React components.
  - `pages/`: Contains React components that represent different pages.
  - `services/`: Contains API service calls and other utility functions.
- `.gitignore`: Specifies files to be ignored by Git.
- `package.json`: Contains project metadata and dependencies.
- `README.md`: The readme file you are currently reading.

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/SocialMediaApp-RC-Frontend.git
   cd SocialMediaApp-RC-Frontend
   ```

2. **Add environment variables:**

   Create a `.env` file in the root directory of the project and add the necessary environment variables. For example:

   ```plaintext
   VITE_API_ENDPOINT=http://localhost:3001/api/
   ```

   Make sure to replace the placeholder values with your actual API URL and API key.

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Used Libraries

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Redux Toolkit**: Redux State handle by using redux toolkit.
- **Ant Design**: This app has use Ant Design component library for create UI.
- **React Router**: A collection of navigational components for React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.

## Version Guide

To ensure compatibility and avoid potential issues, it is recommended to use the following versions:

- **Node.js**: v18.x or higher
- **npm**: v6.x or higher
- **React**: v18.x or higher
- **Redux**: v4.x or higher
- **Redux Toolkit**: v1.x or higher
- **Ant Design**: v5.x or higher
- **React Router**: v5.x or higher
- **Axios**: v0.21.x or higher
- **Jest**: v26.x or higher
- **ESLint**: v7.x or higher
- **Prettier**: v2.x or higher
- **TypeScript**: v4.x or higher

Make sure to check the `package.json` file for the exact versions used in this project.

For a complete list of dependencies, refer to the `package.json` file.

## Demo and Screenshots

To access the demo and screenshots of the application, visit the following link:

[Demo and Screenshots](https://drive.google.com/drive/folders/1EiUml9cJU2qsMP6u4Hh-ZB0ViWMlTpfS?usp=drive_link)
