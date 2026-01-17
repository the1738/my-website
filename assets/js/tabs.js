const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    contents.forEach(c => c.style.display = c.id === target ? 'block' : 'none');
  });
});
