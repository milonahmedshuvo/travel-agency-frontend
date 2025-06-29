import Login from '@/components/auth/login';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Hvarlocalguide - Login",
  description: "Hvar Local Travel Agency",
};

const LoginPage = () => {
  return (
    <div>
      <Login/>
    </div>
  );
};

export default LoginPage;