import Head from 'next/head';
import Header from '@/components/header';
import Learning from '@/components/learning';
import Oss from '@/components/oss';
import Books from '@/components/books';
import { createClient } from '@supabase/supabase-js';

export default function Now({ learnings, oss, books }) {
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
        className="min-h-screen xl:mx-32 lg:mx-24 md:mx-16 sm:mx-8 mx-1 mb-8"
      >
        <Header />
        <main
          className="flex flex-col mt-5"
        >
          <h1
            className='mt-3 text-center text-purple-600 sm:text-[6em] sm:uppercase text-6xl font-semibold mb-8'
          >
            Things I'm doing:
          </h1>
          <div
            className='flex flex-col my-auto sm:mx-0 mx-2'
          >
            <h3
              className="text-4xl mb-auto sm:me-auto font-semibold text-purple-400"
            >
              Learning
            </h3>
            <ul
              id="learning-list"
              className="list-disc list-inside sm:me-auto sm:mx-0 mx-1"
            >
              <Learning learnings={learnings} />
            </ul>
            <div
              className='sm:ms-auto'
            >
              <h3
                className="text-4xl mt-6 font-semibold text-purple-400"
              >
                Open-Source-Software
              </h3>
              <ul
                id="oss-list"
                className="list-disc list-inside mx-1"
              >
                <Oss oss={oss} />
              </ul>
            </div>
            <h3
              className="sm:mx-auto text-4xl mt-6 font-semibold text-purple-400"
            >
              Reading
            </h3>
            <ul
              id="reading-list"
              className="sm:mx-auto list-disc list-inside sm:mx-0 mx-1"
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
