import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <div
          className="container"
        >
          <div
            className="d-flex flex-wrap justify-content-center py-3"
          >
            <a
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none custom-link navbar-brand"
              href="/"
            >
              <Image
                alt="Filippo Ferrario"
                src="/ferrariofilippo.png"
                width="36"
                height="36"
                className="rounded-4 mx-3"
              />
              <span
                className="navbar-brand"
              >
                Filippo Ferrario
              </span>
            </a>

            <ul
              className="nav nav-pills justify-content-evenly"
            >
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link custom-link"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link custom-link"
                  href="/now"
                >
                  Now
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link custom-link"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="nav-link custom-link"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
              <li
                className="d-flex align-items-center m-1"
              >
                <a
                  className="custom-link"
                  title="Government of Ukraine, Public domain, via Wikimedia Commons"
                  href="https://commons.wikimedia.org/wiki/File:Flag_of_Ukraine.svg"
                >
                  <Image
                    width="48"
                    height="32"
                    alt="Flag of Ukraine"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/512px-Flag_of_Ukraine.svg.png"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}