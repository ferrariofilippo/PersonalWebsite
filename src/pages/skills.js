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
            href="#c-sharp"
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
          id="c-sharp"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <a
                title="Andres15alvarez, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:Csharp_Logo.png"
                className="custom-link"
              >
                <Image
                  width="256"
                  height="256"
                  alt="Csharp Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                  className="object-scale-down logo"
                />
              </a>
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                C#
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                Here it is, the first programming language I've learned.<br />
                I've been using C# and .NET for three years now. I love it. It's not difficult to learn but it's
                very powerful and adaptive: you can basically build whatever you need.<br />
                If you check out my <a href="https://github-com/ferrariofilippo" className="underline hover:font-semibold hover:text-purple-600">GitHub</a>, 
                you will find all my C# projects.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="python"
        >
          <div
            className="sm:mx-auto mx-1 container flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <Image
                width="256"
                height="256"
                alt="python"
                src="/python-logo.svg"
                className="object-scale-down logo"
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                Python
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                I love Python because of its simplicity: it's easy to read and use.<br />
                I use it as a prototyping language: I mean, when I need to build some complex algorithms, I
                first build them in Python, check if they work as I expect them to, and then I translate them
                into other languages, such as C#.<br />
                I know this way I have to work twice, but when I need to get things done fast I prefer Python.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="git"
        >
          <div
            className="sm:mx-auto mx-1 container flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <Image
                width="256"
                height="256"
                alt="git"
                src="/git-logo.svg"
                className="object-scale-down logo"
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                Git
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                Contributing to open-source projects forced me to learn how to use Git and GitHub. If I have to
                be honest, that was one of the best things I could have done.<br />
                Open-source projects give you many opportunities to test yourself and get better at programming.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="win-ui"
        >
          <div
            className="sm:mx-auto mx-1 container flex md:flex-row flex-col items-center justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <a
                title="Microsoft, MIT &lt;http://opensource.org/licenses/mit-license.php&gt;, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:Logo-winui.svg"
                className="custom-link"
              >
                <Image
                  width="256"
                  height="256"
                  alt="Logo-winui"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo-winui.svg/256px-Logo-winui.svg.png"
                  className="logo object-scale-down"
                />
              </a>
            </div>
            <div
              className="md:w-1/2 w-full text-center"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                WinUI 3
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                Once again, open-source helped me. I learned WinUI 3 while contributing to <a href="https://files.community.com"
                  className="underline hover:font-semibold hover:text-purple-600">Files</a>.<br />
                I've never started a personal project using this framework, but given it works using .NET and
                XAML I think I can use it efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="android"
        >
          <div
            className="sm:mx-auto mx-1 container flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <Image
                width="256"
                height="256"
                alt="android"
                src="/android-logo.svg"
                className="object-scale-down logo"
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                Android
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                I learned Android development almost entirely by myself, thanks to online documentation.<br />
                Having the necessary knowledge to build your own mobile apps is something that has no price.<br />
                You can develop them as you want, adding whatever feature you need.<br />
                I first started developing Android apps using Xamarin. At the moment, I am trying to
                learn <a href="/now" className="underline hover:font-semibold hover:text-purple-600">Kotlin</a> to access the latest APIs.
              </p>
            </div>
          </div>
        </div>
        <div className="divider container"></div>
        <div
          className="min-h-screen flex justify-center"
          id="docker"
        >
          <div
            className="container sm:mx-auto mx-1 flex md:flex-row flex-col items-center py-5 justify-evenly"
          >
            <div
              className="md:w-1/2 w-full flex justify-center"
            >
              <Image
                width="256"
                height="256"
                alt="docker"
                src="/docker-logo.png"
                className="object-scale-down"
              />
            </div>
            <div
              className="md:w-1/2 w-full text-center md:mt-0 mt-2"
            >
              <h1
                className='text-center text-purple-400 font-semibold sm:text-[3.5em] text-5xl mb-5 mx-sm-0 mx-1'
              >
                Docker
              </h1>
              <p
                className='mx-sm-0 mx-1'
              >
                I learned how to use Docker in school. Honestly, in the beginning, I hated it, because of the
                length of some parameter lists.<br />
                Only now, I see how useful it is.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}
