(() => {
  const dialog = document.querySelector('.figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.figure-full');
  const caption = dialog.querySelector('.figure-caption');

  document.querySelectorAll('.paper-figure').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const thumbnail = link.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt;
      document.body.classList.add('figure-open');
      dialog.showModal();
    });
  });

  dialog.querySelector('.figure-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('figure-open');
    image.removeAttribute('src');
  });
})();
