import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PinOn = ({ width = 24, height = 24, hidden = false, title = 'Pin On', desc } = {}) => {
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
      aria-labelledby="${`title-PinOn-${count}`}"
      aria-describedby="${`title-PinOn-${count}`}"
    >
      <title id="${`title-PinOn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PinOn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8.375 36.719l2.938 2.937-3.747 3.658A1 1 0 016.14 43.3l-1.433-1.5a1 1 0 01.014-1.4zm15.186 5.334h.009l.051-7.442 10.236-10.234 2.8-.03.006-.011a1.785 1.785 0 001.248-3.048l-5.6-5.6-5.6-5.6a1.785 1.785 0 00-3.047 1.248h-.01l-.033 2.8-10.232 10.242-7.44.054v.008a1.761 1.761 0 00-1.363.511 1.785 1.785 0 000 2.527l7.971 7.971 7.968 7.971a1.78 1.78 0 003.04-1.367z"
      />
    </svg>
  `;
};
