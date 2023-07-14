import Head from 'next/head';
import Header from '../components/header';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Projects</title>
        <meta
          name="description"
          content="What are the projects developed by Ferrario Filippo?"
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
      <ScrollToTop />
      <div
        className="main-content container"
      >
        <Header />
        <main
          className="d-flex flex-column align-items-center justify-content-between"
        >
          <div
            className="container my-auto"
          >
            <h1 className="text-center">
              What have I developed in my free-time?
            </h1>
          </div>
          <a
            className="custom-link"
            href="#saveapp"
          >
            Learn more
          </a>
        </main>
      </div>
      <div
        className="d-flex flex-column"
      >
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.saveapp}`}
          id="saveapp"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex flex-column align-items-center"
            >
              <span
                className={styles.workInProgress}
              >
                Logo
              </span>
              <span
                className="work-in-progress text-center"
              >
                Work In Progress
              </span>
              <span
                className="text-center"
              >
                (actually not)
              </span>
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>
                SaveApp
              </h1>
              <p>
                Do you want to track your net-worth from your phone? SaveApp is what you need!<br />
                Developed using C# and Xamarin.Forms, SaveApp supports simple expenses, budgets and
                subscriptions.<br />
                It lets you visualize your statistics thanks to elegant charts.<br />
                Do you want to know more? See <a className="custom-link" href="https://github.com/ferrariofilippo/SaveApp">GitHub</a> repository.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.netkit}`}
          id="netkit">
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex flex-column align-items-center"
            >
              <span
                className={styles.workInProgress}
              >
                Logo
              </span>
              <span
                className="work-in-progress text-center"
              >
                Work In Progress
              </span>
              <span
                className="text-center">
                (actually not)
              </span>
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>
                NetKit
              </h1>
              <p>
                Having trouble with routine networking stuff? NetKit is here to help you!<br />
                This simple Xamarin.Forms Android application is built to help you with subnetting, IPv6 and
                ACLs.<br />
                See <a className="custom-link" href="https://github.com/ferrariofilippo/NetKit">GitHub</a> repository to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}
