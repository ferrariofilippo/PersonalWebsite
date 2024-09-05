export default function Books({ books }) {
  return books?.map((book) => (
    <li
      key={`${book['id']}_${book['title']}`}
      className="max-w-screen px-1 mb-0 mt-1"
    >
      {book['title']}, {book['author']}
    </li>
  ));
}
