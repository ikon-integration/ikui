# @ikonintegration/ui

Welcome to `@ikonintegration/ui` – a stylish and customizable UI package for React that simplifies your frontend development. This package provides ready-to-use styles and components to kickstart your React projects. Follow the steps below to get started quickly.

## Installation

To use `@ikonintegration/ui` in your React app, you need to install the package and import the main styles.

### Install the package

```bash
npm install @ikonintegration/ui
# or
yarn add @ikonintegration/ui
```

## Import styles

In your app entrypoint (usually src/main.tsx), import the `@ikonintegration/ui` styles:

```tsx
import '@ikonintegration/ui/styles.css';
```

## Usage

With `@ikonintegration/ui` integrated into your project, you can start using the predefined React components right away.

```tsx
import React from 'react';

import { Button } from '@ikonintegration/ui';

export function MyComponent() {
  return (
    <div>
      <Button onClick={() => console.log('Button clicked')}>
        Click me
      </Button>
    </div>
  );
}
```

## Customization

`@ikonintegration/ui` is designed to be flexible and customizable to fit the unique styles of your React project. Feel free to override the styles, modify the components, or use the provided utility classes to achieve your desired look and feel.
