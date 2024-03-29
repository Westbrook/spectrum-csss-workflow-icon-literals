import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Looks = ({ width = 24, height = 24, hidden = false, title = 'Looks', desc } = {}) => {
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
      aria-labelledby="${`title-Looks-${count}`}"
      aria-describedby="${`title-Looks-${count}`}"
    >
      <title id="${`title-Looks-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Looks-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.662 18.267c.011-.22.034-.436.034-.658a13.7 13.7 0 10-27.392 0c0 .222.023.438.034.658A13.688 13.688 0 1023 41.962a13.687 13.687 0 1013.662-23.7zM23 37.341a10.048 10.048 0 01-2.759-6.315 13.83 13.83 0 005.518 0A10.048 10.048 0 0123 37.341zm0-9.641a10.054 10.054 0 01-2.343-.285A10.078 10.078 0 0123 23.442a10.089 10.089 0 012.343 3.977A10.054 10.054 0 0123 27.7zm-5.649-1.732a10.141 10.141 0 01-4-5.391 9.906 9.906 0 016.721.727 13.679 13.679 0 00-2.721 4.668zm8.576-4.664a9.906 9.906 0 016.721-.727 10.141 10.141 0 01-4 5.391 13.679 13.679 0 00-2.721-4.66zM23 7.513a10.1 10.1 0 0110.063 9.461A13.77 13.77 0 0030.3 16.7a13.619 13.619 0 00-7.3 2.12 13.619 13.619 0 00-7.3-2.12 13.77 13.77 0 00-2.759.278A10.1 10.1 0 0123 7.513zM5.6 30.391a10.1 10.1 0 014.447-8.363 13.722 13.722 0 006.595 7.705c-.011.22-.033.436-.033.658a13.629 13.629 0 003.464 9.083A10.071 10.071 0 015.6 30.391zm24.7 10.1a10.012 10.012 0 01-4.377-1.013 13.629 13.629 0 003.464-9.083c0-.222-.022-.438-.033-.658a13.722 13.722 0 006.6-7.705A10.093 10.093 0 0130.3 40.487z"
        fill="currentColor"
      />
    </svg>
  `;
};
