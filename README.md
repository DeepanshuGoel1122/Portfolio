# Portfolio React App

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Dark Mode Support**: Built-in dark mode with Tailwind CSS
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Modern UI**: Clean and professional design with smooth transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  components/
    Header.jsx      # Navigation header
    Hero.jsx        # Hero section
    About.jsx       # About section with skills
    Projects.jsx    # Projects showcase
    Contact.jsx     # Contact form
    Footer.jsx      # Footer with social links
  App.jsx           # Main app component
  index.js          # Entry point
  index.css         # Global styles with Tailwind
```

## Customization

- Update personal information in each component
- Modify colors in `tailwind.config.js`
- Add/remove projects in `Projects.jsx`
- Update skills in `About.jsx`

## Technologies Used

- React 18
- Tailwind CSS 3
- Material Symbols (Icons)

