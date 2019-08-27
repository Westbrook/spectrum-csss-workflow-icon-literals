import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Artboard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Artboard',
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
      aria-labelledby="${`title-Artboard-${count}`}"
      aria-describedby="${`title-Artboard-${count}`}"
    >
      <title id="${`title-Artboard-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Artboard-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.414 20.414l-7.828-7.828A2 2 0 0034.172 12H14a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V21.828a2 2 0 00-.586-1.414zM40 40H16V16h16v6a2 2 0 002 2h6z"
      />
      <rect height="8" rx="1" ry="1" width="4" x="12" y="2" />
      <rect height="4" rx="1" ry="1" width="8" x="2" y="12" />
    </svg>
  `;
};
