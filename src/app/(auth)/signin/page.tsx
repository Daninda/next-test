import InlineLink from '@/components/InlineLink';
import Signin from '@/components/Signin';

const SigninPage = () => {
  return (
    <>
      <Signin />
      <p className='text-white text-lg'>
        Not a Member? <InlineLink href='/signup'>Sign up</InlineLink>
      </p>
    </>
  );
};

export default SigninPage;
