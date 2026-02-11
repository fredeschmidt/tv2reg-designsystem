function initQuoteComponent() {
  const quotes = document.querySelectorAll('[data-component="quote"]');
  if (!quotes.length) return;

  quotes.forEach((quote) => {
    const author = quote.querySelector('.c-quote__author');
    const avatar = quote.querySelector('.c-quote__avatar');
    if (!author || !avatar) return;
    const avatarSrc = quote.dataset.avatar;
    if (!avatarSrc) return;

    const img = document.createElement('img');
    img.src = avatarSrc;
    img.alt = author.textContent.trim();
    avatar.replaceChildren(img);
  });
}

export { initQuoteComponent };
