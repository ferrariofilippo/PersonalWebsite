'use server';

export default function Oss({ oss }) {
  return oss?.map((software) => (
    <li
      key={`${software['id']}_${software['name']}`}
    >
      <h4
        className="mb-0 mt-3"
      >
        <a
          className='custom-link text-decoration-none'
          href={software['url']}
        >
          {software['name']}
        </a>
      </h4>
      <p
        className="mt-0 mb-4"
      >
        {software['content']}
      </p>
    </li>
  ));
}
