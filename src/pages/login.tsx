import React from 'react';

import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import LoginForm from '@/components/forms/AppForm';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

interface FormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();

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

  function handleSubmit(
    values: FormInputs,
    actions: FormikHelpers<FormInputs>
  ) {
    const { email, password } = values;
    try {
      actions.setSubmitting(true);
      login(email, password);
    } catch (error) {
      console.error(error);
      actions.resetForm();
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
