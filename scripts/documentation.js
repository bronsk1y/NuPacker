function initTabs() {
  function switchTab() {
    const currentHash = window.location.hash || '#overview';

    const contents = document.querySelectorAll('.docs-content');
    contents.forEach(content => content.classList.remove('active'));


    const links = document.querySelectorAll('.table-of-contents > a');
    links.forEach(link => link.classList.remove('active'));

    const activeContent = document.querySelector(currentHash);
    if (activeContent) {
      activeContent.classList.add('active');
      window.scrollTo(0, 0); 
    }

    const activeLink = document.querySelector(`.table-of-contents > a[href="${currentHash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  window.addEventListener('hashchange', switchTab);
  switchTab();
}

window.addEventListener('DOMContentLoaded', initTabs);
