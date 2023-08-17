'use server';

export default function Books({ books }) {
  return books?.map((book) => (
    <li
      key={`${book['id']}_${book['title']}`}
      className="mt-3 max-w-screen px-1"
    >
      {book['title']}, {book['author']}
    </li>
  ));
}
