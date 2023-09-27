import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer
        className="mt-auto bg-neutral-800"
      >
        <div
          className="container mx-auto pt-1"
        >
          <div
            className="flex flex-wrap justify-between align-center border-t py-3 mt-3"
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
                    className="rounded-full mx-3"
                  />
                </a>
                <span
                  className="text-neutral-50 my-auto"
                >
                  © 2023 Filippo Ferrario
                </span>
              </div>
              <div
                className="mx-3 mt-1 flex flex-row sm:justify-start justify-center"
              >
                <a
                  className="no-underline text-sm text-neutral-50 my-auto hover:text-[#ACFCD9] hover:font-semibold"
                  href="https://github.com/ferrariofilippo/PersonalWebsite"
                >
                  Code
                </a>
                <span
                  className="mx-2 text-neutral-50"
                >
                  |
                </span>
                <a
                  className="text-sm text-neutral-50 my-auto hover:text-[#ACFCD9] hover:font-semibold"
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
                    className="hover:text-[#ACFCD9] font-semibold no-underline text-teal-500"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ferrariofilippo"
                    className="hover:text-[#ACFCD9] hover:font-semibold no-underline mx-3"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/19737867/filippo-ferrario"
                    className="hover:text-[#ACFCD9] hover:font-semibold no-underline"
                  >
                    SO
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/fferrario4"
                    className="hover:text-[#ACFCD9] hover:font-semibold no-underline mx-3"
                  >
                    X
                  </a>
                </li>
              </ul>

              <div
                className="flex flex-col sm:text-end text-center mx-3"
              >
                <h6
                  className="mt-3 mb-0"
                >
                  Credits
                </h6>
                <a
                  className="hover:text-[#ACFCD9] hover:font-semibold text-teal-500 text-sm font-semibold"
                  href="https://vercel.com/"
                >
                  Powered by Vercel
                </a>
                <div
                  className="flex flex-row sm:justify-end justify-center"
                >
                  <a
                    className="hover:text-[#ACFCD9] hover:font-semibold text-sm text-neutral-50"
                    href="https://tailwindcss.com"
                  >
                    Tailwind
                  </a>
                  <span
                    className="text-neutral-50 text-sm mx-2"
                  >
                    |
                  </span>
                  <a
                    className="hover:text-[#ACFCD9] hover:font-semibold text-sm text-neutral-50"
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
