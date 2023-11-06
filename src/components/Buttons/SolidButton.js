import Link from 'next/link';
import { tv } from 'tailwind-variants';

import baseButton from './baseButton';

const solidButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary:
        'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
      secondary:
        'text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700',
      danger:
        'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export default function SolidButton({
  href = '',
  color = '',
  size = '',
  full,
  children,
}) {
  return (
    <Link href={href} className={solidButton({ color, size, full })}>
      {children}
    </Link>
  );
}
