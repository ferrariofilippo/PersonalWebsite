import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
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
        className="min-h-screen container mx-auto sm:mb-0 mb-5"
      >
        <Header />
        <main
          className="flex flex-col items-center justify-between"
        >
          <div
            className="container my-auto"
          >
            <h1
              className='text-center text-[#ACFCD9] sm:text-[3.5em] text-5xl'
            >
              What have I developed in my free-time?
            </h1>
          </div>
          <a
            className="underline text-neutral-50 hover:text-[#ACFCD9] hover:font-semibold"
            href="#saveapp"
          >
            Learn more
          </a>
        </main>
      </div>
      <div
        className="flex flex-col"
      >
        <div
          className={`min-h-screen flex justify-center ${styles.saveapp}`}
          id="saveapp"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex flex-col items-center"
            >
              <Image
                width="256"
                height="256"
                alt="SaveApp Logo"
                src="/saveapp_logo.png"
                className="object-scale-down rounded-full max-w-[128px]"
              />
              {/* <span
                className={styles.workInProgress}
              >
                Logo
              </span>
              <span
                className="text-[2.5em] font-semibold text-center"
              >
                Work In Progress
              </span>
              <span
                className="text-center"
              >
                (actually not)
              </span> */}
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-[#ACFCD9] sm:text-[3.5em] text-5xl'
              >
                SaveApp
              </h1>
              <p>
                Do you want to track your net-worth from your phone? SaveApp is what you need!<br />
                Developed using C# and Xamarin.Forms, SaveApp supports simple expenses, budgets and
                subscriptions.<br />
                It lets you visualize your statistics thanks to elegant charts.<br />
                Do you want to know more? See <a className="text-neutral-50 underline hover:font-semibold hover:text-[#ACFCD9]" href="https://github.com/ferrariofilippo/SaveApp">GitHub</a> repository.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-h-screen flex justify-center ${styles.netkit}`}
          id="netkit">
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex flex-col items-center"
            >
              <span
                className={styles.workInProgress}
              >
                Logo
              </span>
              <span
                className="text-[2.5em] font-semibold text-center"
              >
                Work In Progress
              </span>
              <span
                className="text-center">
                (actually not)
              </span>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-[#ACFCD9] sm:text-[3.5em] text-5xl'
              >
                NetKit
              </h1>
              <p>
                Having trouble with routine networking stuff? NetKit is here to help you!<br />
                This simple Xamarin.Forms Android application is built to help you with subnetting, IPv6 and
                ACLs.<br />
                See <a className="text-neutral-50 underline hover:font-semibold hover:text-[#ACFCD9]" href="https://github.com/ferrariofilippo/NetKit">GitHub</a> repository to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}
