import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logoContainer}>
        <Link href='/'>
          <a>
            <Image
              src='/static/netflix.svg'
              alt='netflix logo'
              width={150}
              height={75}
            />
          </a>
        </Link>
      </div>
      <div className={styles.nav__items}>
        <div className={styles.nav__linksContainer}>
          <ul className={styles.nav__links}>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>My List</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>Signin</div>
      </div>
    </nav>
  );
}
