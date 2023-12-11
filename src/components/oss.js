export default function Oss({ oss }) {
  return oss?.map((software) => (
    <li
      className="max-w-screen px-1"
      key={`${software['id']}_${software['name']}`}
    >
      <a
        className='underline hover:text-purple-600 hover:font-semibold mt-5 text-xl'
        href={software['url']}
      >
        {software['name']}
      </a>
      <p
        className="mb-4 xl:w-4/7 md:w-2/3 w-full sm:mx-auto px-4"
      >
        {software['content']}
      </p>
    </li>
  ));
}
