import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Ribbon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Ribbon',
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
      aria-labelledby="${`title-Ribbon-${count}`}"
      aria-describedby="${`title-Ribbon-${count}`}"
    >
      <title id="${`title-Ribbon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Ribbon-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M13.85 31.027l-4.921 9.932a1.151 1.151 0 001.418 1.6l4.264-1.521a1.153 1.153 0 011.472.7L17.6 46a1.151 1.151 0 002.133.088l3.118-6.878-2.351-4.946a15.961 15.961 0 01-6.65-3.237zm25.221 9.932l-4.921-9.933A15.928 15.928 0 0124 34.66c-.383 0-.759-.031-1.135-.058l5.4 11.483A1.151 1.151 0 0030.4 46l1.521-4.265a1.153 1.153 0 011.472-.7l4.264 1.521a1.151 1.151 0 001.414-1.597zM24 5.659a13 13 0 1013 13 13 13 0 00-13-13zm0 21a8 8 0 118-8 8 8 0 01-8 8z"
      />
    </svg>
  `;
};
