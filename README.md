# Elevvo Tech: Responsive SaaS Landing Page

A responsive landing page for **Elevvo Tech**, a project management SaaS product, built with pure HTML, CSS and JavaScript. It includes a dark/light theme toggle, a simulated signup and login flow, and a free trial dashboard.

## Introduction

This project is a complete marketing website for a fictional project management tool. It walks a visitor from the first impression (hero section) through features, customer testimonials and pricing, and ends with a clear call to action. It also includes a small front-end demo of the user journey: start a free trial, create an account, log in and see a dashboard.

## Overview

- Single-page layout with smooth in-page navigation
- Mobile-first, responsive design that adapts to desktop, tablet and phone screens
- Light and dark themes, with the choice remembered between visits
- Front-end only demo of signup, login and dashboard (no backend or database)

## Features

- **Responsive layout:** media queries adapt the design at 992px, 768px and 576px breakpoints
- **Dark / light mode:** toggle button in the header, saved in `localStorage`
- **Hero section** with "Start 14-Day Free Trial" and "Watch Demo" buttons
- **Features section:** four cards (Intuitive Design, Blazing Fast, Secure & Private, 24/7 Support)
- **Testimonials section:** customer reviews with initials avatars
- **Pricing section:** Basic ($19/mo), Pro ($49/mo, marked "Most Popular") and Enterprise (contact sales)
- **Signup and login forms** with required-field validation
- **User dashboard:** welcome message with the user's name, free trial countdown, and quick action buttons
- **Persistent session:** login state and username stored in `localStorage`, plus a logout button
- **Footer** with product, company and legal links, social icons and an auto-updating copyright year
- **Consistent theming** using CSS custom properties (variables)

> **Note:** Authentication is simulated for demonstration. No real accounts are created and no data is sent to a server.

## Tools and Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, Flexbox/Grid layouts, CSS variables, media queries |
| JavaScript (ES6) | Theme toggle, form handling, section switching, session state |
| Web Storage API (`localStorage`) | Saving theme preference and login state |
| Font Awesome 6.4 | Icons |
| Google Fonts (Roboto) | Typography |
| Git and GitHub | Version control and code hosting |

## Project Architecture

```
Elevvo-Tech-Responsive-Landing-Page/
├── code.html    # Page structure and all sections
├── code.css     # Theme variables, layout, components, responsive styles
├── code.js      # Interactivity: theme, auth flow, dashboard
└── README.md
```

**How it works**

1. `code.html` contains every section: hero, signup, login, dashboard, features, testimonials, pricing, call to action and footer.
2. The signup, login and dashboard sections start hidden. `code.js` shows or hides them using a single `showSection()` function.
3. On load, the script checks `localStorage`. If the user is logged in it shows the dashboard, otherwise it shows the hero section.
4. `code.css` defines colors, spacing and radii as CSS variables, and a `dark-theme` class switches the whole palette.

## Getting Started

1. Open the project folder
```bash
   cd Elevvo-Tech-Responsive-Landing-Page
```
2. Open `code.html` in your browser (double-click it, or use the VS Code Live Server extension).

No installation or build step is needed.

## Author

**Javeria Fatima**

GitHub: [JAVERIA-TECH](https://github.com/JAVERIA-TECH)