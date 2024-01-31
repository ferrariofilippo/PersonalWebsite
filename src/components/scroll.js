import { useEffect } from 'react';

export default function Scroll() {
  function on_scroll() {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (scrollButton) {
      if (document.documentElement.scrollTop > 64) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }
  }

  useEffect(
    function mount() {
      window.addEventListener('scroll', on_scroll);

      return function unMount() {
        window.removeEventListener('scroll', on_scroll);
      }
    }
  );

  return null;
}
