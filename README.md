# Wearly - AI Stylist Interface

Wearly is a modern web interface for an AI-powered personal stylist application, designed to help users visualize outfits and get personalized fashion recommendations.

## Features

- **Interactive Sidebar**: Manage user profile (gender, age, height, weight), configure scene settings (season, weather, activities), and upload pictures.
- **Navigation**: Easy access to Introduction, FAQs, Blog, and Contact pages, along with Account and Cart management.
- **Main Display**: A central visualization area for the styled model, featuring a toggle between "3D" and "Image" views.
- **Product Recommendations**: Dynamic product cards displaying recommended items (e.g., Hat, Coat, Pants) with stock status and pricing.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a modular component-based structure:

- **`app/components/`**: Contains reusable UI components.
  - `Sidebar.tsx`: Left sidebar for user inputs.
  - `Navbar.tsx`: Top navigation bar.
  - `MainDisplay.tsx`: Central model visualization area.
  - `ProductCard.tsx`: Reusable card for displaying product details.
- **`app/page.tsx`**: The main entry point that assembles the layout.
- **`app/globals.css`**: Global styles and Tailwind configuration.
