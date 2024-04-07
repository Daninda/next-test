'use client';
import { FaUnlock, FaUser } from 'react-icons/fa6';
import { IoTriangleOutline } from 'react-icons/io5';
import Button from './Button';
import InlineLink from './InlineLink';
import Input from './Input';

const Signin = () => {
  return (
    <div className='bg-white text-cyan-200 rounded-md w-full px-10 sm:w-[540px] sm:px-20 pt-20 pb-12 flex flex-col items-center shadow-md'>
      <div className='flex flex-col items-center mb-32'>
        <IoTriangleOutline className='text-cyan-100 mb-1' size={'48px'} />
        <h2 className='text-cyan-200 text-4xl'>Sign in</h2>
      </div>
      <form className='w-full'>
        <Input
          className='mb-10'
          icon={<FaUser size={'20px'} />}
          type='text'
          placeholder='username'
        />
        <Input
          className='mb-10'
          icon={<FaUnlock size={'20px'} />}
          type='password'
          placeholder='password'
        />
        <div className='inline-flex items-center mb-12'>
          <label className='relative flex items-center rounded-full cursor-pointer' htmlFor='keep'>
            <input
              type='checkbox'
              className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border-cyan-100 border-2 transition-all checked:bg-cyan-100 "
              id='keep'
            />
            <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
              <svg
                className='h-4 w-4'
                viewBox='0 0 20 20'
                fill='currentColor'
                stroke='currentColor'
                stroke-width='1'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </span>
          </label>
          <label className='mt-px ml-4 text-gray-300 cursor-pointer select-none' htmlFor='keep'>
            Keep me signed in
          </label>
        </div>
        <Button onClick={() => {}}>SIGN IN</Button>
      </form>
      <InlineLink className='mt-10' variant='secondary'>
        Forgot Password?
      </InlineLink>
    </div>
  );
};

export default Signin;
