import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LocationBasedEvent = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Location Based Event',
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
      aria-labelledby="${`title-LocationBasedEvent-${count}`}"
      aria-describedby="${`title-LocationBasedEvent-${count}`}"
    >
      <title id="${`title-LocationBasedEvent-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LocationBasedEvent-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 15.078A11.678 11.678 0 002.322 26.756C2.322 33.205 14 47.922 14 47.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0014 15.078zm0 16.2a4.525 4.525 0 114.525-4.525A4.525 4.525 0 0114 31.281zM30.5 18a.494.494 0 00-.5.5v24.782a.494.494 0 00.846.353L38 36h8.506c.446 0 .479-.78.225-1.033S30.846 18.148 30.846 18.148A.49.49 0 0030.5 18z"
      />
      <path d="M4 4v10.755a15.241 15.241 0 014-2.526V8h30v12l4 4V4z" />
    </svg>
  `;
};
