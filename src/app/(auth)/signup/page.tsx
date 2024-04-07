import InlineLink from '@/components/InlineLink';
import Signup from '@/components/Signup';

const SignupPage = () => {
  return (
    <>
      <Signup />
      <p className='text-white text-lg'>
        Have an account? <InlineLink href='/signin'>Sign in</InlineLink>
      </p>
    </>
  );
};

export default SignupPage;
