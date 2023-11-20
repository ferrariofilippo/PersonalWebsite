export default function Oss({ oss }) {
  return oss?.map((software) => (
    <li
      className="max-w-screen px-1"
      key={`${software['id']}_${software['name']}`}
    >
      <h4
        className="mb-0 mt-3"
      >
        <a
          className='underline hover:text-[#ACFCD9] hover:font-semibold'
          href={software['url']}
        >
          {software['name']}
        </a>
      </h4>
      <p
        className="mt-0 mb-4 xl:w-4/7 md:w-2/3 w-full sm:mx-auto px-4"
      >
        {software['content']}
      </p>
    </li>
  ));
}
