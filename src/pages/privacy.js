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
        className="min-h-screen mx-auto sm:mb-0 mb-5"
      >
        <Header />
        <main
          className="flex flex-col items-center"
        >
          <h1
            className='mt-3 text-center text-purple-600 sm:text-[7em] sm:uppercase text-6xl font-semibold'
          >
            Privacy
          </h1>
          <div
            className='md:w-2/3 w-full mt-10 px-2 mb-3 text-lg'
          >
            <span
              className='text-sm text-neutral-500'
            >
              Date: 2024-09-05
            </span>
            <p>
              This site is <a href="https://github.com/ferrariofilippo/PersonalWebsite" className="text-neutral-300 underline hover:text-purple-600 hover:font-semibold">open-source</a>.
            </p>
            <p>
              <em>ferrariofilippo.vercel.app</em> uses <a href="https://vercel.com/analytics" className="text-neutral-300 underline hover:text-purple-600 hover:font-semibold">Vercel Analytics</a> to collect anonymous data about its users,
              such as which pages they visit and how much time they spend on them (analytical cookies).<br />
              This data is <span className='font-semibold'>exclusively used by me</span> to better understand what I should improve.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
