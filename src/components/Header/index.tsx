// import Image from 'next/image';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Image
          src='/images/logo.svg'
          alt='logo image'
          width={131}
          height={31}
        /> */}
        <span>
          <span>dev</span>.news
        </span>
        <nav>
          <a href='' className={styles.active}>
            Home
          </a>
          <a href=''>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
