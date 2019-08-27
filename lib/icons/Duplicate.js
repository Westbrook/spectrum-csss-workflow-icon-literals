import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Duplicate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Duplicate',
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
      aria-labelledby="${`title-Duplicate-${count}`}"
      aria-describedby="${`title-Duplicate-${count}`}"
    >
      <title id="${`title-Duplicate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Duplicate-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 12h18V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h6V14a2 2 0 012-2z" />
      <path
        d="M42 16H18a2 2 0 00-2 2v24a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2zm-3 16h-7v7h-4v-7h-7v-4h7v-7h4v7h7z"
      />
    </svg>
  `;
};
