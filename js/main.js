document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing page loaded');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});