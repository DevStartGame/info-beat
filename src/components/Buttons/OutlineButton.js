import Link from 'next/link';
import { tv } from 'tailwind-variants';

import baseButton from './baseButton';

// TODO: próximo item a ser feito

const outlineButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary: '',
    },
  },
});

export default function OutlineButton({
  href = '',
  color = '',
  size = '',
  full,
  children,
}) {
  return (
    <Link href={href} className={outlineButton({ color, size, full })}>
      {children}
    </Link>
  );
}
