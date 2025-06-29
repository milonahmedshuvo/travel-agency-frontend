import Signup from '@/components/auth/signup';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Hvarlocalguide - Sign Up",
  description: "Hvar Local Travel Agency",
};

const SignUp   = () => {
  return (
    <div>
      <Signup/>
    </div>
  );
};

export default SignUp;