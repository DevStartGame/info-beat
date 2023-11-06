import { tv } from 'tailwind-variants';

const button = tv({
  base: [
    'cursor-pointer',
    'font-medium',
    'gap-2',
    'rounded-lg',
    'text-center',
    'transition-all',
    'active:outline',
    'active:outline-2',
    'active:outline-current',
    'active:outline-offset-2',
  ],
  variants: {
    type: {
      solid: [
        'bg-blue-700',
        'text-white',
        'hover:bg-blue-800',
        'dark:bg-blue-600',
        'dark:hover:bg-blue-700',
      ],
      outline: [
        'border-2',
        'border-blue-700',
        'text-blue-700',
        'hover:text-white',
        'hover:bg-blue-800',
        'dark:border-blue-500',
        'dark:text-blue-500',
        'dark:hover:bg-blue-500',
      ],
    },
    size: {
      small: ['px-4', 'py-2.5', 'text-sm'],
      medium: ['px-5', 'py-3', 'text-md'],
      large: ['px-6', 'py-4', 'text-lg'],
    },
    full: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    type: 'solid',
    size: 'small',
  },
});

export default function Button({
  type = '',
  size = '',
  className = '',
  full = false,
  disabled = false,
  children,
}) {
  return (
    <a className={button({ type, size, className, full, disabled })}>{children}</a>
  );
}

// #################################
// Alternativa ao código acima

// function ButtonSolid({ children }) {
//   return <a className={button()}>{children}</a>;
// }

// function ButtonOutline({ children }) {
//   return <a className={''}>{children}</a>;
// }

// function ButtonSoft({ children }) {
//   return <a className={''}>{children}</a>;
// }

// export default {
//   solid: ButtonSolid,
//   outline: ButtonOutline,
//   soft: ButtonSoft,
// }
