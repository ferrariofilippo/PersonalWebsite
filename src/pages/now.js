import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import styles from '../styles/Now.module.css';

export default function Now() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Now</title>
        <meta
          name="description"
          content="What is Filippo Ferrario doing now?"
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
          <h1>What am I doing right now?</h1>
          <div
            className="col-12 d-flex flex-column align-items-center my-auto"
          >
            <div
              className="col-12 my-2"
            >
              <div
                className="col-md-6 col-lg-4"
              >
                <div
                  className="d-flex flex-row justify-content-center mb-2"
                >
                  <span
                    className={`material-symbols-outlined ${styles.icon}`}
                  >
                    school
                  </span>
                  <h3
                    className={`my-auto ${styles.subtitle}`}
                  >
                    Learning
                  </h3>
                </div>
                <ul>
                  <li>
                    <Image
                      width="128"
                      height="128"
                      alt="Rust logo"
                      src="/rust-logo.png"
                      className={styles.logo}
                    />
                    <a
                      href="https://www.rust-lang.org/"
                      className="custom-link"
                    >
                      Rust Lang
                    </a>
                  </li>
                  <li>
                    <Image
                      width="128"
                      height="128"
                      alt="Rust logo"
                      src="/kotlin-logo.svg"
                      className={styles.logo}
                    />
                    <a
                      href="https://kotlinlang.org/"
                      className="custom-link"
                    >
                      Kotlin Lang
                    </a>
                  </li>
                  <li>
                    <a
                      title="User:SKopp, User:Madden, and other users, Public domain, via Wikimedia Commons"
                      href="https://commons.wikimedia.org/wiki/File:Flag_of_Germany.svg"
                      className="custom-link">
                      <Image
                        width="128"
                        height="128"
                        className={styles.logo}
                        alt="Flag of Germany"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/512px-Flag_of_Germany.svg.png"
                      />
                      German
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-12 row my-2">
              <div
                className="col-md-2 col-lg-4 col-0"
              />
              <div
                className="col-md-6 col-lg-4"
              >
                <div
                  className="d-flex flex-row justify-content-center mb-2"
                >
                  <span
                    className={`material-symbols-outlined ${styles.icon}`}
                  >
                    terminal
                  </span>
                  <h3
                    className={`my-auto ${styles.subtitle}`}
                  >
                    Contributing
                  </h3>
                </div>
                <ul>
                  <li>
                    <a
                      href="https://files.community/"
                      className="custom-link"
                    >
                      Files community
                    </a> (Developer and Translator)
                  </li>
                  <li>
                    <a
                      href="https://github.com/ferrariofilippo/saveapp"
                      className="custom-link"
                    >
                      SaveApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-12 row my-2"
            >
              <div
                className="col-md-6 col-lg-8 col-0"
              />
              <div
                className="col-md-6 col-lg-4"
              >
                <div
                  className="d-flex flex-row justify-content-center mb-2"
                >
                  <span
                    className={`material-symbols-outlined ${styles.icon}`}
                  >
                    library_books
                  </span>
                  <h3
                    className={`my-auto ${styles.subtitle}`}
                  >
                    Reading
                  </h3>
                </div>
                <ul>
                  <li>
                    The Silmarillion, J.R.R. Tolkien
                  </li>
                  <li>
                    The Art of Statistics, David Spiegelhalter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}