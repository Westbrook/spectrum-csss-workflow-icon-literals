import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CallCenter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Call Center',
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
      aria-labelledby="${`title-CallCenter-${count}`}"
      aria-describedby="${`title-CallCenter-${count}`}"
    >
      <title id="${`title-CallCenter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CallCenter-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 20h-2a16 16 0 00-32 0H6a4 4 0 00-4 4v8a4 4 0 004 4h6V20h-.1a12.1 12.1 0 0124.2 0H36v15.117a13.956 13.956 0 01-8.54 6.4A4.336 4.336 0 0024 40c-2.209 0-4 1.343-4 3s1.791 3 4 3c1.977 0 3.608-1.078 3.931-2.492A16 16 0 0037.826 36H42a4 4 0 004-4v-8a4 4 0 00-4-4z"
        fill="currentColor"
      />
    </svg>
  `;
};
