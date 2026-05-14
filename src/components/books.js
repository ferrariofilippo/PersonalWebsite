export default function Books({ books }) {
  return books?.map((book) => (
    <li
      key={`${book['id']}_${book['title']}`}
      className="text-zinc-300 leading-relaxed"
    >
      <span className="font-medium text-zinc-100">{book['title']}</span>
      <span className="font-mono text-xs text-zinc-500 ml-2">— {book['author']}</span>
    </li>
  ));
}
