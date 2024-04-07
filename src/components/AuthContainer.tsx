import { FC, ReactNode } from 'react';

interface IAuthContainerProps {
  children: ReactNode;
}

const AuthContainer: FC<IAuthContainerProps> = ({ children }) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-cyan-100 gap-y-12 flex-col p-4'>
      {children}
    </div>
  );
};

export default AuthContainer;
