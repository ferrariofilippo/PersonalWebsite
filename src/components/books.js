export default function Books({ books }) {
  return books?.map((book) => (
    <li
      key={`${book['id']}_${book['title']}`}
      className="mt-3 xl:w-4/7 md:w-2/3 w-full sm:mx-auto px-4"
    >
      {book['title']}, {book['author']}
    </li>
  ));
}
