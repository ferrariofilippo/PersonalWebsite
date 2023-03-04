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
              className="col-sm-8 col-12 d-flex align-items-center flex-sm-row flex-column mx-sm-0 mx-auto"
            >
              <a
                className="text-muted text-decoration-none"
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
                className="tetx-muted"
              >
                © 2023 Filippo Ferrario
              </span>
            </div>

            <ul
              className="nav col-sm-4 col-12 justify-content-sm-end justify-content-center list-untyled d-flex mx-sm-0 mx-auto mt-sm-0 mt-3">
              <li>
                <a
                  href="https://github.com/ferrariofilippo"
                  className="custom-link text-decoration-none mx-3"
                  style={{ "--color": "#018574", "fontWeight": 600 }}
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ferrariofilippo"
                  className="custom-link text-decoration-none"
                >
                  IN
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
          </div>
        </div>
      </footer>
    </>
  )
}