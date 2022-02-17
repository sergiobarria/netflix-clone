import React from 'react';

import { useRouter } from 'next/router';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/forms/AppForm';

interface FormInputs {
  email: string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const { user, signUp } = useAuth();
  const initialValues: FormInputs = {
    email: '',
    password: '',
  };

  const loginSchmema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least six characters')
      .required('Password is required'),
  });

  React.useEffect(() => {
    if (user) {
      router.replace('/browse');
    }
  }, [user, router]);

  async function handleSubmit(
    values: FormInputs,
    actions: FormikHelpers<FormInputs>
  ) {
    const { email, password } = values;

    try {
      actions.setSubmitting(true);
      signUp(email, password);
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  }

  return (
    <div
      className='h-[100vh] flex items-center justify-center'
      style={{
        background: 'url(/static/signin-bg.jpg)',
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchmema}
      >
        <LoginForm />
      </Formik>
    </div>
  );
}
