import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Spam = ({ width = 24, height = 24, hidden = false, title = 'Spam', desc } = {}) => {
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
      aria-labelledby="${`title-Spam-${count}`}"
      aria-describedby="${`title-Spam-${count}`}"
    >
      <title id="${`title-Spam-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Spam-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.818 4H2.182A2.1 2.1 0 000 6v1.387l23.685 17.368a.54.54 0 00.633 0L48 7.387V6a2.1 2.1 0 00-2.182-2zM0 12.161v16.928l13.172-7.27L0 12.161zm21.145 15.506L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h17.956A16.091 16.091 0 0120 36a15.909 15.909 0 012.079-7.869 4.4 4.4 0 01-.934-.464zM48 25.441v-13.28l-10.773 7.9A15.941 15.941 0 0148 25.441zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM27.075 36a8.884 8.884 0 011.65-5.171l12.446 12.446A8.926 8.926 0 0127.075 36zm16.2 5.172L30.829 28.725a8.926 8.926 0 0112.446 12.447z"
      />
    </svg>
  `;
};
