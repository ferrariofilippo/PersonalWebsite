import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';

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
              className='text-center text-purple-600 font-semibold sm:text-[3.5em] text-4xl sm:mx-0 mx-3 leading-[1em]'
            >
              Discover my side projects...
            </h1>
          </div>
          <a
            className="underline text-neutral-300 hover:text-purple-600 hover:font-semibold"
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
          className="min-h-screen flex justify-center border-t border-neutral-800"
          id="saveapp"
        >
          <div
            className="container sm:mx-auto mx-2 flex md:flex-row flex flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex flex-col items-center"
            >
              <Image
                width="256"
                height="256"
                alt="SaveApp's Logo"
                src="/saveapp_logo.png"
                className="object-scale-down rounded-full max-w-[128px] sm:max-w-[192px] shadow-lg shadow-purple-600/60"
                quality='100'
                priority
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2 mx-4"
            >
              <h1
                className='text-center text-purple-400 mb-5 font-semibold sm:text-[3em] text-5xl'
              >
                SaveApp
              </h1>
              <p>
                Do you want to track your net-worth from your phone? Are you searching for the <span className='italic'>best Android budgeting</span> app?<br />
              </p>
              <span className='font-semibold text-xl mt-5 mb-8'>
                SaveApp is what you need!
              </span>
              <p className='mt-4'>
                Developed using Kotlin, SaveApp lets you create expenses, budgets and subscriptions. You can also use tags to organize your transactions, and visualize your statistics thanks to elegant charts.<br />
              </p>
              <p className='mt-4'>
                I started working on this application in the last months of 2022 and have been maintaining it ever since, fixing bugs and adding features I find useful.<br />
                Find out more at <a className="text-neutral-50 underline hover:font-semibold hover:text-purple-600" href="https://saveapp.vercel.app">SaveApp's website</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="netkit">
          <div
            className="container sm:mx-auto mx-2 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex flex-col items-center"
            >
              <Image
                width="256"
                height="256"
                alt="NetKit's Logo"
                src="/netkit_logo.png"
                className="object-scale-down rounded-full max-w-[128px] sm:max-w-[192px] shadow-lg shadow-purple-600/60"
                quality='100'
                priority
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2 mx-4"
            >
              <h1
                className='text-center text-purple-400 mb-5 font-semibold sm:text-[3em] text-5xl'
              >
                NetKit
              </h1>
              <p>
                Having trouble with routine networking stuff? NetKit is here to help you!<br />
                This simple Android application is built to help you with subnetting, IPv6 and ACLs.<br />
                See <a className="text-neutral-50 underline hover:font-semibold hover:text-purple-600" href="https://github.com/ferrariofilippo/NetKit_KT">GitHub</a> repository to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}
