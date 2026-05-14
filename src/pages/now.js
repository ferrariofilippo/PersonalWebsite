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
        <meta name="description" content="What is Filippo Ferrario doing now?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ferrariofilippo.png" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="max-w-2xl mx-auto px-6 py-16">
          <p className="font-mono text-xs text-zinc-500 mb-4">// now</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-50 mb-16 leading-tight">
            Things I&apos;m doing
          </h1>

          <section className="mb-12">
            <h2 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 text-left">
              Learning
            </h2>
            <ul className="space-y-2">
              <Learning learnings={learnings} />
            </ul>
          </section>

          <section className="mb-12 border-t border-zinc-800 pt-12">
            <h2 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 text-left">
              Open Source
            </h2>
            <ul className="space-y-2">
              <Oss oss={oss} />
            </ul>
          </section>

          <section className="border-t border-zinc-800 pt-12">
            <h2 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 text-left">
              Reading
            </h2>
            <ul className="space-y-2">
              <Books books={books} />
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    { persistSession: false }
  );

  const [{ data: learnings }, { data: oss }, { data: books }] = await Promise.all([
    supabase.from('learning').select(),
    supabase.from('oss').select(),
    supabase.from('books').select(),
  ]);

  return { props: { learnings, oss, books } };
}
