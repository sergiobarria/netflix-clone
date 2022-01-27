import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { magic } from '../lib/magicClient';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');

  const router = useRouter();

  React.useEffect(() => {
    const getUserEmail = async () => {
      try {
        // @ts-ignore
        const { email } = await magic.user.getMetadata();

        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.error('Error retrieving email', error);
      }
    };

    getUserEmail();
  }, []);

  function handleShowDropdown() {
    setShowDropdown(!showDropdown);
  }

  async function handleSignout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    try {
      // @ts-ignore
      await magic.user.logout();

      router.push('/');
    } catch (error) {
      console.error('Error logging out', error);
      router.push('/');
    }
  }

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
              <Link href='/browse'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/my-list'>
                <a>My List</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.usernameContainer}>
          <button className={styles.usernameBtn} onClick={handleShowDropdown}>
            <p className={styles.username}>{username}</p>

            {/* Expand more icon */}
            <Image
              src='/static/expand_more.svg'
              alt='expand dropdown'
              width={24}
              height={24}
            />
          </button>

          {showDropdown && (
            <div className={styles.dropdown}>
              <div>
                {/* <Link href='/'> */}
                <a className={styles.linkName} onClick={handleSignout}>
                  Sign out
                </a>
                {/* </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
