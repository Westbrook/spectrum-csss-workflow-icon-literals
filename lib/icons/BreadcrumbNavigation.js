import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BreadcrumbNavigation = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Breadcrumb Navigation',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-BreadcrumbNavigation-${count}`}"
      aria-describedby="${`title-BreadcrumbNavigation-${count}`}"
    >
      <title id="${`title-BreadcrumbNavigation-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BreadcrumbNavigation-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35 23.959L23.45 8.599A1.5 1.5 0 0022.251 8H2a2 2 0 00-2 2v28a2 2 0 002 2h20.249a1.5 1.5 0 001.201-.601zM6 27.6A3.6 3.6 0 119.6 24 3.6 3.6 0 016 27.6zm10 0a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.6zm10 0a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.6zm22-3.641L36.6 39.198a2 2 0 01-1.602.802h-5.001a1 1 0 01-.8-1.599L40 23.959 29.204 9.6a1 1 0 01.8-1.601h4.998a2 2 0 011.598.798z"
        fill="currentColor"
      />
    </svg>
  `;
};
