import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tips = ({ width = 24, height = 24, hidden = false, title = 'Tips', desc } = {}) => {
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
      aria-labelledby="${`title-Tips-${count}`}"
      aria-describedby="${`title-Tips-${count}`}"
    >
      <title id="${`title-Tips-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Tips-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.4 14.151C38.4 6.554 31.942.4 23.981.4a15.068 15.068 0 00-2.891.28A14.713 14.713 0 009.6 14.253c0 7.278 6.56 11.14 6.56 17.747v2h15.68v-2c0-6.672 6.56-10.731 6.56-17.849zM16 38v2.489a2 2 0 00.478 1.3l4.7 5.511a2 2 0 001.522.7h2.6a2 2 0 001.522-.7l4.7-5.511a2 2 0 00.478-1.3V38z"
      />
    </svg>
  `;
};
