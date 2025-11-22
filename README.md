# Wearly - AI Stylist Interface

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
