import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Asterisk = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Asterisk',
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
      aria-labelledby="${`title-Asterisk-${count}`}"
      aria-describedby="${`title-Asterisk-${count}`}"
    >
      <title id="${`title-Asterisk-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Asterisk-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M37.9 37.8c.3.3.5.7 0 1.1l-6.2 4c-.5.3-.7.1-.9-.4l-7.7-13.4L13 40.2c-.1.2-.4.4-.7 0l-4.8-5c-.5-.3-.4-.6 0-.9l11.4-9.5-13-4.9c-.2 0-.5-.4-.3-.9L9 12.2a.526.526 0 01.9-.2l11.4 7.4.7-14.6a.526.526 0 01.6-.6l8.3 1.1c.5 0 .6.2.5.7l-3.9 14.3 13.2-4c.3-.2.6-.2.8.4l1.3 7.4c.1.5 0 .7-.4.7l-13.8 1.1z"
        fill="currentColor"
      />
    </svg>
  `;
};
