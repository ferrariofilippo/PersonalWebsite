'use server';

export default function Learning({ learnings }) {
  return learnings?.map((learning) => (
    <li
      className="max-w-screen px-1"
      key={`${learning['id']}_${learning['title']}`}
    >
      <h4
        className="mb-0 mt-3"
      >
        {learning['title']}
      </h4>
      <p
        className="mt-0 mb-4"
      >
        {learning['content']}
      </p>
    </li>
  ));
}
