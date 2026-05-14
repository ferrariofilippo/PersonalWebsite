import Head from 'next/head';
import Header from '../components/header';
import Scroll from '../components/scroll';
import ScrollToTop from '../components/scrollToTop';

const skillSections = [
  {
    id: 'languages',
    category: 'Languages',
    skills: [
      {
        name: 'C#',
        body: "Here it is, the first programming language I've learned. I've been working with C# and .NET for four years now, developing desktop, mobile and web apps.",
      },
      {
        name: 'Python',
        body: "I love Python because of its simplicity: it's easy to read and use. I use it as a prototyping language: when I need to build some complex algorithms, I first build them in Python, check if they work as I expect them to, and then I translate them into other languages, such as C#.",
      },
      {
        name: 'Kotlin',
        body: 'I fell into this language when I decided to dive into mobile development. I love apps, you can find one for every need; if not, there\'s Kotlin to help you create it.',
      },
    ],
  },
  {
    id: 'devops',
    category: 'DevOps',
    skills: [
      {
        name: 'Git & GitHub',
        body: 'Contributing to open-source projects forced me to learn how to use Git and GitHub. If I have to be honest, that was one of the best things I could have done. Open-source projects give you many opportunities to test yourself and get better at programming.',
      },
    ],
  },
  {
    id: 'database',
    category: 'Database',
    skills: [
      {
        name: 'MySQL',
        body: "I can write queries, but I'm not much into optimization. I have a shallow knowledge of administration.",
      },
      {
        name: 'PostgreSQL',
        body: "This website runs thanks to PostgreSQL. I needed a relational db and Supabase offered it, that's it. I struggled a bit with the policies, but after some time I learned how to use them.",
      },
      {
        name: 'MongoDB',
        body: "I love it. Sometimes you need to store complex data, but mapping it to a relational db it's not worth the time.",
      },
    ],
  },
  {
    id: 'mobile',
    category: 'Mobile',
    skills: [
      {
        name: 'Xamarin',
        body: 'It has been my way into mobile development, but I\'m not currently using it. It was very helpful since it made me learn XAML and some basic things, such as event-based programming.',
      },
      {
        name: 'Android',
        body: 'I learned Android development almost entirely by myself, thanks to online documentation. Having the necessary knowledge to build your own mobile apps is something that has no price. You can develop them as you want, adding whatever feature you need.',
      },
    ],
  },
  {
    id: 'desktop',
    category: 'Desktop',
    skills: [
      {
        name: 'WinUI 3',
        body: (
          <>
            Once again, open-source helped me. I learned WinUI 3 while contributing to{' '}
            <a
              href="https://files.community.com"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            >
              Files
            </a>
            . I&apos;ve never started a personal project using this framework, but given it works
            using .NET and XAML I think I can use it effectively.
          </>
        ),
      },
      {
        name: 'WinForms',
        body: 'Simple yet powerful. I used it to develop an application during a two-week school training.',
      },
    ],
  },
  {
    id: 'web',
    category: 'Web',
    skills: [
      {
        name: 'ASP.NET',
        body: "I have used it for many school projects. Once you learn how to use C# and Visual Studio, you can be super productive and build websites in a few hours.",
      },
      {
        name: 'Next.js & Nuxt.js',
        body: "I like both, they're my way-to-go when I need to create a website.",
      },
    ],
  },
];

export default function Skills() {
  function scrollToFirst(e) {
    e.preventDefault();
    document.getElementById('languages').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Filippo Ferrario • Skills</title>
        <meta name="description" content="What are Filippo Ferrario skills?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ferrariofilippo.png" />
      </Head>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center py-24 px-6">
          <p className="font-mono text-xs text-zinc-500 mb-4">// skills</p>
          <h1 className="text-center text-5xl sm:text-6xl font-semibold text-zinc-50 mb-8">
            What can I do?
          </h1>
          <a
            className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
            href="#languages"
            onClick={scrollToFirst}
          >
            explore ↓
          </a>
        </main>
      </div>

      <div className="flex flex-col">
        {skillSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="min-h-screen flex justify-center border-t border-zinc-800"
          >
            <div className="max-w-5xl w-full mx-auto px-6 flex md:flex-row flex-col items-start py-20 gap-12">
              <div className="md:w-1/3 w-full md:sticky md:top-24">
                <p className="font-mono text-xs text-zinc-500 mb-2">// {section.id}</p>
                <h2 className="text-left text-3xl font-semibold text-zinc-50">
                  {section.category}
                </h2>
              </div>
              <div className="md:w-2/3 w-full flex flex-col gap-10">
                {section.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm font-medium text-violet-400 border border-violet-400/30 bg-violet-400/5 rounded px-2 py-0.5">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{skill.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Scroll />
    </>
  );
}
