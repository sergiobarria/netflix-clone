import React from 'react';

import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

import styles from '../styles/Home.module.scss';

export default function HomePage() {
  const [email, setEmail] = React.useState<string | null>('');
  const [userMsg, setUserMsg] = React.useState<string | null>('');
  const router = useRouter();

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

  const handleLoginWithEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email) {
      if (email === 'example@example.com') {
        router.push('/browse');
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
                      Get Started <IoIosArrowForward />
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
