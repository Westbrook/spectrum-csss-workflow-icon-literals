import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Share = ({ width = 24, height = 24, hidden = false, title = 'Share', desc } = {}) => {
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
      aria-labelledby="${`title-Share-${count}`}"
      aria-describedby="${`title-Share-${count}`}"
    >
      <title id="${`title-Share-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Share-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 12h-5.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H40v24H8V16h3a1 1 0 001-1v-2a1 1 0 00-1-1H6a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V14a2 2 0 00-2-2z"
      />
      <path
        d="M23.646 1.146L14.3 10.293A1 1 0 0015 12h5v13a1 1 0 001 1h6a1 1 0 001-1V12h5a1 1 0 00.707-1.707l-9.353-9.147a.5.5 0 00-.708 0z"
      />
    </svg>
  `;
};
