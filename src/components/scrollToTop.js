export default function ScrollToTop() {
  function scrollToTop() {
    document.getElementById('header-title').scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      className="hidden fixed left-4 bottom-4 z-[101] h-10 w-10 rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors flex items-center justify-center"
      id="scrollToTopBtn"
      onClick={scrollToTop}
      name="scrolltotopbutton"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-lg align-middle text-zinc-300">
        arrow_upward
      </span>
    </button>
  );
}
