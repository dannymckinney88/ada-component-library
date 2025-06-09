# ADA Component Library

A comprehensive component library demonstrating best practices for web accessibility (ADA compliance) and inclusive design.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── atoms/           # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/       # Combinations of atoms (form groups, cards, etc.)
│   ├── organisms/       # Complex components (navigation, forms, etc.)
│   └── templates/       # Page layouts and structures
├── hooks/               # Custom React hooks
├── utils/              # Utility functions
│   ├── a11y/           # Accessibility utilities
│   └── testing/        # Testing utilities
├── styles/             # Global styles and theme
├── docs/               # Documentation
│   ├── components/     # Component documentation
│   └── guidelines/     # ADA guidelines and best practices
└── examples/           # Example implementations
    └── pages/          # Example pages using components
```

## Accessibility Features

- ARIA attributes implementation
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management
- Semantic HTML structure

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

- Component testing with Jest and React Testing Library
- Accessibility testing with axe-core
- Keyboard navigation testing
- Screen reader testing

## Contributing

Please read our [Contributing Guidelines](docs/guidelines/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
