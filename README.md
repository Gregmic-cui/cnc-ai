# AI CNC Website Frontend

A modern frontend for the AI CNC machinery website built with Next.js and Tailwind CSS.

## Features

- Responsive design using Tailwind CSS
- Internationalization (i18n) supporting English and Chinese
- TypeScript for type safety
- Modern UI with best practices

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/pages` - Contains all the pages of the application
- `src/components` - Reusable UI components
- `src/styles` - Global styles and Tailwind configuration
- `public/locales` - Translation files for i18n support

## Translations

Translation files are stored in `public/locales` directory:
- `en/common.json` - English translations
- `zh/common.json` - Chinese translations

## Deployment to Vercel

To deploy this project to Vercel, follow these steps:

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the project:
   ```bash
   vercel
   ```
5. Follow the prompts in the CLI to configure your deployment

Alternatively, you can deploy directly through the Vercel dashboard:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import the project in the Vercel dashboard
3. Configure your project settings
4. Deploy

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next-i18next Documentation](https://github.com/isaachinman/next-i18next)
- [Vercel Deployment](https://vercel.com/docs) 