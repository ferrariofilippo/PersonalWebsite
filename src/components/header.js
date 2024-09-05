import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  function onHeaderLoad() {
    const bannerHidden = sessionStorage.getItem('cookiesBannerHidden');
    if (bannerHidden === null || bannerHidden == false) {
      const banner = document.getElementById('cookieBanner');
      banner.classList.remove('hidden');
    }
  }

  function closeCookieBanner() {
    console.log('clicked')
    const banner = document.getElementById('cookieBanner');
    banner.classList.add('hidden');
    sessionStorage.setItem('cookiesBannerHidden', true);
  }

  return (
    <>
      <header onLoad={onHeaderLoad}>
        <div
          id="cookieBanner"
          className="hidden flex dark:bg-neutral-800 border-b-2 border-neutral-600 text-sm justify-between text sm:px-2 px-1"
        >
          <span className="my-auto">
            This website uses analytical cookies.
            <a
              id="go_to_privacy"
              aria-label="See cookie policy"
              href="/privacy"
              className="hover:text-purple-600 my-auto p-1 "
            >
              See Policy
            </a>
          </span>
          <button
            id="close_cookie_button"
            aria-label="Close banner"
            type="button"
            onClick={closeCookieBanner}
            className="hover:text-secondary my-auto p-1"
          >
            <span
              className="material-symbols-outlined align-middle hover:text-purple-600"
              id="closeBanner"
            >
              close
            </span>
          </button>
        </div>
        <div
          className="mx-1 flex flex-col items-center py-3 gap-y-2"
          id="header-title"
        >
          <a
            className="link font-semibold text-xl text-center"
            href="/"
          >
            FILIPPO FERRARIO
          </a>
          <ul
            className="flex gap-x-2 gap-y-3 justify-evenly flex-wrap"
          >
            <li
              className="border border-neutral-500 rounded-2xl hover:text-purple-600 hover:border-purple-600 hover:font-semibold nav-link"
            >
              <Link
                className="p-1 px-3 flex align-middle"
                href="/"
              >
                <span className="me-2 py-0 -mt-[0.05rem] plus-sign">+</span>
                Home
              </Link>
            </li>
            <li
              className="border border-neutral-500 rounded-2xl hover:text-purple-600 hover:border-purple-600 hover:font-semibold nav-link"
            >
              <Link
                className="p-1 px-3 flex align-middle"
                href="/now"
              >
                <span className="me-2 py-0 -mt-[0.05rem] plus-sign">+</span>
                Now
              </Link>
            </li>
            <li
              className="border border-neutral-500 rounded-2xl hover:text-purple-600 hover:border-purple-600 hover:font-semibold nav-link"
            >
              <Link
                className="p-1 px-3 flex align-middle"
                href="/projects"
              >
                <span className="me-2 py-0 -mt-[0.05rem] plus-sign">+</span>
                Projects
              </Link>
            </li>
            <li
              className="border border-neutral-500 rounded-2xl hover:text-purple-600 hover:border-purple-600 hover:font-semibold nav-link"
            >
              <Link
                className="p-1 px-3 flex align-middle"
                href="/skills"
              >
                <span className="me-2 py-0 -mt-[0.05rem] plus-sign">+</span>
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
