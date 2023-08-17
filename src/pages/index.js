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
            className="flex flex-col justify-center lg:w-1/2 md:w-1/3 w-full"
          >
            <Image
              width="256"
              height="256"
              alt="Ferrario Filippo"
              src="/ferrariofilippo.png"
              className="rounded-2xl object-scale-down mx-auto"
            />
          </div>
          <div
            className="lg:w-1/2 md:w-2/3 w-full md:my-auto mt-8 px-4"
          >
            <h3
              className='md:text-start text-center text-2xl text-[#ACFCD9]'
            >
              About me
            </h3>
            <p>
              I'm a student and an open-source contributor.<br />
              I study Mathematical Engineering at <a href="https://www.polimi.it/" className="hover:text-teal-400 hover:font-semibold underline">Politecnico di Milano</a>.<br />
              I love Maths and Computer Science - they're about the same things: solving problems, optimizing processes and finding creative ways to achieve your goals.<br />
              Maths is fascinating: you can find it everywhere, and it is so good at explaining most - if not all - things.<br />
              Programming is a tool that lets you solve any problem you can think of.<br />
              I first approached programming four years ago using Arduino to create simple devices. I immediately loved it: it's hard to describe the joy of seeing that what you've been composing for so long actually works! I don't hate bugs - they're like sub-quests you need to complete.<br />
              I'm using mainly C#. After three years of it, I can say that it's not perfect, but I like it as it is.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
