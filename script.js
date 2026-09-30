document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(tabName) {
    tabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === tabName);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  document.querySelectorAll('[data-tab-link]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(el.dataset.tabLink);
    });
  });
});
