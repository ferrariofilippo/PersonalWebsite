export default function ScrollToTop() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        className="p-0 hidden fixed left-4 bottom-4 z-[101] h-12 w-12 rounded-full bg-purple-300"
        id="scrollToTopBtn"
        onClick={scrollToTop}
        name="scrolltotopbutton"
      >
        <span
          className="material-symbols-outlined text-[2em] font-black align-middle text-purple-600"
          id="upArrow"
        >
          arrow_upward
        </span>
      </button>
    </>
  );
}
