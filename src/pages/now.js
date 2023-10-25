import Head from 'next/head';
import Header from '@/components/header';
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
        className="min-h-screen container sm:mx-auto mb-8"
      >
        <Header />
        <main
          className="flex flex-col mt-3"
        >
          <h1
            className='text-center text-[#ACFCD9] sm:text-[3.5em] text-5xl'
          >
            What am I doing right now?
          </h1>
          <div
            className='flex flex-col my-auto'
          >
            <h3
              className="text-3xl mb-auto mt-8 text-center text-[#ACFCD9]"
            >
              Let's start with Learning
            </h3>
            <ul
              id="learning-list"
              className="list-none text-center sm:mx-0 mx-1"
            >
              <Learning learnings={learnings} />
            </ul>
            <h3
              className="text-3xl mb-auto mt-8 text-center text-[#ACFCD9]"
            >
              Open-Source-Software
            </h3>
            <ul
              id="oss-list"
              className="list-none text-center sm:mx-0 mx-1"
            >
              <Oss oss={oss} />
            </ul>
            <h3
            className="text-3xl mb-auto mt-8 text-center text-[#ACFCD9]"
            >
              What am I reading?
            </h3>
            <ul
              id="reading-list"
              className="list-none text-center sm:mx-0 mx-1"
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
