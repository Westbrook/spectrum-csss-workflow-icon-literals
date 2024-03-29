import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CropLightning = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Crop Lightning',
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
      aria-labelledby="${`title-CropLightning-${count}`}"
      aria-describedby="${`title-CropLightning-${count}`}"
    >
      <title id="${`title-CropLightning-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CropLightning-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 20.506a16.063 16.063 0 016-.381V12a2 2 0 00-2-2H20v6h12zM20 36a15.99 15.99 0 01.506-4H16V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6H4a2 2 0 00-2 2v2a2 2 0 002 2h6v20a2 2 0 002 2h8.125A16.113 16.113 0 0120 36zm16-12a12 12 0 1012 12 12 12 0 00-12-12zm5.119 12.938l-7.434 8.5a.769.769 0 01-1.288-.8l2.508-5.955-3.548-1.523a1.328 1.328 0 01-.475-2.094l7.434-8.5a.769.769 0 011.288.8L37.1 33.322l3.548 1.523a1.328 1.328 0 01.471 2.093z"
      />
    </svg>
  `;
};
