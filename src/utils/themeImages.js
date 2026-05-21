const IMAGE_MODULES = import.meta.glob('../images/**/*', {
  eager: true,
  import: 'default',
});

const themeLogos = {
  glance: {
    logo: 'header-logo.png',
    banner: 'Slide 1 - Smart School Zone Management.png',
    footer_logo: 'logo.png',
    icon: 'logo.png',
  },
  mcomms: {
    logo: 'mcomms-logo-header.png',
    banner: 'MCOMMS Slide 1.png',
    footer_logo: 'logo.png',
    icon: 'logo.png',
  },
  wwe: {
    logo: 'www-logo-image.png',
    banner: 'WWE Slide 1.png',
    footer_logo: 'logo.png',
    icon: 'logo.png',
  },
  rattler: {
    logo: 'logo.png',
    banner: 'Rattler Slide 2.png',
    footer_logo: 'logo.png',
    icon: 'rattler-logo-icon.png',
  },
  mainelink: {
    logo: 'logo.png',
    banner: 'slide-1.JPG',
    footer_logo: 'logo.png',
    icon: 'logo.png',
  },
};

const DEFAULT_THEME = 'glance';

function normalizeTheme(theme) {
  return themeLogos[theme] ? theme : DEFAULT_THEME;
}

function getImageFile(theme, slot) {
  const resolvedTheme = normalizeTheme(theme);
  return themeLogos[resolvedTheme]?.[slot] || themeLogos[DEFAULT_THEME][slot] || 'logo.png';
}

function resolveImage(theme, file) {
  const resolvedTheme = normalizeTheme(theme);
  const byTheme = IMAGE_MODULES[`../images/${resolvedTheme}/${file}`];
  if (byTheme) return byTheme;

  const byDefaultTheme = IMAGE_MODULES[`../images/${DEFAULT_THEME}/${file}`];
  if (byDefaultTheme) return byDefaultTheme;

  const fallbackLogoByTheme = IMAGE_MODULES[`../images/${resolvedTheme}/logo.png`];
  if (fallbackLogoByTheme) return fallbackLogoByTheme;

  return IMAGE_MODULES[`../images/${DEFAULT_THEME}/logo.png`];
}

export function getThemeImages(theme) {
  const resolvedTheme = normalizeTheme(theme);
  return {
    logo: resolveImage(resolvedTheme, getImageFile(resolvedTheme, 'logo')),
    banner: resolveImage(resolvedTheme, getImageFile(resolvedTheme, 'banner')),
    footer_logo: resolveImage(resolvedTheme, getImageFile(resolvedTheme, 'footer_logo')),
    icon: resolveImage(resolvedTheme, getImageFile(resolvedTheme, 'icon')),
  };
}

export function getThemeCodeImagePath(theme, slot) {
  const resolvedTheme = normalizeTheme(theme);
  const file = getImageFile(resolvedTheme, slot);
  return `./v1.0/assets/images/${resolvedTheme}/${file}`;
}
