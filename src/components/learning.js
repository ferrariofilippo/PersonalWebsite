'use server';

export default function Learning({ learnings }) {
  return learnings?.map((learning) => (
    <li
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
