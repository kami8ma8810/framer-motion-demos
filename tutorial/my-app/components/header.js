import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <nav>
        <li className={styles.list}>
          <Link href='/fadein'>fadein</Link>
        </li>
      </nav>
    </header>
  );
}
