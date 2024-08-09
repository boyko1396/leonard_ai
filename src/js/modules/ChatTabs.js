export default function ChatTabs() {
  const tabsNav = document.querySelector('.js-chat-tabs-nav');

  if (!tabsNav) return;

  const tabNavItems = tabsNav.querySelectorAll('.js-chat-tabs-nav-link');
  const tabContents = document.querySelectorAll('.js-chat-tabs-content .chat-aside__body-history');

  tabsNav.addEventListener('click', function (e) {
    const clickedNavItem = e.target.closest('.chat-aside__nav-link');

    if (clickedNavItem) {
      e.preventDefault();

      tabNavItems.forEach(item => item.classList.remove('is-active'));
      tabContents.forEach(content => content.classList.remove('is-show'));

      clickedNavItem.classList.add('is-active');
      const targetContent = document.querySelector(clickedNavItem.getAttribute('href'));
      
      if (targetContent) {
        targetContent.classList.add('is-show');
      }
    }
  });
}