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
              className="flex align-middle mb-3 md:mb-0 md:me-auto hover:text-[#ACFCD9]"
              href="/"
            >
              <Image
                alt="Filippo Ferrario"
                src="/ferrariofilippo.png"
                width="36"
                height="36"
                className="rounded-full mx-3 h-8 w-8"
              />
              <span
                className="py-auto font-semibold text-2xl"
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
                  className="p-3 align-middle hover:text-[#ACFCD9] hover:font-semibold"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-3 align-middle hover:text-[#ACFCD9] hover:font-semibold"
                  href="/now"
                >
                  Now
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-3 align-middle hover:text-[#ACFCD9] hover:font-semibold"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li
                className="nav-item"
              >
                <Link
                  className="p-3 align-middle hover:text-[#ACFCD9] hover:font-semibold"
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
