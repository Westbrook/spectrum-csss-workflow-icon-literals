import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FullScreen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Full Screen',
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
      aria-labelledby="${`title-FullScreen-${count}`}"
      aria-describedby="${`title-FullScreen-${count}`}"
    >
      <title id="${`title-FullScreen-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FullScreen-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="24" rx="2" ry="2" width="28" x="10" y="12" />
      <path
        d="M42 34.5V40h-5.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H46v-9.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zM6 40v-5.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V44h9.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM36 4.5v3a.5.5 0 00.5.5H42v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V4h-9.5a.5.5 0 00-.5.5zM6 8h5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H2v9.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5z"
      />
    </svg>
  `;
};
