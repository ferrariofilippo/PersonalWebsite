import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Home</title>
        <meta
          name="description"
          content="About Filippo Ferrario"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="theme-color"
          content="#9333ea"
        />
        <link
          rel="icon"
          href="/ferrariofilippo.png"
        />
      </Head>
      <div
        className="min-h-screen"
      >
        <Header />
        <main
          className="flex lg:flex-row flex-col align-middle xl:mx-32 md:mx-16 sm:mx-8 mx-2"
        >
          <div
            className="flex flex-col justify-center lg:w-1/2 w-full sm:my-auto mt-8 mb-12"
          >
            <Image
              width="256"
              height="256"
              alt="Ferrario Filippo"
              src="/ferrariofilippo.png"
              className="rounded-2xl object-scale-down mx-auto shadow-2xl shadow-purple-600/70"
              quality='100'
              priority
            />
          </div>
          <div
            className="2xl:w-1/3 xl:w-1/2 lg:w-2/3 w-full mt-auto sm:mb-4 mb-1"
          >
            <h3
              className='md:text-start text-center text-6xl font-semibold text-purple-600'
            >
              ABOUT ME
            </h3>
            <p className='ps-3 mb-3'>
              I'm a student, a developer and an open-source contributor.<br />
              I study Mathematical Engineering at <a href="https://www.polimi.it/" className="hover:text-purple-600 hover:font-semibold underline">Politecnico di Milano</a>.<br />
            </p>
            <span className='font-semibold mt-3'>What I love:</span>
            <p className='mb-3 ps-3'>
              diving into challenges, solving problems, over-engineering things & C#.
            </p>
            <span className='font-semibold'>My journey into programming:</span>
            <p className='ps-3'>
              I first approached this <span className='italic'>art</span> in 2019 using Arduino to create simple devices.
              Since then, I kept on developing more and more software, to improve so that I can solve a wider range of problems - yeah, it's kind of a vicious cycle.<br />
              By 2022, I publish my projects so that people can help me find bugs and add features or be inspired by them.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
