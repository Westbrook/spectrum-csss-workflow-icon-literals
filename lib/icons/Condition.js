import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Condition = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Condition',
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
      aria-labelledby="${`title-Condition-${count}`}"
      aria-describedby="${`title-Condition-${count}`}"
    >
      <title id="${`title-Condition-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Condition-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.663 32.639l6.53-6.53a1 1 0 000-1.415l-2.25-2.25a1 1 0 00-1.415 0l-6.53 6.53-6.53-6.53a1 1 0 00-1.414 0l-2.25 2.25a1 1 0 000 1.415l6.53 6.53-6.53 6.53a1 1 0 000 1.414l2.25 2.25a1 1 0 001.414 0l6.53-6.53 6.53 6.53a1 1 0 001.415 0l2.25-2.25a1 1 0 000-1.414zM28.64 4.857l-2.623-1.804a1 1 0 00-1.39.258L13.155 19.993 6.913 13.75a1 1 0 00-1.415 0L3.248 16a1 1 0 000 1.415l9.798 9.798a1 1 0 001.531-.14l14.32-20.826a1 1 0 00-.258-1.39z"
      />
    </svg>
  `;
};
