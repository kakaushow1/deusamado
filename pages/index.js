import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <img src="/images/logo.jpg" alt="Your Name" />
        
      </Head>

      <main>
        <h1 className={styles.title}>
        Clique aqui para aprender sobre<Link href="/posts/first-post"> Zumbi dos Palmares!</Link>
        </h1>

        
      </main>

      <footer>
      <h1>Dia da Consciência Negra 2023 (Brasil)</h1>
      <p>segunda-feira , 20 de novembro</p>

      </footer>

      <style jsx>{`
      
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
