import styles from './layout.module.css';
import { Header } from './Header';
export const siteTitle = 'Next.js × Framer Motion Demos';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
