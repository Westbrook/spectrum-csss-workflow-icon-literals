import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailKeyOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Key Outline',
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
      aria-labelledby="${`title-EmailKeyOutline-${count}`}"
      aria-describedby="${`title-EmailKeyOutline-${count}`}"
    >
      <title id="${`title-EmailKeyOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailKeyOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.8 38H4v-2.809l14.182-8.566 3.945 3.156a2.981 2.981 0 003.747 0l2.344-1.875a10.323 10.323 0 01-.371-2.262l-3.222 2.575a1 1 0 01-1.249 0L4 12.7V10h40v2.731l-1.61 1.287A12.609 12.609 0 0148 16.564V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h31.8zM4 15.265l12.516 10.028L4 32.854z"
      />
      <path
        d="M48 25c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.258 2.556 5.972 6 6.752V47a1 1 0 001 1h6.5a.5.5 0 00.5-.5v-3.638a.5.5 0 00-.5-.5H42V42h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H42v-6.248c3.444-.78 6-3.494 6-6.752zm-8 .774a2.4 2.4 0 112.4-2.4 2.4 2.4 0 01-2.4 2.4z"
      />
    </svg>
  `;
};
