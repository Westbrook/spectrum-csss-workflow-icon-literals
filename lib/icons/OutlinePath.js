import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const OutlinePath = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Outline Path',
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
      aria-labelledby="${`title-OutlinePath-${count}`}"
      aria-describedby="${`title-OutlinePath-${count}`}"
    >
      <title id="${`title-OutlinePath-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OutlinePath-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M28 21v7h-7v4h9a2 2 0 002-2v-9zm2-17H6a2 2 0 00-2 2v24a2 2 0 002 2h9v-4H8V8h20v7h4V6a2 2 0 00-2-2z"
      />
      <path
        d="M18 16a2 2 0 00-2 2v9h4v-7h7v-4zm24 0h-9v4h7v20H20v-7h-4v9a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
