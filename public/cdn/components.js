/*!
 * AppInfo.UI v1 component runtime
 * Data-attribute driven interactions for plain HTML projects.
 */
(function (global, document) {
  'use strict';

  const SELECTORS = {
    accordion: '.ai-accordion',
    accordionToggle: '[data-accordion-toggle], [data-ai-accordion-toggle], .ai-acc-btn',
    alert: '.ai-alert',
    alertClose: '[data-alert-close], [data-ai-alert-close]',
    chip: '.ai-chip',
    chipRemove: '[data-chip-remove], [data-ai-chip-remove]',
    chipToggle: '[data-chip-toggle], [data-ai-chip-toggle]',
    drawer: '.ai-drawer',
    drawerBackdrop: '[data-drawer-backdrop]',
    drawerClose: '[data-drawer-close], [data-ai-drawer-close]',
    drawerOpen: '[data-drawer-open], [data-ai-drawer-open]',
    drawerToggle: '[data-drawer-toggle], [data-ai-drawer-toggle]',
    dropdown: '.ai-dropdown',
    dropdownMenu: '.ai-dropdown-menu',
    dropdownToggle: '[data-dropdown-toggle], [data-ai-dropdown-toggle]',
    modal: '.ai-modal-backdrop',
    modalClose: '[data-modal-close], [data-ai-modal-close], .ai-modal-close',
    modalOpen: '[data-modal-open], [data-ai-modal-open]',
    navbar: '.ai-navbar',
    navbarToggler: '.ai-navbar-toggler',
    navDropdown: '.nav-item--has-dropdown',
    sidebar: '.ai-devicelist-sidebar',
    sidebarToggle: '[data-sidebar-toggle], [data-ai-sidebar-toggle], .devicelist-header-toggle',
    switchToggle: '[data-switch-toggle], [data-ai-switch-toggle]',
    tabToggle: '[data-tab-target], [data-ai-tab-target], .ai-tab-btn',
    toast: '.ai-toast',
    toastClose: '.t-close, [data-toast-close], [data-ai-toast-close]',
    tooltip: '[data-tooltip]',
  };

  const modalTriggers = new WeakMap();
  const drawerTriggers = new WeakMap();
  const initializedSidebars = new WeakSet();
  let activeTooltip = null;

  function targetElement(event) {
    const target = event && event.target;
    if (target instanceof Element) return target;
    return target && target.parentElement ? target.parentElement : null;
  }

  function closest(event, selector) {
    const target = targetElement(event);
    return target ? target.closest(selector) : null;
  }

  function attribute(element, names) {
    for (let index = 0; index < names.length; index += 1) {
      const value = element.getAttribute(names[index]);
      if (value !== null) return value;
    }
    return null;
  }

  function resolveTarget(value, fallback) {
    if (!value) return fallback || null;

    const id = value.charAt(0) === '#' ? value.slice(1) : value;
    const byId = document.getElementById(id);
    if (byId) return byId;

    try {
      return document.querySelector(value);
    } catch (_error) {
      return null;
    }
  }

  function setExpanded(control, expanded) {
    if (control) control.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function resolveSidebar(toggle) {
    const withinSidebar = toggle.closest(SELECTORS.sidebar);
    if (withinSidebar) return withinSidebar;

    const target = attribute(toggle, ['data-sidebar-target', 'data-ai-sidebar-target'])
      || toggle.getAttribute('aria-controls');
    return resolveTarget(target);
  }

  function sidebarParts(sidebar) {
    const toggle = sidebar && sidebar.querySelector(SELECTORS.sidebarToggle);
    return {
      content: sidebar && sidebar.querySelector('.devicelist-content'),
      icon: toggle && toggle.querySelector('.material-symbols-outlined'),
      toggle,
      wrapper: sidebar && sidebar.querySelector('.devicelist-item-wrapper'),
    };
  }

  function sidebarHasOverflow(sidebar) {
    const parts = sidebarParts(sidebar);
    if (!parts.content || !parts.wrapper) return false;

    return parts.wrapper.scrollHeight > parts.wrapper.clientHeight + 1
      || parts.wrapper.scrollWidth > parts.wrapper.clientWidth + 1
      || parts.wrapper.scrollHeight > parts.content.clientHeight + 1
      || parts.wrapper.scrollWidth > parts.content.clientWidth + 1;
  }

  function syncSidebar(sidebar) {
    if (!sidebar) return;
    const parts = sidebarParts(sidebar);
    if (!parts.toggle) return;

    const expanded = sidebar.classList.contains('sidebar-expanded-full');
    const enabled = expanded || sidebarHasOverflow(sidebar);

    parts.toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    parts.toggle.setAttribute('aria-disabled', enabled ? 'false' : 'true');
    parts.toggle.setAttribute('tabindex', enabled ? '0' : '-1');

    // Remove stale inline state copied from older React-generated snippets.
    parts.toggle.style.removeProperty('pointer-events');
    parts.toggle.style.removeProperty('opacity');
    parts.toggle.style.removeProperty('cursor');

    if (parts.icon) {
      parts.icon.textContent = expanded ? 'chevron_left' : 'chevron_right';
    }
  }

  function initializeSidebar(sidebar) {
    if (!sidebar) return;
    syncSidebar(sidebar);
    if (initializedSidebars.has(sidebar)) return;
    initializedSidebars.add(sidebar);

    if ('ResizeObserver' in global) {
      const observer = new ResizeObserver(() => syncSidebar(sidebar));
      const parts = sidebarParts(sidebar);
      [sidebar, parts.content, parts.wrapper].forEach((element) => {
        if (element) observer.observe(element);
      });
      if (parts.wrapper) {
        Array.from(parts.wrapper.children).forEach((child) => observer.observe(child));
      }
    }
  }

  function toggleSidebar(toggle) {
    const sidebar = resolveSidebar(toggle);
    if (!sidebar) return;
    const expanded = sidebar.classList.contains('sidebar-expanded-full');
    if (!expanded && toggle.getAttribute('aria-disabled') === 'true') return;

    sidebar.classList.toggle('sidebar-expanded-full', !expanded);
    syncSidebar(sidebar);
    emit(sidebar, !expanded ? 'sidebar:expand' : 'sidebar:collapse', { trigger: toggle });
  }

  function setNavCaret(item, expanded) {
    const icon = item && item.querySelector('.nav-caret');
    if (icon) icon.textContent = expanded ? 'expand_less' : 'expand_more';
  }

  function closeNavDropdowns(except) {
    document.querySelectorAll(SELECTORS.navDropdown + '.is-open').forEach((item) => {
      if (item === except) return;
      item.classList.remove('is-open');
      setExpanded(item.querySelector('.nav-caret-btn'), false);
      setNavCaret(item, false);
    });
  }

  function toggleNavDropdown(toggle) {
    const item = toggle.closest(SELECTORS.navDropdown);
    if (!item) return;
    const willOpen = !item.classList.contains('is-open');
    closeNavDropdowns(item);
    item.classList.toggle('is-open', willOpen);
    setExpanded(item.querySelector('.nav-caret-btn'), willOpen);
    setNavCaret(item, willOpen);
  }

  function toggleNavbar(toggle) {
    const header = toggle.closest('.header');
    const navbar = header && header.querySelector(SELECTORS.navbar);
    if (!navbar) return;
    const expanded = !navbar.classList.contains('navbar-expanded');
    navbar.classList.toggle('navbar-expanded', expanded);
    toggle.classList.toggle('burger-open', expanded);
    setExpanded(toggle, expanded);
  }

  function emit(element, name, detail) {
    if (!element) return;
    element.dispatchEvent(new CustomEvent('appinfo:' + name, {
      bubbles: true,
      detail: detail || {},
    }));
  }

  function focusableElements(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
      'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter((element) => !element.hidden && element.getClientRects().length > 0);
  }

  function syncPageLock() {
    const hasOverlay = document.querySelector(
      SELECTORS.modal + '.open, ' + SELECTORS.drawer + '.open'
    );
    document.documentElement.classList.toggle('ai-overlay-open', Boolean(hasOverlay));
  }

  function getModal(target) {
    return target instanceof Element
      ? target.closest(SELECTORS.modal) || target
      : resolveTarget(target);
  }

  function openModal(target, trigger) {
    const modal = getModal(target);
    if (!modal || !modal.matches(SELECTORS.modal)) return null;

    modal.classList.add('open');
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    if (trigger) {
      modalTriggers.set(modal, trigger);
      setExpanded(trigger, true);
    }
    syncPageLock();

    const focusTarget = modal.querySelector('[autofocus]') || focusableElements(modal)[0];
    if (focusTarget) global.setTimeout(() => focusTarget.focus(), 0);
    emit(modal, 'modal:open', { trigger: trigger || null });
    return modal;
  }

  function closeModal(target, options) {
    const modal = getModal(target);
    if (!modal || !modal.matches(SELECTORS.modal)) return null;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    const trigger = modalTriggers.get(modal);
    if (trigger) setExpanded(trigger, false);
    syncPageLock();

    if ((!options || options.restoreFocus !== false) && trigger && trigger.isConnected) {
      trigger.focus();
    }
    emit(modal, 'modal:close', { trigger: trigger || null });
    return modal;
  }

  function closeDropdown(dropdown) {
    if (!dropdown) return;
    dropdown.classList.remove('open');
    const toggle = dropdown.querySelector(SELECTORS.dropdownToggle);
    const menu = dropdown.querySelector(SELECTORS.dropdownMenu);
    setExpanded(toggle, false);
    if (menu) menu.setAttribute('aria-hidden', 'true');
  }

  function closeDropdowns(except) {
    document.querySelectorAll(SELECTORS.dropdown + '.open').forEach((dropdown) => {
      if (dropdown !== except) closeDropdown(dropdown);
    });
  }

  function toggleDropdown(toggle) {
    const target = attribute(toggle, ['data-dropdown-toggle', 'data-ai-dropdown-toggle']);
    const dropdown = resolveTarget(target, toggle.closest(SELECTORS.dropdown));
    if (!dropdown) return;

    const willOpen = !dropdown.classList.contains('open');
    closeDropdowns(dropdown);
    dropdown.classList.toggle('open', willOpen);
    setExpanded(toggle, willOpen);

    const menu = dropdown.querySelector(SELECTORS.dropdownMenu);
    if (menu) menu.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
    emit(dropdown, willOpen ? 'dropdown:open' : 'dropdown:close', { trigger: toggle });
  }

  function accordionBody(toggle, item) {
    const target = attribute(toggle, ['data-accordion-toggle', 'data-ai-accordion-toggle']);
    return resolveTarget(target, item && item.querySelector('.ai-acc-body'));
  }

  function setAccordionItem(toggle, body, expanded) {
    toggle.classList.toggle('open', expanded);
    setExpanded(toggle, expanded);
    if (body) {
      body.classList.toggle('open', expanded);
      body.hidden = !expanded;
    }
  }

  function toggleAccordion(toggle) {
    const accordion = toggle.closest(SELECTORS.accordion);
    const item = toggle.closest('.ai-acc-item');
    const body = accordionBody(toggle, item);
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    const multiple = accordion && (
      accordion.hasAttribute('data-accordion-multiple') ||
      accordion.hasAttribute('data-ai-accordion-multiple')
    );

    if (accordion && !multiple) {
      accordion.querySelectorAll(SELECTORS.accordionToggle).forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          setAccordionItem(
            otherToggle,
            accordionBody(otherToggle, otherToggle.closest('.ai-acc-item')),
            false
          );
        }
      });
    }

    setAccordionItem(toggle, body, willOpen);
    emit(item || accordion, 'accordion:toggle', { expanded: willOpen, trigger: toggle });
  }

  function activateTab(toggle) {
    const target = attribute(toggle, ['data-tab-target', 'data-ai-tab-target']);
    const panel = resolveTarget(target);
    const root = toggle.closest('[data-tabs], .ai-tabs');
    const scope = root || document;
    const group = toggle.closest('[role="tablist"], .ai-tab-list');
    const toggles = group
      ? group.querySelectorAll(SELECTORS.tabToggle)
      : scope.querySelectorAll(SELECTORS.tabToggle);

    toggles.forEach((otherToggle) => {
      const active = otherToggle === toggle;
      otherToggle.classList.toggle('active', active);
      otherToggle.setAttribute('aria-selected', active ? 'true' : 'false');
      otherToggle.setAttribute('tabindex', active ? '0' : '-1');

      const otherTarget = attribute(otherToggle, ['data-tab-target', 'data-ai-tab-target']);
      const otherPanel = resolveTarget(otherTarget);
      if (otherPanel) {
        otherPanel.classList.toggle('active', active);
        otherPanel.hidden = !active;
      }
    });

    if (panel) emit(panel, 'tab:show', { trigger: toggle });
  }

  function getDrawer(target) {
    return target instanceof Element
      ? target.closest(SELECTORS.drawer) || target
      : resolveTarget(target);
  }

  function setDrawer(target, open, trigger) {
    const drawer = getDrawer(target);
    if (!drawer || !drawer.matches(SELECTORS.drawer)) return null;

    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (trigger) {
      drawerTriggers.set(drawer, trigger);
      setExpanded(trigger, open);
    }

    const backdrop = document.querySelector(
      '[data-drawer-backdrop="' + drawer.id + '"], [data-drawer-backdrop="#' + drawer.id + '"]'
    );
    if (backdrop) {
      backdrop.classList.toggle('open', open);
      backdrop.hidden = !open;
    }

    syncPageLock();
    if (open) {
      const focusTarget = focusableElements(drawer)[0];
      if (focusTarget) global.setTimeout(() => focusTarget.focus(), 0);
    } else {
      const savedTrigger = drawerTriggers.get(drawer);
      if (savedTrigger && savedTrigger.isConnected) savedTrigger.focus();
    }
    emit(drawer, open ? 'drawer:open' : 'drawer:close', { trigger: trigger || null });
    return drawer;
  }

  function showTooltip(trigger) {
    const text = trigger.getAttribute('data-tooltip');
    if (!text || trigger.hasAttribute('disabled')) return;
    hideTooltip();

    const tooltip = document.createElement('div');
    const id = 'ai-tooltip-' + Math.random().toString(36).slice(2);
    tooltip.className = 'ai-tooltip-floating';
    tooltip.id = id;
    tooltip.setAttribute('role', 'tooltip');
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    tooltip.style.left = Math.max(
      8,
      Math.min(global.innerWidth - tooltipRect.width - 8, rect.left + rect.width / 2 - tooltipRect.width / 2)
    ) + 'px';
    tooltip.style.top = Math.max(8, rect.top - tooltipRect.height - 8) + 'px';
    trigger.setAttribute('aria-describedby', id);
    activeTooltip = { tooltip, trigger };
  }

  function hideTooltip(trigger) {
    if (!activeTooltip || (trigger && activeTooltip.trigger !== trigger)) return;
    activeTooltip.trigger.removeAttribute('aria-describedby');
    activeTooltip.tooltip.remove();
    activeTooltip = null;
  }

  function initialize(root) {
    const scope = root || document;

    scope.querySelectorAll(SELECTORS.modal).forEach((modal) => {
      const open = modal.classList.contains('open');
      modal.setAttribute('aria-hidden', open ? 'false' : 'true');
    });

    scope.querySelectorAll(SELECTORS.dropdownToggle).forEach((toggle) => {
      const dropdown = toggle.closest(SELECTORS.dropdown);
      const open = Boolean(dropdown && dropdown.classList.contains('open'));
      setExpanded(toggle, open);
      const menu = dropdown && dropdown.querySelector(SELECTORS.dropdownMenu);
      if (menu) menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    });

    scope.querySelectorAll(SELECTORS.accordionToggle).forEach((toggle) => {
      const body = accordionBody(toggle, toggle.closest('.ai-acc-item'));
      const open = toggle.classList.contains('open') || toggle.getAttribute('aria-expanded') === 'true';
      setAccordionItem(toggle, body, open);
    });

    scope.querySelectorAll(SELECTORS.tabToggle).forEach((toggle) => {
      const active = toggle.classList.contains('active') || toggle.getAttribute('aria-selected') === 'true';
      toggle.setAttribute('aria-selected', active ? 'true' : 'false');
      toggle.setAttribute('tabindex', active ? '0' : '-1');
      const panel = resolveTarget(attribute(toggle, ['data-tab-target', 'data-ai-tab-target']));
      if (panel) panel.hidden = !active;
    });

    scope.querySelectorAll(SELECTORS.sidebar).forEach(initializeSidebar);
  }

  function trapOverlayFocus(event) {
    if (event.key !== 'Tab') return;
    const overlays = Array.from(document.querySelectorAll(
      SELECTORS.modal + '.open, ' + SELECTORS.drawer + '.open'
    ));
    const overlay = overlays[overlays.length - 1];
    if (!overlay) return;

    const focusable = focusableElements(overlay);
    if (!focusable.length) {
      event.preventDefault();
      overlay.setAttribute('tabindex', '-1');
      overlay.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function bindEvents() {
    if (document.documentElement.hasAttribute('data-appinfo-ui-bound')) return;
    document.documentElement.setAttribute('data-appinfo-ui-bound', '');

    document.addEventListener('click', (event) => {
      const modalOpen = closest(event, SELECTORS.modalOpen);
      if (modalOpen) {
        event.preventDefault();
        openModal(attribute(modalOpen, ['data-modal-open', 'data-ai-modal-open']), modalOpen);
        return;
      }

      const modalClose = closest(event, SELECTORS.modalClose);
      if (modalClose) {
        closeModal(modalClose);
        return;
      }

      const backdrop = closest(event, SELECTORS.modal);
      if (backdrop && targetElement(event) === backdrop && !backdrop.hasAttribute('data-modal-static')) {
        closeModal(backdrop);
        return;
      }

      const dropdownToggle = closest(event, SELECTORS.dropdownToggle);
      if (dropdownToggle) {
        event.preventDefault();
        toggleDropdown(dropdownToggle);
        return;
      }

      const accordionToggle = closest(event, SELECTORS.accordionToggle);
      if (accordionToggle) {
        toggleAccordion(accordionToggle);
        return;
      }

      const tabToggle = closest(event, SELECTORS.tabToggle);
      if (tabToggle) {
        event.preventDefault();
        activateTab(tabToggle);
        return;
      }

      const drawerControl = closest(
        event,
        SELECTORS.drawerOpen + ', ' + SELECTORS.drawerToggle + ', ' + SELECTORS.drawerClose
      );
      if (drawerControl) {
        event.preventDefault();
        const openTarget = attribute(drawerControl, ['data-drawer-open', 'data-ai-drawer-open']);
        const toggleTarget = attribute(drawerControl, ['data-drawer-toggle', 'data-ai-drawer-toggle']);
        const closeTarget = attribute(drawerControl, ['data-drawer-close', 'data-ai-drawer-close']);
        const drawer = getDrawer(openTarget || toggleTarget || closeTarget || drawerControl);
        const shouldOpen = openTarget !== null || (toggleTarget !== null && !drawer.classList.contains('open'));
        setDrawer(drawer, shouldOpen, drawerControl);
        return;
      }

      const drawerBackdrop = closest(event, SELECTORS.drawerBackdrop);
      if (drawerBackdrop && targetElement(event) === drawerBackdrop) {
        setDrawer(drawerBackdrop.getAttribute('data-drawer-backdrop'), false);
        return;
      }

      const toastClose = closest(event, SELECTORS.toastClose);
      if (toastClose) {
        const toast = toastClose.closest(SELECTORS.toast);
        if (toast) toast.remove();
        return;
      }

      const alertClose = closest(event, SELECTORS.alertClose);
      if (alertClose) {
        const alert = alertClose.closest(SELECTORS.alert);
        if (alert) {
          emit(alert, 'alert:close', { trigger: alertClose });
          alert.remove();
        }
        return;
      }

      const chipRemove = closest(event, SELECTORS.chipRemove);
      if (chipRemove) {
        const chip = chipRemove.closest(SELECTORS.chip);
        if (chip) {
          emit(chip, 'chip:remove', { trigger: chipRemove });
          chip.remove();
        }
        return;
      }

      const chipToggle = closest(event, SELECTORS.chipToggle);
      if (chipToggle) {
        const active = !chipToggle.classList.contains('active');
        chipToggle.classList.toggle('active', active);
        chipToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
        emit(chipToggle, 'chip:toggle', { active });
        return;
      }

      const switchToggle = closest(event, SELECTORS.switchToggle);
      if (switchToggle && !switchToggle.hasAttribute('disabled')) {
        const active = !switchToggle.classList.contains('on');
        switchToggle.classList.toggle('on', active);
        switchToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
        emit(switchToggle, 'switch:toggle', { active });
        return;
      }

      const sidebarToggle = closest(event, SELECTORS.sidebarToggle);
      if (sidebarToggle) {
        toggleSidebar(sidebarToggle);
        return;
      }

      const navbarToggle = closest(event, SELECTORS.navbarToggler);
      if (navbarToggle) {
        toggleNavbar(navbarToggle);
        return;
      }

      const navToggle = closest(event, '.nav-link--toggle, .nav-caret-btn');
      if (navToggle) {
        event.preventDefault();
        toggleNavDropdown(navToggle);
        return;
      }

      if (!closest(event, SELECTORS.dropdown)) closeDropdowns();
      if (!closest(event, SELECTORS.navDropdown)) closeNavDropdowns();
    });

    document.addEventListener('keydown', (event) => {
      const sidebarToggle = closest(event, SELECTORS.sidebarToggle);
      if (
        sidebarToggle
        && (event.key === 'Enter' || event.key === ' ')
        && sidebarToggle.getAttribute('aria-disabled') !== 'true'
      ) {
        event.preventDefault();
        toggleSidebar(sidebarToggle);
        return;
      }

      const chipToggle = closest(event, SELECTORS.chipToggle);
      if (
        chipToggle
        && (event.key === 'Enter' || event.key === ' ')
      ) {
        event.preventDefault();
        chipToggle.click();
        return;
      }

      const tab = closest(event, SELECTORS.tabToggle);
      if (tab && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        const tabList = tab.closest('[role="tablist"], .ai-tab-list');
        const tabs = tabList ? Array.from(tabList.querySelectorAll(SELECTORS.tabToggle)) : [];
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = currentIndex;

        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;

        if (tabs[nextIndex]) {
          event.preventDefault();
          activateTab(tabs[nextIndex]);
          tabs[nextIndex].focus();
        }
        return;
      }

      trapOverlayFocus(event);
      if (event.key !== 'Escape') return;

      hideTooltip();
      closeDropdowns();
      closeNavDropdowns();

      const openDrawers = Array.from(document.querySelectorAll(SELECTORS.drawer + '.open'));
      const openModals = Array.from(document.querySelectorAll(SELECTORS.modal + '.open'));
      if (openModals.length) closeModal(openModals[openModals.length - 1]);
      else if (openDrawers.length) setDrawer(openDrawers[openDrawers.length - 1], false);
    });

    document.addEventListener('wheel', (event) => {
      const target = targetElement(event);
      const sidebar = target && target.closest(
        SELECTORS.sidebar + '.sidebar-expanded-full'
      );
      if (!sidebar) return;

      const parts = sidebarParts(sidebar);
      const scroller = parts.content && parts.content.scrollWidth > parts.content.clientWidth
        ? parts.content
        : parts.wrapper;
      if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;

      const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
      if (!delta) return;
      event.preventDefault();
      scroller.scrollLeft += delta;
    }, { passive: false });

    document.addEventListener('pointerover', (event) => {
      const trigger = closest(event, SELECTORS.tooltip);
      if (trigger) showTooltip(trigger);
    });
    document.addEventListener('pointerout', (event) => {
      const trigger = closest(event, SELECTORS.tooltip);
      if (trigger && !trigger.contains(event.relatedTarget)) hideTooltip(trigger);
    });
    document.addEventListener('focusin', (event) => {
      const trigger = closest(event, SELECTORS.tooltip);
      if (trigger) showTooltip(trigger);
    });
    document.addEventListener('focusout', (event) => {
      const trigger = closest(event, SELECTORS.tooltip);
      if (trigger) hideTooltip(trigger);
    });

    if ('MutationObserver' in global) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;
            if (node.matches(SELECTORS.sidebar)) initializeSidebar(node);
            node.querySelectorAll(SELECTORS.sidebar).forEach(initializeSidebar);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  function init(root) {
    initialize(root);
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(document));
  } else {
    init(document);
  }

  global.AppInfoUI = Object.assign(global.AppInfoUI || {}, {
    activateTab,
    closeModal,
    hideTooltip,
    init,
    openModal,
    setDrawer,
    showTooltip,
    toggleAccordion,
    toggleDropdown,
    toggleNavbar,
    toggleSidebar,
  });
})(window, document);
