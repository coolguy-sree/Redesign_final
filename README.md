# BIT Durg Website

This is the official website for Bhilai Institute of Technology, Durg. The website is built using React, TypeScript, and Tailwind CSS.

## Quick Start

1. Clone the repository
2. Open in VS Code
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The website will automatically open in your default browser at `http://localhost:5173`.

## Project Structure

```
bit-durg-website/
├── src/
│   ├── components/        # React components
│   │   ├── events/       # Event-related components
│   │   ├── home/         # Homepage components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── office-bearers/  # Faculty and staff components
│   │   └── grievances/   # Feedback and grievance forms
│   ├── data/            # Static data and content
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Lucide React (for icons)

## Deployment

The site can be deployed to any static hosting service (Netlify, Vercel, etc.). To deploy:

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your hosting service

## Support

For any technical issues or questions, please open an issue in the repository.