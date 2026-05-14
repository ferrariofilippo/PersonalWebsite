import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Home</title>
        <meta name="description" content="About Filippo Ferrario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
        <link rel="icon" href="/ferrariofilippo.png" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="flex lg:flex-row flex-col items-center xl:mx-32 md:mx-16 sm:mx-8 mx-6 py-20 gap-16">
          <div className="flex flex-col justify-center lg:w-1/2 w-full">
            <Image
              width="256"
              height="256"
              alt="Ferrario Filippo"
              src="/ferrariofilippo.png"
              className="rounded-2xl object-scale-down mx-auto ring-1 ring-zinc-700/60"
              quality="100"
              priority
            />
          </div>
          <div className="2xl:w-1/3 xl:w-1/2 lg:w-2/3 w-full">
            <p className="font-mono text-xs text-zinc-500 mb-3 md:text-start text-center">
              // about
            </p>
            <h1 className="md:text-start text-center text-4xl font-semibold text-zinc-50 mb-6 leading-tight">
              Filippo Ferrario
            </h1>
            <p className="mb-5 text-zinc-300 leading-relaxed">
              I&apos;m a student, a developer and an open-source contributor.
              <br />
              I study Mathematical Engineering at{' '}
              <a
                href="https://www.polimi.it/"
                className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
              >
                Politecnico di Milano
              </a>
              .
            </p>
            <p className="font-mono text-xs text-zinc-500 mb-2">// what_i_love</p>
            <p className="mb-5 text-zinc-300 leading-relaxed">
              diving into challenges, solving problems, over-engineering things &amp; C#.
            </p>
            <p className="font-mono text-xs text-zinc-500 mb-2">// my_journey</p>
            <p className="text-zinc-300 leading-relaxed">
              I first approached this <span className="italic">art</span> in 2019 using Arduino to
              create simple devices. Since then, I kept on developing more and more software, to
              improve so that I can solve a wider range of problems — yeah, it&apos;s kind of a
              vicious cycle.
              <br />
              <br />
              By 2022, I publish my projects so that people can help me find bugs and add features
              or be inspired by them.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
