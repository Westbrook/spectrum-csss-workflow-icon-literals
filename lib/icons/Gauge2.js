import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gauge2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gauge2',
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
      aria-labelledby="${`title-Gauge2-${count}`}"
      aria-describedby="${`title-Gauge2-${count}`}"
    >
      <title id="${`title-Gauge2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gauge2-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8.308 25.05l-2.823-3.42c-.1-.127-.178-.27-.271-.4a19.74 19.74 0 00.623 15.135.994.994 0 001.6.257l1.53-1.53a.991.991 0 00.207-1.079 15.682 15.682 0 01-.866-8.963zm7.461-10.665a15.46 15.46 0 016.038-2.194A15.963 15.963 0 0138.824 34.01a.986.986 0 00.207 1.077l1.529 1.53a.994.994 0 001.6-.257 19.8 19.8 0 001.577-11.56 20 20 0 00-31.111-13.2zm-7.391.498a1.684 1.684 0 00-.178 2.282l13.129 17.324a3.7 3.7 0 005.419.419 3.7 3.7 0 000-5.436L10.667 14.884a1.685 1.685 0 00-2.289-.001z"
      />
    </svg>
  `;
};
