# Felix A. Taveras - Portfolio 2.0

A modern, interactive portfolio showcasing my work as a Full Stack Developer & Automation Engineer. Built with React 19, TypeScript, and Tailwind CSS, featuring a dynamic NASA APOD background integration.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-portfolio-url.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb)](https://react.dev/)

## 🚀 Features

- **Dynamic NASA APOD Background**: Daily astronomy picture from NASA with caching via Supabase Edge Functions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern Tech Stack**: React 19, TypeScript, and Vite for blazing-fast performance
- **Edge Function Integration**: Supabase serverless functions for efficient API caching
- **SEO Optimized**: Structured for search engine visibility

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set
- **Vite** - Next-generation frontend tooling

### Backend/Services
- **Supabase** - Edge Functions for NASA APOD caching
- **NASA APOD API** - Astronomy Picture of the Day integration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **TypeScript ESLint** - TypeScript-specific linting

## 📂 Project Structure

```
e-portfolio2.0/
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── TechStack.tsx  # Tech stack showcase
│   │   ├── Projects.tsx   # Project portfolio
│   │   ├── Experience.tsx # Work experience
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Footer.tsx     # Footer section
│   │   └── NasaBanner.tsx # NASA APOD info banner
│   ├── hooks/
│   │   └── useNasaBackground.ts  # Custom hook for NASA APOD
│   ├── assets/            # Static assets
│   ├── constants.ts       # App configuration & data
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── supabase/
│   ├── functions/
│   │   └── nasa-apod/     # Edge function for APOD caching
│   └── migrations/        # Database migrations
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for NASA APOD caching feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/f-taveras/e-portfolio2.0.git
   cd e-portfolio2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type check without emitting files |

## 🌌 NASA APOD Integration

This portfolio features a unique dynamic background that displays NASA's Astronomy Picture of the Day (APOD). The integration includes:

- **Supabase Edge Function**: Caches APOD data to minimize API calls
- **PostgreSQL Caching**: Stores daily images with 24-hour TTL
- **Graceful Fallback**: Works seamlessly even if NASA API is unavailable
- **Image Optimization**: Uses HD images when available

### Setting up Supabase

1. Create a Supabase project
2. Run the migration:
   ```bash
   supabase migration up
   ```
3. Deploy the edge function:
   ```bash
   supabase functions deploy nasa-apod
   ```
4. Set your NASA API key in Supabase secrets:
   ```bash
   supabase secrets set NASA_API_KEY=your_nasa_api_key
   ```

## 🎨 Customization

### Update Personal Information

Edit `src/constants.ts` to customize:
- Profile information (name, title, bio)
- Social media links
- Tech stack
- Projects showcase
- Work experience
- Contact information

### Styling

The project uses Tailwind CSS. Customize the design system in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Submit a pull request

## Contact

- GitHub: [@f-taveras](https://github.com/f-taveras)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/f-taveras)
- Location: Raleigh-Durham, NC

---

**If you find this portfolio inspiring, please consider giving it a star!**

Built withReact, TypeScript, and NASA's amazing imagery.
