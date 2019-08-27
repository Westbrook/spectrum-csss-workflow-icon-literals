import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Extension = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Extension',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      viewBox="0 0 48 48"
      width="${width}"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-Extension-${count}`}"
      aria-describedby="${`title-Extension-${count}`}"
    >
      <title id="${`title-Extension-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Extension-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 12h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v9h-8V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v9h-2a2 2 0 00-2 2v4a2 2 0 002 2v6a6 6 0 006 6h2v4a7.083 7.083 0 01-14 0V15.382a7.26 7.26 0 00-6.133-7.33 6.929 6.929 0 00-7.322 4.363 1.022 1.022 0 00.527 1.326l1.719.738a1.044 1.044 0 001.4-.527A3 3 0 0112 15v21a11.05 11.05 0 0022 0v-4h2a6 6 0 006-6v-6a2 2 0 002-2v-4a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
