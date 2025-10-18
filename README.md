# Hitesh Shetty - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, projects, and skills. The site features a clean design with optimized performance and SEO.

**Live Site**: [hiteshshetty.com](https://hiteshshetty.com)

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Static site generation with Next.js export
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Analytics Integration**: Built-in analytics tracking
- **Fast Loading**: Optimized fonts, images, and code splitting

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library

### Development Tools

- **Biome** - Fast linter and formatter
- **Turbopack** - Fast bundler for development
- **Lint-staged** - Pre-commit hooks
- **PostCSS** - CSS processing

### Deployment

- **Static Export** - Optimized for static hosting
- **GitHub Pages** - Hosting platform

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── blogs/             # Blog pages
│   ├── projects/          # Projects showcase
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── pages/            # Page-specific components
│   ├── projects/         # Project-related components
│   ├── sections/         # Homepage sections
│   └── ui/               # UI components
├── data/                 # JSON data files
│   ├── profile.json      # Personal information
│   ├── projects.json     # Project data
│   ├── skills.json       # Skills and technologies
│   └── ...               # Other data files
└── lib/                  # Utility functions
    └── structured-data.ts # SEO structured data
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hiteshshetty-dev/hiteshshetty.com.git
   cd hiteshshetty.com
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## Content Management

The website content is managed through JSON files in the `src/data/` directory:

- **`profile.json`** - Personal information, bio, and social links
- **`projects.json`** - Featured projects with descriptions and tech stacks
- **`skills.json`** - Technical skills organized by category
- **`experience.json`** - Professional work experience
- **`education.json`** - Educational background
- **`achievements.json`** - Awards and certifications
- **`opensource.json`** - Open source contributions
- **`blogs.json`** - Blog posts and articles

## Customization

### Adding a New Project

1. Add project data to `src/data/projects.json`
2. Include project details: title, description, tech stack, links, and preview images
3. The project will automatically appear in the projects section

### Updating Skills

1. Modify `src/data/skills.json`
2. Add or remove skills from appropriate categories
3. Skills will be displayed with their corresponding icons

### Changing Personal Information

1. Update `src/data/profile.json`
2. Modify bio, contact information, and social links
3. Changes will reflect across the entire site

## Deployment

The site is configured for static export and can be deployed to any static hosting service:

### GitHub Pages

- Automatically deploys from the `main` branch
- Static files are generated in the `out/` directory
- Custom domain configured via `CNAME` file

## Configuration

### Next.js Configuration

- Static export enabled for GitHub Pages compatibility
- Image optimization disabled for static hosting
- Turbopack enabled for faster builds

### SEO Configuration

- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for rich snippets
- XML sitemap generation
- Robots.txt configuration

## Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Excellent
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP format with proper sizing

## Contact

**Hitesh Shetty** - Senior Software Engineer

- Email: [hitesh.shetty2011@gmail.com](mailto:hitesh.shetty2011@gmail.com)
- LinkedIn: [hitesh-shetty2011](https://linkedin.com/in/hitesh-shetty2011)
- GitHub: [hiteshshetty-dev](https://github.com/hiteshshetty-dev)
- Website: [hiteshshetty.com](https://hiteshshetty.com)