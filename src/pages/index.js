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
              className='text-center'
            >
              Developer & Student
            </h3>
            <p
              className="text-center"
            >
              If you want to know me better, you are in the right place.<br />
              I am an Italian teen who loves programming, problem solving and running.<br />
              Currently, I am attending the last year at <a href="https://www.istitutogreppi.edu.it/" className="custom-link">IISS A. Greppi High School</a>, and I plan to
              attend <a href="https://www.polimi.it/" className="custom-link">Politecnico di Milano</a>, probably studying Mathematical Engineering.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
