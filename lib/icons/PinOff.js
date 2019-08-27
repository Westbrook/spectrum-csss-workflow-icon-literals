import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PinOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pin Off',
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
      aria-labelledby="${`title-PinOff-${count}`}"
      aria-describedby="${`title-PinOff-${count}`}"
    >
      <title id="${`title-PinOff-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PinOff-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16.375 28.719l2.938 2.937L6.844 44.031 2 46l2.031-4.906 12.344-12.375zm15.186 5.334h.009l.051-7.442 10.236-10.234 2.8-.03.006-.011a1.785 1.785 0 001.248-3.048l-5.6-5.6-5.6-5.6a1.785 1.785 0 00-3.047 1.248h-.01l-.033 2.8-10.232 10.242-7.44.054v.008a1.761 1.761 0 00-1.363.511 1.785 1.785 0 000 2.527l7.971 7.971 7.968 7.971a1.78 1.78 0 003.04-1.367z"
      />
    </svg>
  `;
};
