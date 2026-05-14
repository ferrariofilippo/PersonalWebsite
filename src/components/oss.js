export default function Oss({ oss }) {
  return oss?.map((software) => (
    <li
      className="leading-relaxed"
      key={`${software['id']}_${software['name']}`}
    >
      <a
        className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
        href={software['url']}
      >
        {software['name']}
      </a>
    </li>
  ));
}
