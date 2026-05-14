import Head from 'next/head';
import Header from '../components/header';
import Image from 'next/image';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';

const projects = [
  {
    id: 'saveapp',
    name: 'SaveApp',
    meta: '2022 – present · Android · Kotlin',
    logo: '/saveapp_logo.png',
    logoAlt: "SaveApp's Logo",
    description: (
      <>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Do you want to track your net-worth from your phone? Are you searching for the{' '}
          <span className="italic">best Android budgeting</span> app?
        </p>
        <p className="font-semibold text-zinc-100 mb-4">SaveApp is what you need.</p>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Developed using Kotlin, SaveApp lets you create expenses, budgets and subscriptions. You
          can also use tags to organize your transactions, and visualize your statistics thanks to
          elegant charts.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          I started working on this application in the last months of 2022 and have been
          maintaining it ever since, fixing bugs and adding features I find useful.{' '}
          <a
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            href="https://saveapp.vercel.app"
          >
            SaveApp&apos;s website →
          </a>
        </p>
      </>
    ),
  },
  {
    id: 'netkit',
    name: 'NetKit',
    meta: '2023 · Android · Kotlin',
    logo: '/netkit_logo.png',
    logoAlt: "NetKit's Logo",
    description: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          Having trouble with routine networking stuff? NetKit is here to help you.
          <br />
          This simple Android application is built to help you with subnetting, IPv6 and ACLs.{' '}
          <a
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            href="https://github.com/ferrariofilippo/NetKit_KT"
          >
            GitHub →
          </a>
        </p>
      </>
    ),
  },
];

export default function Projects() {
  function scrollToFirstProject(e) {
    e.preventDefault();
    document.getElementById('saveapp').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Filippo Ferrario • Projects</title>
        <meta name="description" content="What are the projects developed by Ferrario Filippo?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ferrariofilippo.png" />
      </Head>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center py-24 px-6">
          <p className="font-mono text-xs text-zinc-500 mb-4">// projects</p>
          <h1 className="text-center text-5xl sm:text-6xl font-semibold text-zinc-50 mb-8">
            What I&apos;ve built
          </h1>
          <a
            className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
            href="#saveapp"
            onClick={scrollToFirstProject}
          >
            explore ↓
          </a>
        </main>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div
            key={project.id}
            id={project.id}
            className="min-h-screen flex justify-center border-t border-zinc-800"
          >
            <div className="max-w-5xl w-full mx-auto px-6 flex md:flex-row flex-col items-center py-20 gap-12 justify-evenly">
              <div className="md:w-5/12 w-full flex justify-center">
                <Image
                  width="512"
                  height="512"
                  alt={project.logoAlt}
                  src={project.logo}
                  className="object-scale-down rounded-2xl sm:max-w-[220px] max-w-[140px] ring-1 ring-zinc-800"
                  quality="100"
                  priority={i === 0}
                />
              </div>
              <div className="md:w-7/12 w-full">
                <p className="font-mono text-xs text-zinc-500 mb-3">{project.meta}</p>
                <h2 className="text-left text-4xl sm:text-5xl font-semibold text-zinc-50 mb-6">
                  {project.name}
                </h2>
                {project.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Scroll />
    </>
  );
}
