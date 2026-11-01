# 🏢 Legacy Estates — Real Estate Website

> A modern, responsive real estate website prototype built with Angular, TypeScript, SCSS, and GSAP, designed to deliver a premium and interactive user experience.

---

## 📌 Overview

**Legacy Estates** is a modern real estate website prototype developed for a prospective client in the real estate industry.

The project focuses on creating a premium digital presence for a real estate brand through a combination of **responsive design, reusable Angular components, smooth animations, interactive navigation, and modern UI/UX principles**.

The website was designed to provide visitors with an engaging way to explore the company's properties, services, partners, and contact information.

> **Project Status:** Completed website prototype
> **Purpose:** Client proposal / business prototype
> **Platform:** Web

---

## ✨ Features

### 🏠 Modern Landing Page

* Full-screen hero section
* Premium real estate-focused visual design
* Responsive layout across desktop, tablet, and mobile devices
* Smooth section transitions

### 🏘️ Properties Section

* Dedicated property showcase
* Structured property presentation
* Responsive property layouts
* Interactive call-to-action elements

### 🏢 Services Section

* Presentation of the company's real estate services
* Animated content sections
* Responsive layouts
* Modern visual hierarchy

### 🤝 Partners Section

* Dedicated partners showcase
* Responsive partner layout
* Smooth visual transitions

### 📩 Contact Section

* Dedicated contact interface
* Contact information presentation
* Call-to-action elements for potential clients

### ☰ Interactive Navigation

* Animated navigation menu
* Full-screen side menu
* Responsive navigation behavior
* Menu transitions and interactive states
* Navigation automatically adapts to the user's scroll position

### 🎬 GSAP Animations

The website uses **GSAP** to create smooth and controlled animations throughout the interface.

Animations include:

* Hero animations
* Navigation transitions
* Side-menu animations
* Scroll-based transitions
* Element fade-ins
* Interactive hover effects
* Section reveal animations

---

## 🛠️ Tech Stack

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| **Angular 16**   | Frontend framework                  |
| **TypeScript**   | Application logic                   |
| **HTML5**        | Website structure                   |
| **SCSS / CSS**   | Styling and responsive layouts      |
| **GSAP**         | Advanced animations and transitions |
| **Angular CLI**  | Development and build tooling       |
| **Git / GitHub** | Version control                     |

Angular provides the component-based architecture used to build the application, while GSAP is used for advanced web animations and transitions.

---

## 🧩 Architecture

The application follows a component-based Angular architecture.

The main website sections are organized into reusable Angular components, allowing individual sections of the interface to be developed and maintained independently.

### High-Level Structure

```text
LegacyWeb
│
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── Header
│   │   │   ├── Hero
│   │   │   ├── Properties
│   │   │   ├── Services
│   │   │   ├── Partners
│   │   │   └── Contact
│   │   │
│   │   ├── app.component.*
│   │   └── app.module.ts
│   │
│   ├── assets
│   │   └── ...
│   │
│   ├── styles.scss
│   └── index.html
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> The exact component/file names may vary as the project evolves.

---

## 🎨 UI / UX

The design was created with a strong focus on delivering a **premium real estate experience**.

Key design principles include:

* Minimal and modern visual language
* Strong typography hierarchy
* Large visual sections
* Smooth transitions
* Responsive layouts
* Clear calls to action
* Interactive navigation
* Consistent spacing and alignment
* Mobile-friendly design

The goal was to make the website feel more like a **premium real estate brand experience** rather than a standard informational website.

---

## 🎬 Animation System

A major part of the project is its animation system.

**GSAP** is used to control animations and transitions instead of relying only on basic CSS transitions.

Examples include:

```text
Page Load
   │
   ├── Logo Animation
   ├── Hero Content Reveal
   └── Navigation Animation

User Scroll
   │
   ├── Header State Change
   ├── Section Reveal
   └── Image / Content Transitions

