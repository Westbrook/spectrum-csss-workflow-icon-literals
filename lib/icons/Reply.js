import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Reply = ({ width = 24, height = 24, hidden = false, title = 'Reply', desc } = {}) => {
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
      aria-labelledby="${`title-Reply-${count}`}"
      aria-describedby="${`title-Reply-${count}`}"
    >
      <title id="${`title-Reply-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Reply-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.147 14H20V7a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-14 14a1 1 0 000 1.494l14 14a.979.979 0 00.658.255A1 1 0 0020 35v-7c10-2 18 4 22.48 9.65a.842.842 0 001.52-.5C44 33.43 39.891 14 20.147 14z"
        fill="currentColor"
      />
    </svg>
  `;
};
