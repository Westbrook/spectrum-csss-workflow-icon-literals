import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Launch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Launch',
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
      aria-labelledby="${`title-Launch-${count}`}"
      aria-describedby="${`title-Launch-${count}`}"
    >
      <title id="${`title-Launch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Launch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.751 2.461a42.443 42.443 0 00-31.035 26.416.638.638 0 00.153.665l4.585 4.586a.64.64 0 00.662.154c2.895-.982 21.354-8.114 26.419-31.038a.665.665 0 00-.784-.783zM11.53 25.4H3.1a.641.641 0 01-.562-.957C4.471 21.077 11.68 9.968 22.592 9.968 20.06 12.5 11.731 23.474 11.53 25.4zM22.592 36.464v8.443a.64.64 0 00.952.564c3.364-1.9 14.482-9.015 14.482-20.068-2.532 2.532-13.505 10.86-15.434 11.061z"
      />
    </svg>
  `;
};
