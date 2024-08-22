import Head from 'next/head';
import Header from '../components/header';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Privacy</title>
        <meta
          name="description"
          content="Filippo Ferrario website privacy notice"
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
        className="min-h-screen container mx-auto sm:mb-0 mb-5"
      >
        <Header />
        <main
          className="flex flex-col items-center mt-3 justify-center"
        >
          <h1
            className='text-center text-purple-600 sm:text-[3.5em] text-5xl font-semibold shadow-lg'
          >
            Privacy
          </h1>
          <p
            className="text-center lg:w-2/3 w-full mt-10 px-2 mb-3 text-lg"
          >
            This site is <a href="https://github.com/ferrariofilippo/PersonalWebsite" className="text-neutral-300 underline hover:text-purple-600 hover:font-semibold">open-source</a>.
          </p>
          <p
            className="text-center lg:w-2/3 w-full px-2 text-lg"
          >
            <em>ferrariofilippo.vercel.app</em> uses <a href="https://vercel.com/analytics" className="text-neutral-300 underline hover:text-purple-600 hover:font-semibold">Vercel Analytics</a> to collect anonymous data about its users, 
            such as which pages they visit and how much time they spend on them (analytical cookies).<br />
            This data is <span className='font-semibold'>exclusively used by me</span> to better understand what I should improve.
          </p>
        </main>
      </div>
    </>
  )
}
