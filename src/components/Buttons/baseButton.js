import { tv } from 'tailwind-variants';

const baseButton = tv({
  base: [
    'font-medium',
    'tracking-wide',
    'rounded-md',
    'text-center',
    'transition',
    'duration-400',
    'ease-in-out',
    'active:outline',
    'active:outline-2',
    'active:outline-current',
    'active:outline-offset-2',
  ],
  variants: {
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    full: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default baseButton;
