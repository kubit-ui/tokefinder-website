# TokeFinder Website

The official website for TokeFinder, a powerful Figma plugin designed to streamline design workflows by enabling efficient search and filtering of local variables across entire Figma projects.

## 🚀 About TokeFinder

TokeFinder is the ultimate Figma plugin that helps designers and developers maintain organized design systems by providing an intuitive interface to search, filter, and manage design tokens directly within Figma.

## ✨ Features

- **Efficient Variable Search**: Quickly find and filter local variables across your entire Figma project
- **Intuitive Interface**: User-friendly design that integrates seamlessly with Figma
- **Design System Management**: Perfect for maintaining organized design tokens
- **Real-time Search**: Instant results as you type
- **Variable Filtering**: Advanced filtering options to find exactly what you need

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with React 19
- **TypeScript**: Full type safety throughout the codebase
- **Linting**: ESLint with Next.js configuration
- **Styling**: CSS Modules with CSS custom properties (variables)
- **Performance**: Optimized with Next.js Turbopack for development

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tokefinder-website.git

# Navigate to the project directory
cd tokefinder-website

# Install dependencies
npm install
# or
yarn install
```

## 🚀 Getting Started

```bash
# Start the development server
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

```bash
# Run tests
npm test
# or
yarn test

# Run tests with UI and coverage
npm run vitest-report
# or
yarn vitest-report

# Run tests in watch mode
npm run vitest:watch
# or
yarn vitest:watch
```

## 📝 Scripts

- `dev` - Start development server with Turbopack
- `build` - Build the application for production
- `start` - Start the production server
- `test` - Run tests with coverage and UI
- `lint` - Run ESLint
- `test:ci` - Run linting and tests (CI pipeline)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── background/      # Background effects
│   │   ├── contentSection/  # Content sections
│   │   ├── demoSection/     # Demo showcase
│   │   ├── featuresSection/ # Features display
│   │   ├── footer/          # Footer component
│   │   ├── heroSection/     # Hero section
│   │   ├── seo/            # SEO components
│   │   └── ui/             # UI components
│   ├── hooks/              # Custom React hooks
│   ├── __tests__/          # Test files
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
└── public/                 # Static assets
```

## 🎨 Styling

The project uses CSS Modules combined with CSS custom properties for maintainable and scalable styling:

- **CSS Variables**: Consistent design tokens for colors, spacing, typography
- **Modular CSS**: Component-scoped styles with CSS Modules
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Performance**: Optimized CSS delivery and minimal runtime overhead

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [TokeFinder Website](https://tokefinder.kubit-lab.com)
- [Figma Plugin Store](https://www.figma.com/community/plugin/tokefinder)
- [Kubit](https://kubit-lab.com)

## 💡 Acknowledgments

- Built with ❤️ by the Kubit team
- Powered by Next.js and React
- Icons and assets designed specifically for TokeFinder
