import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const InfoOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Info Outline',
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
      aria-labelledby="${`title-InfoOutline-${count}`}"
      aria-describedby="${`title-InfoOutline-${count}`}"
    >
      <title id="${`title-InfoOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-InfoOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 7.9A16.1 16.1 0 117.9 24 16.118 16.118 0 0124 7.9zm0-3.8A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1z"
      />
      <path
        d="M21.56 14.747a2.24 2.24 0 014.48 0 2.084 2.084 0 01-2.24 2.24 2.116 2.116 0 01-2.24-2.24zM27.5 32H26V21a1 1 0 00-1-1h-4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H22v10h-1.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"
      />
    </svg>
  `;
};
