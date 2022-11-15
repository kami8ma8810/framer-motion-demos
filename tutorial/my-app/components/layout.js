import styles from './layout.module.css';
import Header from './header';
export const siteTitle = 'Next.js × Framer Motion Demos';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
