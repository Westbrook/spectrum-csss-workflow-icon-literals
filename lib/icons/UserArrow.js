import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserArrow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Arrow',
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
      aria-labelledby="${`title-UserArrow-${count}`}"
      aria-describedby="${`title-UserArrow-${count}`}"
    >
      <title id="${`title-UserArrow-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserArrow-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.681 26.365a1.949 1.949 0 01-1.657-1.886v-2.694a1.957 1.957 0 01.438-1.2 16.806 16.806 0 002.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 003.126 9.469 1.949 1.949 0 01.434 1.2v2.683a1.81 1.81 0 01-.159.714L31.9 36.033 27.55 40H44v-2.4c0-2.782-1.59-10.024-12.319-11.235z"
      />
      <path
        d="M14.874 25.622a.5.5 0 00-.874.332V32H5a1 1 0 00-1 1v6a1 1 0 001 1h9v5.818a.5.5 0 00.874.332L26 36z"
      />
    </svg>
  `;
};