Menu Interaction
   │
   ├── Menu Opens
   ├── Overlay Animation
   ├── Navigation Fade-In
   └── Header Style Transition
```

This approach provides greater control over animation timing, sequencing, and user interactions.

---

## 📱 Responsive Design

The website was designed to work across different screen sizes.

Responsive considerations include:

* Desktop layouts
* Tablet layouts
* Mobile layouts
* Responsive navigation
* Flexible image positioning
* Responsive typography
* Adaptive section heights
* Mobile-friendly interactions

The layout and animation behavior were adjusted to ensure that the experience remains usable across different viewport sizes.

---

## ⚡ Performance Considerations

The project includes several considerations for maintaining a smooth user experience:

* Component-based Angular architecture
* Responsive image handling
* Controlled animation sequences
* Lazy loading considerations for large visual assets
* Avoiding unnecessary animation execution
* Optimized layout behavior across viewport sizes

Large visual assets were handled carefully because high-resolution images can significantly affect initial loading and scrolling performance.

---

### Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**
* **Angular CLI**

The project was created using **Angular CLI 16.2.10**.

---

### 1. Clone the Repository

```bash
git clone https://github.com/AhmedAli-00ne/legacy-web.git
```

Navigate into the project:

```bash
cd legacy-web
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start the Development Server

```bash
ng serve
```

The application will be available at:

```text
http://localhost:4200/
```

Angular's development server automatically reloads the application when source files are modified.

---

## 🏗️ Production Build

To create a production build:

```bash
ng build
```

The generated build files will be placed inside the `dist/` directory.

---

## 🧪 Testing

Unit tests can be executed using:

```bash
ng test
```

The project uses the Angular testing setup provided by the project configuration.

---

## 👨‍💻 Development Approach

The project was developed with emphasis on:

* Reusable Angular components
* Maintainable TypeScript code
* Responsive SCSS styling
* Structured page sections
* Interactive user experience
* Animation-driven transitions
* Cross-device compatibility
* Performance-aware image handling

---


---


---

## 📚 What I Learned

This project provided practical experience in building a complete modern frontend application using Angular.

Key areas of experience include:

* Building reusable Angular components
* Working with TypeScript
* Creating responsive layouts with SCSS
* Implementing complex UI animations with GSAP
* Managing component state and user interactions
* Designing responsive navigation systems
* Optimizing large visual assets
* Building interfaces based on real-world business requirements
* Working with Git and collaborative development workflows

---

## 🔮 Future Improvements

Potential future improvements include:

* Connecting the frontend to a backend/API
* Adding a dynamic property management system
* Adding property search and filtering
* Integrating a CMS or database
* Adding a dedicated property details page
* Implementing contact form submission
* Adding Google Maps integration
* Adding analytics
* Further optimizing image delivery
* Adding automated testing
* Deploying the application to a production hosting platform

---

## 👥 Project Context

This website was developed as a **professional real estate website prototype for a prospective client**.

The website itself was completed as a frontend prototype, while the potential business engagement was not finalized.

The project therefore demonstrates the ability to take a real-world business concept and turn it into a complete, polished, responsive web interface.

---

## 📄 License

This repository is primarily intended as a **portfolio and demonstration project**.

The design, content, and visual assets may contain materials created specifically for the project and should not be reused commercially without appropriate permission.

---

## 🔗 Repository

**GitHub:**
https://github.com/AhmedAli-00ne/legacy-web

---

## ⭐ Project Highlights

```text
Angular
   +
TypeScript
   +
SCSS
   +
GSAP
   +
Responsive Design
   +
Interactive UI
   =
Modern Real Estate Website
```

**Built with Angular, TypeScript, SCSS, and GSAP.**
<img width="1671" height="881" alt="Screenshot 2025-06-19 190854" src="https://github.com/user-attachments/assets/a995ed5c-96e8-499c-9e84-5be9b119c6c1" />
