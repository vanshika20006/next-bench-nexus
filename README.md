# Next Bench Nexus


This repository contains the source code for the official website of Next Bench, a dynamic student community dedicated to fostering innovation, collaboration, and professional growth. The platform serves as a central hub for members to learn about the community, discover events, connect with the team, and engage with various initiatives.

The website is built with Vite, React, TypeScript, and styled using Tailwind CSS with shadcn/ui components.

## Key Features

*   **Interactive Homepage**: A hero section with a video background and clear calls-to-action.
*   **Community Information**: Detailed sections about the community's vision, mission, and core team members.
*   **Events Hub**: A tabbed interface to showcase past events, announce upcoming ones, and feature event winners.
*   **Initiatives Showcase**: Dedicated sections for key programs like the Mentorship Program, Campus Ambassadors, College Outreach, and the Next Bench Agency.
*   **Interactive Map**: A Leaflet map visualizing the locations of Campus Ambassadors across India.
*   **Engagement Forms**:
    *   A "Join Community" modal for new members.
    *   Forms for colleges to request collaboration and for individuals to apply as speakers, integrated with EmailJS.
*   **Responsive Design**: A fully responsive layout that provides an optimal experience on all devices, from mobile to desktop.
*   **Modern UI/UX**: Built with `shadcn/ui` and enhanced with `framer-motion` for smooth animations and transitions.

## Technology Stack

*   **Frontend**: React, TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS, shadcn/ui
*   **Routing**: React Router
*   **Animations**: Framer Motion
*   **Carousels**: Swiper
*   **Interactive Maps**: Leaflet
*   **Email Service**: EmailJS

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.
*   [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/vanshika20006/next-bench-nexus.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd next-bench-nexus
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Configure EmailJS:**
    The outreach forms in the application use EmailJS to send emails. You will need to create an EmailJS account and replace the placeholder credentials.

    *   Navigate to `src/components/sections/OutreachSection.tsx`.
    *   Find the `handleCollegeSubmit` and `handleSpeakerSubmit` functions.
    *   Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID_COLLEGE'`, `'YOUR_TEMPLATE_ID_SPEAKER'`, and `'YOUR_PUBLIC_KEY'` with your actual credentials from your EmailJS account.

5.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

## Project Structure

The codebase is organized to maintain a clean and scalable structure. Key directories inside `src/` include:

*   `pages/`: Contains the main page components of the application (`Index.tsx`, `NotFound.tsx`).
*   `components/`: Contains all React components, subdivided into:
    *   `layout/`: Structural components like the `Navbar`.
    *   `sections/`: Major sections of the landing page (e.g., `HeroSection`, `TeamSection`).
    *   `ui/`: Reusable, generic UI components sourced from `shadcn/ui` (e.g., `Button`, `Card`, `Dialog`).
*   `hooks/`: Custom React hooks, such as `use-toast` and `use-mobile`.
*   `lib/`: Utility functions, including the `cn` function for merging Tailwind classes.
*   `assets/`: This directory can be created to store static assets like images and fonts if not using a CDN.