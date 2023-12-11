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
        className="min-h-screen container mx-auto md:mb-0 mb-8"
      >
        <Header />
        <main
          className="flex md:flex-row flex-col align-middle"
        >
          <div
            className="flex flex-col justify-center lg:w-1/2 md:w-1/3 w-full mt-sm-0 mt-3 px-sm-0 px-3"
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
            className="lg:w-1/2 md:w-2/3 w-full md:my-auto mt-8 px-4"
          >
            <h3
              className='md:text-start text-center text-2xl font-semibold text-purple-600'
            >
              About me
            </h3>
            <p>
              I'm a student and an open-source contributor.<br />
              I study Mathematical Engineering at <a href="https://www.polimi.it/" className="hover:text-purple-600 hover:font-semibold underline">Politecnico di Milano</a>.<br />
            </p>
            <p className='my-3'>
              I love Maths and Computer Science - they're about the same things: solving problems, optimizing processes and finding creative ways to achieve your goals.
            </p>
            <p>
              I first approached programming four years ago using Arduino. I immediately loved it: it's hard to describe the joy of seeing that what you've been creating for so long actually works!<br />
            </p>
            <p className='mt-3'>
              At the moment, I'm using mostly C#, Kotlin and JS.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
