import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MobileServices = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Mobile Services',
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
      aria-labelledby="${`title-MobileServices-${count}`}"
      aria-describedby="${`title-MobileServices-${count}`}"
    >
      <title id="${`title-MobileServices-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MobileServices-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 8H6a4 4 0 00-4 4v24a4 4 0 004 4h36a4 4 0 004-4V12a4 4 0 00-4-4zm-2 28H6V12h34zm3-9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
      <path
        d="M9.525 32.959a1.643 1.643 0 01-.9-.553 1.485 1.485 0 01.242-2.156l5.842-4.514a.83.83 0 011.119.114l2.924 3.319 6.644-9.216a.822.822 0 011.382.121l2.554 5.026 5.755-10.244a1.62 1.62 0 012.185-.536 1.523 1.523 0 01.6 2.107l-8 13.947a.819.819 0 01-1.424-.056l-2.727-5.361-6.087 8.443a.821.821 0 01-1.27.043l-3.458-3.922-4.029 3.16a1.637 1.637 0 01-1.352.278z"
      />
    </svg>
  `;
};
