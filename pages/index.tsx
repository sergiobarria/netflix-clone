import React from 'react';

import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

import styles from '../styles/Home.module.scss';

import { magic } from '../lib/magicClient';

export default function HomePage() {
  const [email, setEmail] = React.useState<string | null>('');
  const [userMsg, setUserMsg] = React.useState<string | null>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const handleOnChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;

    // Basic email validation
    if (
      !email ||
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setUserMsg('Please add a valid email');
    } else {
      setEmail(email);
    }
  };

  const handleLoginWithEmail = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (email) {
      if (email === 'sergio.barria9210@gmail.com') {
        try {
          setLoading(true);
          // @ts-ignore
          const didToken = await magic.auth.loginWithMagicLink({ email });

          if (didToken) {
            router.push('/browse');
          }
        } catch (error) {
          console.error('Something went wrong loggin in', error);
        }
      } else {
        setUserMsg('Something went wrong logging in.');
      }
    } else {
      setEmail('');
      setUserMsg('Please enter an email address');
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header>
        <Link href='/'>
          <a>
            <Image
              src='/static/netflix.svg'
              alt='netflix logo'
              width={150}
              height={100}
            />
          </a>
        </Link>
        <Link href='/browse'>
          <a className={styles.btnRed}>Sign In</a>
        </Link>
      </header>

      {/* Content */}

      {/* Hero Card */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.overlay} />
          <div className={styles.cardContent}>
            <h1 className={styles.h1}>Unlimited movies, TV shows, and more.</h1>
            <h2 className={styles.h2}>Watch anywhere. Cancel anytime.</h2>

            <form>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className={styles.formContent}>
                <div className={styles.formInput}>
                  <div>
                    <label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        maxLength={50}
                        minLength={5}
                        placeholder='Email address'
                        onChange={handleOnChangeEmail}
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      onClick={handleLoginWithEmail}
                      className={styles.signupBtn}
                    >
                      {loading ? (
                        'Loading...'
                      ) : (
                        <span>
                          Get Started <IoIosArrowForward />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                {userMsg && <p className={styles.errorMsg}>*{userMsg}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
