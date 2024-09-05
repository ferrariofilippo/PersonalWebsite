export default function Oss({ oss }) {
  return oss?.map((software) => (
    <li
      className="max-w-screen px-1 mb-0 mt-1"
      key={`${software['id']}_${software['name']}`}
    >
      <a
        className='underline hover:text-purple-600 hover:font-semibold'
        href={software['url']}
      >
        {software['name']}
      </a>
    </li>
  ));
}
