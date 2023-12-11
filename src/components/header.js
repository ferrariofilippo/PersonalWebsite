import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <div
          className="container mx-auto"
        >
          <div
            className="flex flex-wrap justify-center py-3"
          >
            <a
              className="flex align-middle mb-3 md:mb-0 md:me-auto hover:text-purple-600"
              href="/"
            >
              <Image
                alt="Logo"
                src="/ferrariofilippo.png"
                width="40"
                height="40"
                className="rounded-full mx-3 h-8 w-8 my-auto"
              />
              <span
                className="my-auto font-semibold text-xl"
              >
                Filippo Ferrario
              </span>
            </a>
            <ul
              className="flex gap-x-1 justify-evenly flex-wrap"
            >
              <li
                className="nav-item"
              >
                <Link
                  className="p-1 px-3 flex align-middle"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-1 px-3 flex align-middle"
                  href="/now"
                >
                  Now
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-1 px-3 flex align-middle"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-1 px-3 flex align-middle"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
              <li
                className="m-1"
              >
                <a
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
