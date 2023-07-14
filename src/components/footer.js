import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer
        className="mt-auto"
      >
        <div
          className="container"
        >
          <div
            className="d-flex flex-wrap justify-content-between align-items-center border-top py-3 mt-3 border-top"
          >
            <div
              className="col-sm-8 col-12 d-flex flex-column mb-auto"
            >
              <div
                className="d-flex align-items-center flex-sm-row flex-column mx-sm-0 mx-auto"
              >
                <a
                  className="text-decoration-none"
                  href="/"
                >
                  <Image
                    alt="Ferrario Filippo"
                    src="/ferrariofilippo.png"
                    height="32"
                    width="32"
                    className="rounded-4 mx-3"
                  />
                </a>
                <span
                  className="text-muted"
                >
                  © 2023 Filippo Ferrario
                </span>
              </div>
              <div
                className="mx-3 mt-1 d-flex flex-row justify-content-sm-start justify-content-center align-items-center"
              >
                <a
                  className="custom-link font-small text-muted"
                  href="https://github.com/ferrariofilippo/PersonalWebsite"
                >
                  Code
                </a>
                <span
                  className="mx-2 text-muted"
                >
                  |
                </span>
                <a
                  className="custom-link font-small text-muted"
                  href="/privacy"
                >
                  Privacy
                </a>
              </div>
            </div>

            <div
              className="col-sm-4 col-12 d-flex flex-column"
            >
              <ul
                className="nav  justify-content-sm-end justify-content-center list-untyled d-flex mx-sm-0 mx-auto mt-sm-0 mt-3"
              >
                <li>
                  <a
                    href="https://github.com/ferrariofilippo"
                    className="custom-link text-decoration-none"
                    style={{ "--color": "#018574", "fontWeight": 600 }}
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ferrariofilippo"
                    className="custom-link text-decoration-none mx-3"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/19737867/filippo-ferrario"
                    className="custom-link text-decoration-none"
                  >
                    SO
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/fferrario4"
                    className="custom-link text-decoration-none mx-3"
                  >
                    TW
                  </a>
                </li>
              </ul>

              <div
                className="d-flex flex-column text-sm-end text-center mx-3"
              >
                <h6
                  className="mt-3 mb-0"
                >
                  Credits
                </h6>
                <a
                  className="custom-link font-small"
                  href="https://vercel.com/"
                  style={{ "--color": "#018574", "fontWeight": 600 }}
                >
                  Powered by Vercel
                </a>
                <div
                  className="d-flex flex-row justify-content-sm-end justify-content-center"
                >

                  <a
                    className="custom-link font-small text-muted"
                    href="https://getbootstrap.com/"
                  >
                    Bootstrap
                  </a>
                  <span
                    className="text-muted font-small mx-2"
                  >
                    |
                  </span>
                  <a
                    className="custom-link font-small text-muted"
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
