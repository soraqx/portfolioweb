# Portfolio Website

A minimalist, cozy portfolio website built with React, Vite, TypeScript, and Convex backend.

## 🎨 Design

- **Aesthetic**: Minimalist/cozy with neutral color palette
- **Primary Color**: Cream (#f5efd6)
- **Theme Switching**: Multiple neutral color options

## 📦 Project Structure

This is a monorepo using `pnpm workspaces`:

```
portfolioweb/
├── apps/
│   └── web/                 # React frontend (Vite + TypeScript)
├── packages/
│   ├── convex/             # Convex backend
│   └── shared/             # Shared TypeScript types
├── pnpm-workspace.yaml
├── package.json
├── tsconfig.json
└── vercel.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The site will be available at `http://localhost:5173`

### Building

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📋 Portfolio Sections

- **Hero**: Introduction and CTA
- **About**: Bio and background
- **Skills**: Categorized skills showcase
- **Projects**: Project portfolio with descriptions and links
- **Contact**: Contact form (submissions stored in Convex)
- **Resume**: Downloadable resume link

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Convex (serverless)
- **Deployment**: Vercel
- **Monorepo**: pnpm workspaces

## 🗄️ Backend

Contact form submissions are stored in Convex database. No email notifications (storage only).

### Convex Tables

- `projects`: Portfolio projects
- `skills`: Skills and expertise
- `contact_submissions`: Contact form submissions
- `resume_data`: Resume information

## 📝 Environment Variables

Create a `.env.local` in `apps/web/`:

```
VITE_CONVEX_URL=your_convex_url
```

## 🚢 Deployment

Deployed on Vercel. Configuration in `vercel.json`.

## 📄 License

MIT
