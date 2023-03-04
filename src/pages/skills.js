import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';
import styles from '../styles/Skills.module.css';

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
        className="main-content container"
      >
        <Header />
        <main
          className="d-flex flex-column align-items-center justify-content-between"
        >
          <div
            className="container my-auto"
          >
            <h2>Everything fine, but let's come to facts...</h2>
            <h1
              className="mt-3"
            >
              What are my skills?
            </h1>
          </div>
          <a
            className="custom-link"
            href="#c-sharp"
          >
            Learn more
          </a>
        </main>
      </div>
      <div
        className="d-flex flex-column"
      >
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.cSharp}`}
          id="c-sharp"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
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
                  className="img-fluid logo"
                />
              </a>
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>C#</h1>
              <p>
                Here it is, the first programming language I've learned.<br />
                I've been using C# and .NET for three years now. I love it. It's not difficult to learn but it's
                very powerful and adaptive: you can basically build whatever you need.<br />
                If you check out my
                <a href="https://github-com/ferrariofilippo" className="custom-link">GitHub</a>, you will see that
                almost all the projects I pushed there are developed using this language.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.python}`}
          id="python"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
            >
              <Image
                width="256"
                height="256"
                alt="python"
                src="/python-logo.svg"
                className="img-fluid logo"
              />
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>Python</h1>
              <p>
                Is there still anyone who doesn't know Python?<br />
                I love Python because of its simplicity: it's easy to read and use.<br />
                I use it as a prototyping language: I mean, when I need to build some complex algorithms, I
                first build them in Python, check if they work as I expect them to and then I translate them
                into other languages, usually C#.<br />
                I know this way I have to work twice, but when I need to get things done fast I prefer Python.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.git}`}
          id="git"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
            >
              <Image
                width="256"
                height="256"
                alt="git"
                src="/git-logo.svg"
                className="img-fluid logo"
              />
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>Git</h1>
              <p>
                Contributing to open-source projects forced me to learn how to use Git and GitHub. If I have to
                be honest, that was one of the best things I could have done.<br />
                Open-source projects give you many opportunities to test yourself and get better at programming.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.winUi}`}
          id="win-ui"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
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
                  className="logo img-fluid"
                />
              </a>
            </div>
            <div
              className="col-md-6 col-12 text-center"
            >
              <h1>WinUI 3</h1>
              <p>
                Once again, open-source helped me. I learned WinUI 3 while contributing to
                <a href="https://files.community.com" className="custom-link">Files</a>.<br />
                I've never started a personal project using this framework, but given it works using .NET and
                XAML I can use it efficiently.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.android}`}
          id="android"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
            >
              <Image
                width="256"
                height="256"
                alt="android"
                src="/android-logo.svg"
                className="img-fluid logo"
              />
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>Android</h1>
              <p>
                I learned Android development almost entirely by myself, thanks to online documentation and
                obviously to StackOverflow.<br />
                Having the necessary knowledge to build your own mobile apps is something that has no price.<br />
                You can develop them as you want, adding whatever you need without needing to wait for a new
                release.<br />
                I first started developing Android apps using Xamarin and .NET. At the moment, I am trying to
                learn <a href="/now" className="custom-link">Kotlin</a> to have a complete experience.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`min-vh-100 d-flex justify-content-center ${styles.docker}`}
          id="docker"
        >
          <div
            className="container d-flex flex-md-row flex-column align-items-center py-5 justify-content-evenly"
          >
            <div
              className="col-md-6 col-12 d-flex justify-content-center"
            >
              <Image
                width="256"
                height="256"
                alt="docker"
                src="/docker-logo.png"
                className="img-fluid"
              />
            </div>
            <div
              className="col-md-6 col-12 text-center mt-md-0 mt-2"
            >
              <h1>Docker</h1>
              <p>
                I learned how to use Docker at school. Honestly, in the beginning, I hated it, because of the
                length of some parameter lists.<br />
                But now that I've learnt how to use and exploit it, I think it's really useful and not that
                difficult to use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  )
}