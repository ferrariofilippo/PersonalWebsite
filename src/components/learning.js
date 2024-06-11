export default function Learning({ learnings }) {
  return learnings?.map((learning) => (
    <li
      className="max-w-screen px-1 mb-0 mt-3"
      key={`${learning['id']}_${learning['title']}`}
    >
      {learning['title']}
    </li>
  ));
}
