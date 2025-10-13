# Contributing to TokeFinder Website

Thank you for your interest in contributing to the TokeFinder Website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm or yarn
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/kubit-ui/tokefinder-website.git
   cd tokefinder-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Run tests**
   ```bash
   npm test
   # or
   yarn test
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: All new code should be written in TypeScript
- **ESLint**: Follow the existing ESLint configuration
- **Formatting**: Code will be automatically formatted on commit
- **CSS**: Use CSS Modules with CSS custom properties (variables)
- **Components**: Follow the existing component structure and naming conventions

### Component Structure

```
src/app/components/
├── componentName/
│   ├── componentName.tsx
│   ├── componentName.module.css
│   └── __tests__/
│       └── componentName.test.tsx
```

### CSS Guidelines

- Use CSS custom properties defined in `globals.css`
- Follow the BEM-like naming convention for CSS classes
- Ensure responsive design using mobile-first approach
- Test across different screen sizes

### TypeScript Guidelines

- Use proper type annotations
- Create interfaces for component props
- Avoid `any` type - use proper typing
- Document complex functions with JSDoc comments

## 🧪 Testing

### Writing Tests

- Write tests for all new components and hooks
- Use descriptive test names
- Test both happy path and edge cases
- Mock external dependencies appropriately

### Running Tests

```bash
# Run tests once
npm test

# Run tests with coverage
npm run vitest-report

# Run tests in watch mode
npm run vitest:watch
```

### Test Coverage

- Maintain at least 70% test coverage
- Focus on testing component behavior, not implementation details
- Test accessibility features

## 🎨 Design System

### CSS Custom Properties

The project uses a comprehensive design token system. Use existing variables when possible:

```css
/* Colors */
var(--foreground)
var(--background)
var(--accent-turquoise)

/* Spacing */
var(--spacing-300) /* 16px */
var(--spacing-400) /* 32px */

/* Typography */
var(--font-size-base) /* 16px */
var(--font-weight-semibold)
var(--font-family-brand)
```

### Responsive Design

Use mobile-first approach with consistent breakpoints:

```css
/* Mobile first */
.component {
  padding: var(--spacing-300);
}

/* Tablet */
@media (max-width: 768px) {
  .component {
    padding: var(--spacing-400);
  }
}

/* Desktop */
@media (max-width: 1100px) {
  .component {
    padding: var(--spacing-500);
  }
}
```

## 🔧 Component Development

### Creating New Components

1. **Create component directory** following the established structure
2. **Write the component** with proper TypeScript typing
3. **Add CSS Module** with responsive styles
4. **Write tests** covering main functionality
5. **Update exports** if needed

### Component Best Practices

- Use functional components with hooks
- Implement proper accessibility (ARIA labels, semantic HTML)
- Handle loading and error states
- Use meaningful prop names and types
- Document complex components with JSDoc

### Example Component

```tsx
import React from 'react';
import styles from './ExampleComponent.module.css';

/**
 * Props for ExampleComponent
 */
interface ExampleComponentProps {
  /** The title to display */
  title: string;
  /** Additional CSS class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Example component with proper documentation
 * 
 * @param props - Component props
 * @returns React component
 */
const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`${styles.container} ${className}`.trim()}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default ExampleComponent;
```

## 📝 Commit Guidelines

### Commit Message Format

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(hero): add animation to logo component
fix(footer): resolve social links accessibility issue
docs(readme): update installation instructions
test(hooks): add tests for useInView hook
```

## 🔍 Pull Request Process

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test your changes**
   ```bash
   npm run test:ci
   npm run build
   ```

4. **Commit your changes** using conventional commit format

5. **Push to your fork** and create a pull request

6. **Fill out the PR template** with detailed description

### PR Requirements

- ✅ All tests pass
- ✅ Code follows style guidelines
- ✅ Changes are documented
- ✅ No breaking changes (or clearly documented)
- ✅ Responsive design tested
- ✅ Accessibility tested

## 🐛 Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and version information
- Screenshots if applicable

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)

## 💬 Getting Help

- Open an issue for bug reports or feature requests
- Start a discussion for questions or ideas
- Join our Discord community for real-time chat

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to TokeFinder Website! 🎉