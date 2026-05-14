import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/now', label: 'Now' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
];

export default function Header() {
  function onHeaderLoad() {
    const bannerHidden = sessionStorage.getItem('cookiesBannerHidden');
    if (bannerHidden === null || bannerHidden == false) {
      const banner = document.getElementById('cookieBanner');
      banner.classList.remove('hidden');
    }
  }

  function closeCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    banner.classList.add('hidden');
    sessionStorage.setItem('cookiesBannerHidden', true);
  }

  return (
    <header onLoad={onHeaderLoad} className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div
        id="cookieBanner"
        className="hidden bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex justify-between items-center"
      >
        <span className="text-xs font-mono text-zinc-400">
          This website uses analytical cookies.{' '}
          <a href="/privacy" className="text-zinc-200 hover:text-white underline underline-offset-2 transition-colors">
            See Policy
          </a>
        </span>
        <button
          id="close_cookie_button"
          aria-label="Close banner"
          type="button"
          onClick={closeCookieBanner}
          className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
        >
          <span className="material-symbols-outlined text-base align-middle">close</span>
        </button>
      </div>
      <div
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
        id="header-title"
      >
        <a href="/" className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          ~/ferrario
        </a>
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
