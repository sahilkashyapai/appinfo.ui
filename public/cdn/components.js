/*!
 * AppInfo.UI component interactions.
 * Works with the class names shipped in public/cdn/components.css.
 */
(function () {
  'use strict';

  const SELECTORS = {
    accordion: '.ai-accordion',
    accordionButton: '.ai-acc-btn',
    accordionBody: '.ai-acc-body',
    dropdown: '.ai-dropdown',
    dropdownMenu: '.ai-dropdown-menu',
    modalBackdrop: '.ai-modal-backdrop',
    modalClose: '.ai-modal-close, [data-ai-modal-close]',
    modalOpen: '[data-ai-modal-open]',
    navbar: '.ai-navbar',
    navbarToggler: '.ai-navbar-toggler',
    navDropdown: '.nav-item--has-dropdown',
    sidebar: '.ai-devicelist-sidebar',
    sidebarToggle: '.devicelist-header-toggle',
    tabRoot: '.ai-tabs',
    tabButton: '.ai-tab-btn',
    tabContent: '.ai-tab-content',
    toast: '.ai-toast',
    toastClose: '.t-close, [data-ai-toast-close]',
  };

  function closeDropdowns(except) {
    document.querySelectorAll(SELECTORS.dropdown).forEach((dropdown) => {
      if (dropdown !== except) dropdown.classList.remove('open');
    });
  }

  function closeNavDropdowns(except) {
    document.querySelectorAll(SELECTORS.navDropdown).forEach((item) => {
      if (item !== except) {
        item.classList.remove('is-open');
        setExpanded(item.querySelector('.nav-caret-btn'), false);
        setNavCaretIcon(item, false);
      }
    });
  }

  function setExpanded(control, expanded) {
    if (control) control.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function setNavCaretIcon(item, expanded) {
    const icon = item ? item.querySelector('.nav-caret') : null;
    if (icon) icon.textContent = expanded ? 'expand_less' : 'expand_more';
  }

  function toggleNavbar(button) {
    const header = button.closest('.header');
    const navbar = header ? header.querySelector(SELECTORS.navbar) : null;
    if (!navbar) return;

    const willOpen = !navbar.classList.contains('navbar-expanded');
    navbar.classList.toggle('navbar-expanded', willOpen);
    button.classList.toggle('burger-open', willOpen);
    setExpanded(button, willOpen);
  }

  function toggleAccordion(button) {
    const item = button.closest('.ai-acc-item');
    const accordion = button.closest(SELECTORS.accordion);
    const body = item ? item.querySelector(SELECTORS.accordionBody) : null;
    const willOpen = !button.classList.contains('open');
    const allowMultiple = accordion && accordion.hasAttribute('data-ai-accordion-multiple');

    if (accordion && !allowMultiple) {
      accordion.querySelectorAll(SELECTORS.accordionButton).forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove('open');
          setExpanded(otherButton, false);
        }
      });
      accordion.querySelectorAll(SELECTORS.accordionBody).forEach((otherBody) => {
        if (otherBody !== body) otherBody.classList.remove('open');
      });
    }

    button.classList.toggle('open', willOpen);
    if (body) body.classList.toggle('open', willOpen);
    setExpanded(button, willOpen);
  }

  function activateTab(button) {
    const tabs = button.closest(SELECTORS.tabRoot);
    if (!tabs) return;

    const targetId = button.getAttribute('data-ai-tab-target');
    const buttons = tabs.querySelectorAll(SELECTORS.tabButton);
    const contents = tabs.querySelectorAll(SELECTORS.tabContent);
    const index = Array.prototype.indexOf.call(buttons, button);

    buttons.forEach((tabButton) => {
      const isActive = tabButton === button;
      tabButton.classList.toggle('active', isActive);
      tabButton.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    contents.forEach((content, contentIndex) => {
      const matchesTarget = targetId && ('#' + content.id === targetId || content.id === targetId);
      const isActive = targetId ? matchesTarget : contentIndex === index;
      content.classList.toggle('active', isActive);
      if (content.hasAttribute('hidden')) content.hidden = !isActive;
    });
  }

  function openModal(target) {
    const modal = typeof target === 'string' ? document.querySelector(target) : target;
    if (!modal) return;
    modal.classList.add('open');
    modal.removeAttribute('aria-hidden');
    document.documentElement.classList.add('ai-modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (!document.querySelector(SELECTORS.modalBackdrop + '.open')) {
      document.documentElement.classList.remove('ai-modal-open');
    }
  }

  function init() {
    document.addEventListener('click', (event) => {
      const accordionButton = event.target.closest(SELECTORS.accordionButton);
      if (accordionButton) {
        toggleAccordion(accordionButton);
        return;
      }

      const tabButton = event.target.closest(SELECTORS.tabButton);
      if (tabButton) {
        activateTab(tabButton);
        return;
      }

      const modalOpen = event.target.closest(SELECTORS.modalOpen);
      if (modalOpen) {
        event.preventDefault();
        openModal(modalOpen.getAttribute('data-ai-modal-open'));
        return;
      }

      const modalClose = event.target.closest(SELECTORS.modalClose);
      if (modalClose) {
        closeModal(modalClose.closest(SELECTORS.modalBackdrop));
        return;
      }

      const backdrop = event.target.closest(SELECTORS.modalBackdrop);
      if (backdrop && event.target === backdrop) {
        closeModal(backdrop);
        return;
      }

      const toastClose = event.target.closest(SELECTORS.toastClose);
      if (toastClose) {
        const toast = toastClose.closest(SELECTORS.toast);
        if (toast) toast.remove();
        return;
      }

      const sidebarToggle = event.target.closest(SELECTORS.sidebarToggle);
      if (sidebarToggle) {
        const sidebar = sidebarToggle.closest(SELECTORS.sidebar);
        if (sidebar) sidebar.classList.toggle('sidebar-expanded-full');
        return;
      }

      const navbarToggler = event.target.closest(SELECTORS.navbarToggler);
      if (navbarToggler) {
        toggleNavbar(navbarToggler);
        return;
      }

      const navToggle = event.target.closest('.nav-link--toggle, .nav-caret-btn');
      if (navToggle) {
        const item = navToggle.closest(SELECTORS.navDropdown);
        if (item) {
          event.preventDefault();
          const willOpen = !item.classList.contains('is-open');
          closeNavDropdowns(item);
          item.classList.toggle('is-open', willOpen);
          setExpanded(item.querySelector('.nav-caret-btn'), willOpen);
          setNavCaretIcon(item, willOpen);
          return;
        }
      }

      const dropdown = event.target.closest(SELECTORS.dropdown);
      if (dropdown && !event.target.closest(SELECTORS.dropdownMenu)) {
        const willOpen = !dropdown.classList.contains('open');
        closeDropdowns(dropdown);
        dropdown.classList.toggle('open', willOpen);
        setExpanded(dropdown.querySelector('button'), willOpen);
        return;
      }

      closeDropdowns();
      closeNavDropdowns();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeDropdowns();
      closeNavDropdowns();
      document.querySelectorAll(SELECTORS.modalBackdrop + '.open').forEach(closeModal);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AppInfoUI = Object.assign(window.AppInfoUI || {}, {
    activateTab,
    closeModal,
    openModal,
  });
})();
