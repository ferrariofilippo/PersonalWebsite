export default function Learning({ learnings }) {
  return learnings?.map((learning) => (
    <li
      className="text-zinc-300 leading-relaxed"
      key={`${learning['id']}_${learning['title']}`}
    >
      {learning['title']}
    </li>
  ));
}
