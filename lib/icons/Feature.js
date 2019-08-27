import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Feature = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Feature',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-Feature-${count}`}"
      aria-describedby="${`title-Feature-${count}`}"
    >
      <title id="${`title-Feature-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Feature-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 2.933A21.067 21.067 0 1045.067 24 21.067 21.067 0 0024 2.933zM40.271 19.7L31.3 26.888l3.032 11.078a.473.473 0 01-.724.525L24 32.192 14.392 38.5a.473.473 0 01-.724-.525L16.7 26.888 7.731 19.7a.474.474 0 01.277-.852l11.48-.544 4.067-10.753a.474.474 0 01.895 0L28.516 18.3 40 18.847a.474.474 0 01.275.852z"
        fill="currentColor"
      />
    </svg>
  `;
};
