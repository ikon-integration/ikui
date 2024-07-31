import type { Meta } from '@storybook/react';

import { InputCurrency } from '@/components/InputCurrency';

const meta = {
  title: 'Components/InputCurrency',
  component: InputCurrency,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputCurrency>;

export default meta;

function Template() {
  return <InputCurrency />;
}

function Percentage() {
  return <InputCurrency prefix="" suffix="%" />;
}

function Full() {
  return <InputCurrency prefix="$" suffix="%" />;
}

export const Default = Template;

export const Percent = Percentage;

export const FullTest = Full;
