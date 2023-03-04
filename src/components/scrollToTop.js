export default function ScrollToTop() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        className="p-0"
        id="scrollToTopBtn"
        onClick={scrollToTop}
      >
        <span
          className="material-symbols-outlined"
          id="upArrow"
        >
          arrow_upward
        </span>
      </button>
    </>
  );
}