<div align="center">

# 🎨 AI Code Reviewer Frontend

### Modern React Frontend for an AI-Powered Code Review Platform

A responsive and interactive frontend built with **React**, **Vite**, and **Tailwind CSS**, providing developers with an intuitive interface to analyze code using Google Gemini AI.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-API-blue?style=for-the-badge)
![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-success?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)

---

### 🚀 Built using React • Vite • Tailwind CSS • Axios • Monaco Editor

</div>

---

# 📖 Overview

The AI Code Reviewer Frontend is a modern React application designed to provide developers with an elegant interface for AI-assisted code analysis.

It connects seamlessly with the FastAPI backend and Google Gemini AI to deliver intelligent code reviews, quality scores, suggestions, improved code, and detailed analytics.

The application emphasizes:

- Clean UI
- Responsive Design
- Excellent User Experience
- Fast Performance
- Component-Based Architecture
- Secure Authentication

---

# ✨ Features

## 🤖 AI Code Review

- Submit source code
- AI-powered analysis
- Code quality score
- Production readiness indicator
- Security recommendations
- Performance suggestions
- Readability improvements
- AI-generated improved code

---

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent Login
- Logout Functionality

---

## 📊 Dashboard

- Total Reviews
- Average Score
- Language Statistics
- Weekly Analytics
- Recent Reviews
- Interactive Charts

---

## 📚 Review History

- View Previous Reviews
- Search Reviews
- Review Details Modal
- Delete Reviews
- Responsive Table

---

## 🎨 Modern UI

- Responsive Design
- Tailwind CSS
- Smooth Animations
- Monaco Code Editor
- Toast Notifications
- Professional Dashboard
- Gradient Hero Section

---

# 🏛 Frontend Architecture

```text
                   React + Vite
                        │
         ┌──────────────┼──────────────┐
         │              │              │
     Components       Pages        Context API
         │              │              │
         └──────────────┼──────────────┘
                        │
                   Axios Services
                        │
                        ▼
                FastAPI Backend API
```

---

# 📂 Folder Structure

```text
frontend
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   │   ├── Dashboard
│   │   ├── Hero
│   │   ├── Navbar
│   │   ├── ReviewForm
│   │   ├── ReviewResult
│   │   ├── History
│   │   └── Common
│   │
│   ├── context
│   │
│   ├── pages
│   │
│   ├── services
│   │
│   ├── hooks
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| API Calls | Axios |
| Charts | Recharts |
| Code Editor | Monaco Editor |
| Notifications | React Hot Toast |

---

# ⚙ Installation

## Clone Repository

```bash
git clone <YOUR_FRONTEND_REPOSITORY_URL>

cd AI-Code-Reviewer-Frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

# 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Preview the production build locally.

```bash
npm run lint
```

Run ESLint for code quality checks.
---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8000
```

> Update the URL according to your backend deployment when moving to production.

---

# 📄 Pages

| Page | Description |
|------|-------------|
| Home | Landing page with Hero section and AI code review interface |
| Login | Secure user authentication |
| Register | Create a new account |
| Dashboard | Analytics and statistics |
| History | Previously generated AI reviews |
| Review Modal | Displays complete review details and improved code |

---

# 🧩 Component Architecture

```text
App
│
├── Navbar
│
├── Hero
│
├── ReviewForm
│
├── ReviewResult
│
├── Dashboard
│   ├── DashboardHeader
│   ├── StatsCards
│   ├── Charts
│   └── Recent Reviews
│
├── History
│   ├── Search
│   ├── Table
│   └── ReviewModal
│
└── Authentication
    ├── Login
    ├── Register
    └── Protected Routes
```

---

# 🌟 User Experience Features

The frontend focuses on delivering an intuitive and responsive experience with features such as:

- Responsive Layout
- Mobile Friendly Interface
- Smooth Page Navigation
- Interactive Dashboard
- Beautiful Gradient UI
- Loading Indicators
- Toast Notifications
- Syntax Highlighted Code Editor
- Search Functionality
- Animated Components

---

# 🔒 Authentication Flow

```text
User Login
     │
     ▼
JWT Token Generated
     │
     ▼
Stored Securely
     │
     ▼
Axios Interceptor
     │
     ▼
Protected API Requests
     │
     ▼
Backend Authentication
```

---

# 🎯 Key Frontend Highlights

- ⚛️ Modern React Architecture
- 🚀 Vite for Lightning Fast Development
- 🎨 Tailwind CSS UI
- 📱 Responsive Design
- 🔐 JWT Authentication
- 📊 Interactive Dashboard
- 📝 Monaco Code Editor
- 🔥 React Hot Toast Notifications
- 📈 Recharts Analytics
- 🌐 REST API Integration

---

# 🚀 Future Improvements

Some planned enhancements include:

- 🌙 Dark / Light Theme
- 🌍 Multi-language Support
- 📄 Export Reviews as PDF
- 📋 Copy Code with One Click
- 📌 Bookmark Reviews
- 📤 Share Reviews
- 🔔 Real-Time Notifications
- 📱 Progressive Web App (PWA)
- 🌐 Offline Support
- 🎤 Voice Commands
- 🤖 AI Chat Assistant

---

# 📚 Learning Outcomes

This frontend project demonstrates practical experience with:

- React Component Design
- React Hooks
- Context API
- React Router
- Protected Routes
- Axios API Integration
- Tailwind CSS
- Responsive Design
- State Management
- Component Reusability
- Dashboard UI Design
- Modern Frontend Architecture

---

# 🤝 Backend Integration

The frontend communicates with the FastAPI backend using REST APIs for:

- User Authentication
- AI Code Review Requests
- Dashboard Analytics
- Review History
- CRUD Operations

---

# 👨‍💻 Author

## Shrey Kalra

**B.Sc. Computer Science (AI & ML)**

**VIT Vellore**

### Connect with me

**GitHub**

https://github.com/shreykalra22

**LinkedIn**

https://www.linkedin.com/in/shrey-kalraaaa

---

# 📄 License

This project is licensed under the MIT License.

See the **LICENSE** file for more information.

---

# 🙏 Acknowledgements

This project was built using the following amazing technologies:

- React
- Vite
- Tailwind CSS
- Axios
- Monaco Editor
- React Router
- React Hot Toast
- Recharts
- FastAPI
- Google Gemini AI

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a Star!

### Made with ❤️ using React, Vite & Tailwind CSS

**Happy Coding 🚀**

</div>