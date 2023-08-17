export default function ScrollToTop() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        className="p-0 hidden fixed left-[16px] bottom-[16px] z-[101] h-[48px] w-[48px] rounded-full bg-[#ACFCD9]"
        id="scrollToTopBtn"
        onClick={scrollToTop}
        name="scrolltotopbutton"
      >
        <span
          className="material-symbols-outlined text-[2em] font-black align-middle text-teal-600"
          id="upArrow"
        >
          arrow_upward
        </span>
      </button>
    </>
  );
}
