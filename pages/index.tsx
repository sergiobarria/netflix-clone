import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

import styles from '../styles/Home.module.scss';

export default function HomePage() {
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
                    />
                  </label>
                </div>
                <div className={styles.signupBtn}>
                  {/* <button>
                    Get Started <IoIosArrowForward />
                  </button> */}
                  <Link href='/browse'>
                    <a>
                      Get Started <IoIosArrowForward />
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Hero Background */}

      {/* Background Image */}
      {/* <div
        style={{
          // backgroundColor: '#ff0000',
          height: '90vh',
          backgroundImage: 'url(/static/signin-bg.jpg)',
          opacity: '0.6',
        }}
      />
      <div className={styles.banner}>
       
      </div> */}
    </div>
  );
}
