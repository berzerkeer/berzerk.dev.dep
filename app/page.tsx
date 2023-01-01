import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h4 className={inter.className}>berzerk.dev under construction...</h4>
      </div>
    </main>
  );
}
