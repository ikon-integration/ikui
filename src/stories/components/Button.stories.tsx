import type { Meta, StoryObj } from '@storybook/react-vite';
import { BeefIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: ['Button'],
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: ['Destructive'],
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: ['Ghost'],
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: ['Link'],
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: ['Outline'],
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: ['Secondary'],
  },
};

export function Sizes() {
  return (
    <div className="ikui-flex ikui-flex-col ikui-gap-4">
      <div className="ikui-space-y-1">
        <h1 className="ikui-text-3xl ikui-font-medium">Large</h1>
        <Button size="lg">Button</Button>
      </div>

      <div className="ikui-space-y-1">
        <h1 className="ikui-text-3xl ikui-font-medium">Default</h1>
        <Button size="default">Button</Button>
      </div>

      <div className="ikui-space-y-1">
        <h1 className="ikui-text-3xl ikui-font-medium">Small</h1>
        <Button size="sm">Button</Button>
      </div>

      <div className="ikui-space-y-1">
        <h1 className="ikui-text-3xl ikui-font-medium">Icon</h1>
        <Button size="icon">
          <BeefIcon />
        </Button>
      </div>
    </div>
  );
}

export function LoadingState() {
  const [isLoading, setIsLoading] = useState(false);

  function handleStartLoading() {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="ikui-flex ikui-flex-col ikui-gap-4">
      <Button loading={isLoading} onClick={handleStartLoading}>
        Click to start Loading
      </Button>
      <Button
        loading={isLoading}
        onClick={handleStartLoading}
        variant="destructive"
      >
        Click to start Loading
      </Button>
      <Button loading={isLoading} onClick={handleStartLoading} variant="ghost">
        Click to start Loading
      </Button>
      <Button loading={isLoading} onClick={handleStartLoading} variant="link">
        Click to start Loading
      </Button>
      <Button
        loading={isLoading}
        onClick={handleStartLoading}
        variant="outline"
      >
        Click to start Loading
      </Button>
      <Button
        loading={isLoading}
        onClick={handleStartLoading}
        variant="secondary"
      >
        Click to start Loading
      </Button>
    </div>
  );
}

export function AsChild() {
  return (
    <div className="ikui-flex ikui-flex-col ikui-gap-4">
      <Button asChild>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          This is a Link with Button styles
        </a>
      </Button>
    </div>
  );
}
