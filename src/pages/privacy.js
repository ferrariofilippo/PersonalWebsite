import Head from 'next/head';
import Header from '../components/header';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Privacy</title>
        <meta
          name="description"
          content="About Privacy"
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
          className="d-flex flex-column align-items-center mt-3"
        >
          <h1>Privacy</h1>
          <p
            className="text-center col-lg-8 col-12 mt-3"
          >
            First of all: this site is <a href="https://github.com/ferrariofilippo/PersonalWebsite" className="custom-link">open-source</a>.<br />
            <em>ferrariofilippo.vercel.app</em> uses <a href="https://vercel.com/analytics" className="custom-link">Vercel Analytics</a> to collect anonymous data about its users, such as which pages they visit and how much time they spend on them.<br />
            This data is <strong>exclusively used by me</strong> to better understand what I should improve.
          </p>
        </main>
      </div>
    </>
  )
}