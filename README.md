# Sphere Web Fragments

A modern, lightweight UI component library for React applications.

## Overview

Sphere Web Fragments is an open-source library of reusable web components designed to help developers build beautiful, consistent user interfaces with minimal effort. Built with React and modern CSS, this library provides a comprehensive set of UI elements that can be easily integrated into any web project.

Our goal is to provide developers with high-quality, customizable components that follow best practices in web design and accessibility.

## Features

- **Comprehensive Component Collection**: Buttons, form inputs, checkboxes, dropdowns, cards, modals, tables, and typography elements
- **Customizable Theming**: Light and dark mode support with easy theme customization
- **Responsive Design**: All components are mobile-friendly and responsive
- **Accessibility-First**: Built with a11y in mind to ensure your applications are usable by everyone
- **Lightweight**: Minimal dependencies and optimized bundle size
- **TypeScript Support**: Full type definitions for enhanced developer experience

## Installation

```bash
npm install sphere-web-fragments
# or
yarn add sphere-web-fragments
```

## Quick Start

```jsx
import React from 'react';
import { Button } from 'sphere-web-fragments';
import 'sphere-web-fragments/dist/styles.css';

function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <Button className="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

## Components Class Structure

---
``` html
<button class='[basic btn class] [btn type class] [btn size class] [btn color class] [additional settings]'>
```


## Available Components

- **Buttons**: Primary, secondary, success, danger, warning, info, light, dark, outline, and more
- **Form Inputs**: Text, password, email, number, search inputs, and textareas
- **Checkboxes & Radio Buttons**: Standard checkboxes, radio buttons, and toggle switches
- **Selects**: Basic select, multi-select, and searchable select dropdowns
- **Cards**: Basic cards, image cards, and action cards
- **Modals**: Basic modals, confirmation dialogs, and drawer components
- **Tables**: Basic tables, data tables, and grid layouts
- **Typography**: Headings, paragraphs, text elements, and links

## Contributing

We welcome contributions from the community! Whether it's adding new components, improving existing ones, fixing bugs, or enhancing documentation, your help is appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the contributors who have helped shape this library
- Inspired by the best practices from popular UI libraries while maintaining a unique approach