import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Multiple = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Multiple',
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
      aria-labelledby="${`title-Multiple-${count}`}"
      aria-describedby="${`title-Multiple-${count}`}"
    >
      <title id="${`title-Multiple-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Multiple-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="20" rx="2.5" ry="2.5" width="20" x="4" y="24" />
      <path
        d="M31.5 14h-15a2.5 2.5 0 00-2.5 2.5V20h12a2 2 0 012 2v12h3.5a2.5 2.5 0 002.5-2.5v-15a2.5 2.5 0 00-2.5-2.5z"
      />
      <path
        d="M41.5 4h-15A2.5 2.5 0 0024 6.5V10h12a2 2 0 012 2v12h3.5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0041.5 4z"
      />
    </svg>
  `;
};
