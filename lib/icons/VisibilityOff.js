import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VisibilityOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Visibility Off',
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
      aria-labelledby="${`title-VisibilityOff-${count}`}"
      aria-describedby="${`title-VisibilityOff-${count}`}"
    >
      <title id="${`title-VisibilityOff-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VisibilityOff-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.457 41.628L29.971 27.143A6.713 6.713 0 0030.75 24a6.264 6.264 0 00-.233-1.594 3.5 3.5 0 01-2.961 1.705A3.556 3.556 0 0124 20.555a3.506 3.506 0 011.8-3.025 6.523 6.523 0 00-1.8-.28 6.713 6.713 0 00-3.143.779L6.122 3.293a1 1 0 00-1.415 0L3.293 4.707a1 1 0 000 1.414l7.8 7.8C6.176 17.55 3 22.318 3 24.48c0 4 9.944 14.271 20.915 14.271a21.842 21.842 0 009.6-2.412l8.117 8.118a1 1 0 001.414 0l1.414-1.414a1 1 0 00-.003-1.415zM24 36.3a12.282 12.282 0 01-9.986-19.458l4.015 4.014a6.747 6.747 0 009.115 9.115l4.014 4.015A12.207 12.207 0 0124 36.3zm-3.369-24.121a12.274 12.274 0 0115.19 15.19l4.379 4.383c2.961-2.709 4.8-5.564 4.8-7.272 0-3.152-5.619-9.788-12.183-13.04A19.969 19.969 0 0024 9.249a18.723 18.723 0 00-5.458.841z"
      />
    </svg>
  `;
};
