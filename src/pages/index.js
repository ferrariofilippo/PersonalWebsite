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
        className="main-content container"
      >
        <Header />
        <main
          className="d-flex flex-md-row flex-column align-middle"
        >
          <div
            className="d-flex flex-column align-items-center my-auto col-md-6 col-12"
          >
            <Image
              width="256"
              height="256"
              alt="Ferrario Filippo"
              src="/ferrariofilippo.png"
              className="rounded-5 img-fluid mainImg"
            />
          </div>

          <div
            className="col-md-6 col-12 my-sm-auto mt-5 px-4"
          >
            <h3
              className='text-md-start text-center'
            >
              About me
            </h3>
            <p>
              I'm a student and an open-source contributor.<br />
              I study Mathematical Engineering at <a href="https://www.polimi.it/" className="custom-link">Politecnico di Milano</a>.<br />
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
