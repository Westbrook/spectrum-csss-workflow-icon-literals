import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Share',
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
      aria-labelledby="${`title-UserShare-${count}`}"
      aria-describedby="${`title-UserShare-${count}`}"
    >
      <title id="${`title-UserShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 32a6 6 0 016-6h2v-4a2.638 2.638 0 01.462-1.419 16.806 16.806 0 002.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 003.126 9.469 1.949 1.949 0 01.434 1.2v2.683a1.947 1.947 0 01-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h16zm23.722-5.669L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
      <path
        d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
