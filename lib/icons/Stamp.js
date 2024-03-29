import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Stamp = ({ width = 24, height = 24, hidden = false, title = 'Stamp', desc } = {}) => {
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
      aria-labelledby="${`title-Stamp-${count}`}"
      aria-describedby="${`title-Stamp-${count}`}"
    >
      <title id="${`title-Stamp-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Stamp-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M48 8V4h-6c0 2.209-.9 2-2 2s-2 .209-2-2h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4S6 6.209 6 4H0v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4h6c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h6v-4c-2.209 0-2-.9-2-2s-.209-2 2-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2zM18 32h-4V16h-2v-4h6zm18-7a7 7 0 01-14 0v-6a7 7 0 0114 0z"
      />
      <path d="M32 19a3 3 0 00-6 0v6a3 3 0 006 0z" />
      <path d="M32 19a3 3 0 00-6 0v6a3 3 0 006 0z" />
    </svg>
  `;
};
