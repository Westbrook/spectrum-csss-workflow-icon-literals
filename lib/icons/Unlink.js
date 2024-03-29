import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Unlink = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Unlink',
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
      aria-labelledby="${`title-Unlink-${count}`}"
      aria-describedby="${`title-Unlink-${count}`}"
    >
      <title id="${`title-Unlink-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Unlink-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14.848 12.698l-1.994 1.919-7.105-6.986 1.995-1.92 7.104 6.987zm27.553 27.671l-1.994 1.92-7.066-7.113 1.994-1.919 7.066 7.112zM14.743 2.4h3.086v6.171h-3.086zM2.4 14.743h6.171v3.086H2.4zm37.029 15.428H45.6v3.086h-6.171zm-9.258 9.258h3.086V45.6h-3.086zM42.1 5.905a10.913 10.913 0 00-15.434 0c-.408.408-4.427 4.4-6.545 6.5l3.312 3.312c2.183-2.166 6.349-6.309 6.541-6.5a6.236 6.236 0 118.819 8.819l-6.521 6.521 3.307 3.307 6.521-6.526a10.912 10.912 0 000-15.433zM24.529 32.243c-2.152 2.173-6.3 6.349-6.5 6.545a6.236 6.236 0 11-8.819-8.819l6.521-6.522-3.305-3.307-6.521 6.522A10.913 10.913 0 0021.339 42.1c.418-.418 4.4-4.438 6.491-6.551z"
      />
    </svg>
  `;
};
