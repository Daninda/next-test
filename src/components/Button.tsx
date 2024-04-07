import { FC } from 'react';

interface IButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: string;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ onClick, variant = 'primary', disabled = false, children }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className='flex w-full h-16 items-center justify-center rounded-full bg-cyan-200 text-white text-lg hover:opacity-80 transition-opacity'
    >
      {children}
    </button>
  );
};

export default Button;
