import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ColorWheel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Color Wheel',
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
      aria-labelledby="${`title-ColorWheel-${count}`}"
      aria-describedby="${`title-ColorWheel-${count}`}"
    >
      <title id="${`title-ColorWheel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ColorWheel-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.2A19.8 19.8 0 1043.8 24 19.8 19.8 0 0024 4.2zM24 40a15.991 15.991 0 01-11.324-27.291L24 23.99V8a16 16 0 110 32z"
        fill="currentColor"
      />
      <path
        d="M35.3 12.683L24 24h16a15.952 15.952 0 00-4.7-11.317z"
        opacity=".2"
        fill="currentColor"
      />
      <path d="M24 24l11.287 11.331A16 16 0 0040 24z" opacity=".33" fill="currentColor" />
      <path d="M24 24v16a15.946 15.946 0 0011.284-4.671z" opacity=".47" fill="currentColor" />
      <path d="M24 40V24L12.685 35.3A15.947 15.947 0 0024 40z" opacity=".6" fill="currentColor" />
      <path d="M24 24H8a15.948 15.948 0 004.685 11.3z" opacity=".7" fill="currentColor" />
      <path d="M12.674 12.711A15.95 15.95 0 008 24h16z" opacity=".8" fill="currentColor" />
    </svg>
  `;
};
