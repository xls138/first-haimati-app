# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Code Style Guidelines
- Use TypeScript with strict type checking
- Follow import order: React/Next.js → third-party → local (with @/ aliases) → CSS
- Use PascalCase for components/files, camelCase for variables/functions
- Use Tailwind CSS for styling with cn() utility for class merging
- Client components must use "use client" directive
- Functional components with explicit TypeScript interfaces for props
- Use shadcn/ui component patterns with class-variance-authority for variants
- Use React hooks for state management (useState, useEffect)
- Use path aliases: @/components, @/lib/utils, @/components/ui
- Always destructure props with default values when appropriate