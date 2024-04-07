import { FC, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  className?: string;
}

const Input: FC<IInputProps> = ({ icon, className, ...props }) => {
  return (
    <div
      className={`flex items-center w-full h-8 flex-shrink-0 gap-5 bg-white focus:outline-accent focus:outline-1 border-b-[3px] border-b-gray-100 ${className}`}
    >
      <div className='text-gray-300'>{icon}</div>
      <input
        {...props}
        className='w-full text-gray-300 outline-none bg-white placeholder:text-gray-200 placeholder:italic'
      />
    </div>
  );
};

export default Input;
