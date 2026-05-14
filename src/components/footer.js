import Image from 'next/image';

const socialLinks = [
  { href: 'https://github.com/ferrariofilippo', label: 'gh' },
  { href: 'https://www.linkedin.com/in/ferrariofilippo', label: 'li' },
  { href: 'https://stackoverflow.com/users/19737867/filippo-ferrario', label: 'so' },
  { href: 'mailto:ferrario.filippo.dev@gmail.com', label: 'em' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between items-start gap-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <a href="/" aria-label="Home">
                <Image
                  alt="Ferrario Filippo"
                  src="/ferrariofilippo.png"
                  height="20"
                  width="20"
                  quality="50"
                  className="rounded-full"
                />
              </a>
              <span className="font-mono text-xs text-zinc-500">
                © {year} Filippo Ferrario
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <a
                className="font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                href="https://github.com/ferrariofilippo/PersonalWebsite"
              >
                source
              </a>
              <span className="text-zinc-700">·</span>
              <a
                className="font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                href="/privacy"
              >
                privacy
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <ul className="flex gap-5">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-mono text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs text-zinc-600">
              vercel · tailwind · next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
