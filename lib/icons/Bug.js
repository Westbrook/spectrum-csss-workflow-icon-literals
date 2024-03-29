import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bug = ({ width = 24, height = 24, hidden = false, title = 'Bug', desc } = {}) => {
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
      aria-labelledby="${`title-Bug-${count}`}"
      aria-describedby="${`title-Bug-${count}`}"
    >
      <title id="${`title-Bug-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Bug-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34.925 9.656A13.066 13.066 0 0024 4a13.067 13.067 0 00-10.926 5.656A15.926 15.926 0 0024 14a15.923 15.923 0 0010.925-4.344zM6.954 8.523L3.4 10.3a24.161 24.161 0 006.1 6.82A36.8 36.8 0 008.156 24H0v4h8.06a18.125 18.125 0 003.34 8.485 20.084 20.084 0 00-6 8.213l3.6 1.8a16.073 16.073 0 015.032-6.934A15.43 15.43 0 0022 43.811V18A19.979 19.979 0 016.954 8.523zM48 28v-4h-8.157a36.8 36.8 0 00-1.348-6.88A24.149 24.149 0 0044.6 10.3l-3.555-1.777A19.979 19.979 0 0126 18v25.811a15.427 15.427 0 007.972-4.247A16.065 16.065 0 0139 46.5l3.6-1.8a20.084 20.084 0 00-6-8.213A18.134 18.134 0 0039.939 28z"
      />
    </svg>
  `;
};
