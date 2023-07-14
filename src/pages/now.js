'use server'

import Head from 'next/head';
import Header from '@/components/header';
import styles from '@/styles/Now.module.css';
import Learning from '@/components/learning';
import Oss from '@/components/oss';
import Books from '@/components/books';
import { createClient } from '@supabase/supabase-js';

export default function Now({ learnings, oss, books}) {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Now</title>
        <meta
          name="description"
          content="What is Filippo Ferrario doing now?"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/ferrariofilippo.png"
        />
      </Head>
      <div
        className="main-content container"
      >
        <Header />
        <main
          className="d-flex flex-column align-items-center mt-3"
        >
          <h1>What am I doing right now?</h1>
          <div
            className='container'
          >
            <h3
              className={`mb-auto mt-5 ${styles.subtitle}`}
            >
              Let's start with Learning
            </h3>
            <ul
              id="learning-list"
              className={styles.list}
            >
              <Learning learnings={learnings} />
            </ul>

            <h3
              className={`mb-auto mt-5 ${styles.subtitle}`}
            >
              Open-Source-Software
            </h3>
            <ul
              id="oss-list"
              className={styles.list}
            >
              <Oss oss={oss} />
            </ul>

            <h3
              className={`my-auto ${styles.subtitle}`}
            >
              What am I reading?
            </h3>
            <ul
              id="reading-list"
              className={styles.list}
            >
              <Books books={books} />
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_KEY, 
    { 
      persistSession: false
    }
  );

  async function getLearnings() {
    const { data } = await supabase.from('learning').select();

    return data;
  }

  async function getOss() {
    const { data } = await supabase.from('oss').select();
    
    return data;
  }

  async function getBooks() {
    const { data } = await supabase.from('books').select();

    return data;
  }

  const learnings = await getLearnings();
  const oss = await getOss();
  const books = await getBooks();

  return {
    props: {
      learnings,
      oss,
      books
    }
  };
}
