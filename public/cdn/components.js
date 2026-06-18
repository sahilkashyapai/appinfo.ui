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

  function getEventTargetElement(event) {
    if (!event) return null;
    const target = event.target;
    if (target instanceof Element) return target;
    return target && target.parentElement ? target.parentElement : null;
  }

  function findClosest(event, selector) {
    const target = getEventTargetElement(event);
    return target ? target.closest(selector) : null;
  }

  function resolveSidebar(toggleControl) {
    if (!toggleControl) return null;

    const withinSidebar = toggleControl.closest(SELECTORS.sidebar);
    if (withinSidebar) return withinSidebar;

    const targetSelector =
      toggleControl.getAttribute('data-ai-sidebar-target') ||
      toggleControl.getAttribute('aria-controls');
    if (!targetSelector) return null;

    const normalizedSelector =
      targetSelector.charAt(0) === '#' || targetSelector.charAt(0) === '.'
        ? targetSelector
        : '#' + targetSelector;

    return document.querySelector(normalizedSelector);
  }

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
    if (document.documentElement.hasAttribute('data-ai-ui-events-bound')) return;
    document.documentElement.setAttribute('data-ai-ui-events-bound', 'true');

    document.addEventListener('click', (event) => {
      const accordionButton = findClosest(event, SELECTORS.accordionButton);
      if (accordionButton) {
        toggleAccordion(accordionButton);
        return;
      }

      const tabButton = findClosest(event, SELECTORS.tabButton);
      if (tabButton) {
        activateTab(tabButton);
        return;
      }

      const modalOpen = findClosest(event, SELECTORS.modalOpen);
      if (modalOpen) {
        event.preventDefault();
        openModal(modalOpen.getAttribute('data-ai-modal-open'));
        return;
      }

      const modalClose = findClosest(event, SELECTORS.modalClose);
      if (modalClose) {
        closeModal(modalClose.closest(SELECTORS.modalBackdrop));
        return;
      }

      const target = getEventTargetElement(event);
      const backdrop = findClosest(event, SELECTORS.modalBackdrop);
      if (backdrop && target === backdrop) {
        closeModal(backdrop);
        return;
      }

      const toastClose = findClosest(event, SELECTORS.toastClose);
      if (toastClose) {
        const toast = toastClose.closest(SELECTORS.toast);
        if (toast) toast.remove();
        return;
      }

      const sidebarToggle = findClosest(event, SELECTORS.sidebarToggle);
      if (sidebarToggle) {
        const sidebar = resolveSidebar(sidebarToggle);
        if (sidebar) sidebar.classList.toggle('sidebar-expanded-full');
        setExpanded(sidebarToggle, sidebar ? sidebar.classList.contains('sidebar-expanded-full') : false);
        return;
      }

      const navbarToggler = findClosest(event, SELECTORS.navbarToggler);
      if (navbarToggler) {
        toggleNavbar(navbarToggler);
        return;
      }

      const navToggle = findClosest(event, '.nav-link--toggle, .nav-caret-btn');
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

      const dropdown = findClosest(event, SELECTORS.dropdown);
      if (dropdown && !findClosest(event, SELECTORS.dropdownMenu)) {
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
    init,
    openModal,
  });
})();
