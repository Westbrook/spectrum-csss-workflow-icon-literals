import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlignMiddle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Middle',
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
      aria-labelledby="${`title-AlignMiddle-${count}`}"
      aria-describedby="${`title-AlignMiddle-${count}`}"
    >
      <title id="${`title-AlignMiddle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlignMiddle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45 22h-5v-6a2 2 0 00-2-2h-8a2 2 0 00-2 2v6h-8V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v14H3a1 1 0 00-1 1v2a1 1 0 001 1h5v14a2 2 0 002 2h8a2 2 0 002-2V26h8v6a2 2 0 002 2h8a2 2 0 002-2v-6h5a1 1 0 001-1v-2a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  `;
};
