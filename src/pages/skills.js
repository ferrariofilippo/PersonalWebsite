import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Filippo Ferrario • Skills</title>
        <meta
          name="description"
          content="What are Filippo Ferrario skills?"
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
            className="container my-auto sm:mx-0 mx-1"
          >
            <h1
              className='mt-3 text-center text-purple-600 sm:text-[3.5em] text-5xl font-semibold'
            >
              What are my skills?
            </h1>
          </div>
          <a
            className="underline text-neutral-50 hover:text-purple-600 hover:font-semibold"
            href="#languages"
          >
            Learn more
          </a>
        </main>
      </div>
      <div
        className="flex flex-col"
      >
        <div
          className="min-h-screen flex justify-center border-t border-neutral-700"
          id="languages"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-600 font-semibold sm:text-[3.5em] text-5xl'>
                Languages
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                C#
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                Here it is, the first programming language I've learned.<br />
                I've been working with C# and .NET for four years now, developing desktop, mobile and web apps.
              </p>
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                Python
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I love Python because of its simplicity: it's easy to read and use.<br />
                I use it as a prototyping language: when I need to build some complex algorithms, I
                first build them in Python, check if they work as I expect them to, and then I translate them
                into other languages, such as C#.<br />
              </p>
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                Kotlin
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I fell into this language when I decided to dive into mobile development.<br />
                I love apps, you can find one for every need; if not, there's Kotlin to help you create it.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="devops"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl'>
                DevOps
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-600 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                Git & GitHub
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                Contributing to open-source projects forced me to learn how to use Git and GitHub.
                If I have to be honest, that was one of the best things I could have done.<br />
                Open-source projects give you many opportunities to test yourself and get better at programming.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="database"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-600 font-semibold sm:text-[3.5em] text-5xl'>
                Database
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                MySQL
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I can write queries, but I'm not much into optimization.<br />
                I have a shallow knowledge of administration.
              </p>
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                PostgreSQL
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                This website runs thanks to PostgreSQL. I needed a relational db and Supabase offered it, that's it.<br />
                I struggled a it with the policies, but after some time I learned how to use them.
              </p>
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                MongoDB
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I love it. Sometimes you need to store complex data, but mapping it to a relational db it's not worth the time.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="mobile"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl'>
                Mobile development
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-600 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                Xamarin
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                It has been my way into mobile development, but I'm not currently using it.
                It was very helpful since it made me learn XAML and some basic things, such as event-based programming.
              </p>
              <h1
                className='text-center text-purple-600 font-semibold sm:text-[2.5em] text-xl mb-5 mt-12 sm:mx-0 mx-1'
              >
                Android
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I learned Android development almost entirely by myself, thanks to online documentation.<br />
                Having the necessary knowledge to build your own mobile apps is something that has no price.<br />
                You can develop them as you want, adding whatever feature you need.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="desktop"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-600 font-semibold sm:text-[3.5em] text-5xl'>
                Desktop development
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                WinUI 3
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                Once again, open-source helped me. I learned WinUI 3 while contributing to <a href="https://files.community.com"
                  className="underline hover:font-semibold hover:text-purple-600">Files</a>.<br />
                I've never started a personal project using this framework, but given it works using .NET and
                XAML I think I can use it effectively.
              </p>
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                WinForms
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                Simple yet powerful. I used it to develop an application during a two-week school training.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="web"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <h1 className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl'>
                Web development
              </h1>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-600 font-semibold sm:text-[2.5em] text-xl mb-5 sm:mx-0 mx-1'
              >
                ASP.NET
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I have used it for many school projects.<br />
                Once you learn how to use C# and Visual Studio, you can be super productive and build websites in a few hours.
              </p>
              <h1
                className='text-center text-purple-600 font-semibold sm:text-[2.5em] text-xl mt-12 mb-5 sm:mx-0 mx-1'
              >
                Next.js & Nuxt.js
              </h1>
              <p
                className='sm:mx-0 mx-1'
              >
                I like both, they're my way-to-go when I need to create a website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}
