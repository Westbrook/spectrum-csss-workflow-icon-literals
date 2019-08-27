import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Servers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Servers',
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
      aria-labelledby="${`title-Servers-${count}`}"
      aria-describedby="${`title-Servers-${count}`}"
    >
      <title id="${`title-Servers-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Servers-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 32H18a2 2 0 00-2 2v8a2 2 0 002 2h24a2 2 0 002-2v-8a2 2 0 00-2-2zm-18 4h-6v-2h6zM8 5a1 1 0 00-1-1H5a1 1 0 00-1 1v38a1 1 0 001 1h2a1 1 0 001-1v-3h6v-4H8V26h6v-4H8V12h6V8H8zm34-1H18a2 2 0 00-2 2v8a2 2 0 002 2h24a2 2 0 002-2V6a2 2 0 00-2-2zM24 8h-6V6h6zm18 10H18a2 2 0 00-2 2v8a2 2 0 002 2h24a2 2 0 002-2v-8a2 2 0 00-2-2zm-18 4h-6v-2h6z"
        fill="currentColor"
      />
    </svg>
  `;
};
