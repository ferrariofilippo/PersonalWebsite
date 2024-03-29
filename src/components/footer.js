import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer
        className="mt-auto border-t border-neutral-900"
      >
        <div
          className="container mx-auto"
        >
          <div
            className="flex flex-wrap justify-between align-center py-3 mt-1"
          >
            <div
              className="sm:w-2/3 w-full flex flex-col mb-auto"
            >
              <div
                className="flex items-center sm:flex-row flex-col sm:mx-0 mx-auto sm:gap-y-0 gap-y-2"
              >
                <a
                  className="no-underline"
                  href="/"
                >
                  <Image
                    alt="Ferrario Filippo"
                    src="/ferrariofilippo.png"
                    height="32"
                    width="32"
                    quality="50"
                    className="rounded-full mx-3"
                  />
                </a>
                <span
                  className="text-neutral-500 my-auto text-sm-start text-center"
                >
                  © 2024 Filippo Ferrario
                </span>
              </div>
              <div
                className="mx-3 mt-1 flex flex-row sm:justify-start justify-center"
              >
                <a
                  className="text-sm text-neutral-200 my-auto hover:text-purple-600 hover:font-semibold"
                  href="https://github.com/ferrariofilippo/PersonalWebsite"
                >
                  Code
                </a>
                <span
                  className="mx-2 text-neutral-200"
                >
                  |
                </span>
                <a
                  className="text-sm text-neutral-200 my-auto hover:text-purple-600 hover:font-semibold"
                  href="/privacy"
                >
                  Privacy
                </a>
              </div>
            </div>

            <div
              className="sm:w-1/3 w-full flex flex-col"
            >
              <ul
                className="nav sm:justify-end justify-center list-none flex sm:mx-0 mx-auto sm:mt-0 mt-3"
              >
                <li>
                  <a
                    href="https://github.com/ferrariofilippo"
                    className="font-semibold text-purple-400 hover:text-purple-600"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ferrariofilippo"
                    className="hover:text-purple-600 hover:font-semibold no-underline mx-3"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/19737867/filippo-ferrario"
                    className="hover:text-purple-600 hover:font-semibold no-underline"
                  >
                    SO
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ferrario.filippo.dev@gmail.com"
                    className="hover:text-purple-600 hover:font-semibold no-underline mx-3"
                  >
                    EM
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/fferrario4"
                    className="hover:text-purple-600 hover:font-semibold no-underline me-3"
                  >
                    X
                  </a>
                </li>
              </ul>

              <div
                className="flex flex-col sm:text-end text-center mx-3"
              >
                <span
                  className="mt-3 mb-0 text-sm text-neutral-500"
                >
                  Credits
                </span>
                <a
                  className="text-sm text-purple-400 my-auto hover:text-purple-600 hover:font-semibold"
                  href="https://vercel.com/"
                >
                  Powered by Vercel
                </a>
                <div
                  className="flex flex-row sm:justify-end justify-center"
                >
                  <a
                    className="text-sm text-neutral-200 my-auto hover:text-purple-600 hover:font-semibold"
                    href="https://tailwindcss.com"
                  >
                    Tailwind
                  </a>
                  <span
                    className="text-neutral-200 text-sm mx-2"
                  >
                    |
                  </span>
                  <a
                    className="text-sm text-neutral-200 my-auto hover:text-purple-600 hover:font-semibold"
                    href="https://fonts.google.com/"
                  >
                    Google Fonts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
