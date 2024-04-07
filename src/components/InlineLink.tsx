import Link from 'next/link';
import { FC } from 'react';

interface IInlineLinkProps {
  children: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

const InlineLink: FC<IInlineLinkProps> = ({
  className,
  children,
  variant = 'primary',
  href = '/',
}) => {
  return (
    <Link
      href={href}
      className={`inline-block text-lg font-medium transition-opacity hover:opacity-80 ${
        variant === 'primary' ? 'text-white' : 'text-gray-300'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default InlineLink;
