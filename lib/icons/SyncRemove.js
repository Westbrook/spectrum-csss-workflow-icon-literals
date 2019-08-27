import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SyncRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sync Remove',
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
      aria-labelledby="${`title-SyncRemove-${count}`}"
      aria-describedby="${`title-SyncRemove-${count}`}"
    >
      <title id="${`title-SyncRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SyncRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M11.9 24.2a11.9 11.9 0 1011.9 11.9 11.9 11.9 0 00-11.9-11.9zm8.132 17.2a.5.5 0 010 .707l-2.122 2.124a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0L3.768 42.11a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.128a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3zM30 19v-8a1 1 0 00-1-1H14V3.207a.5.5 0 00-.854-.353L.6 15l6.142 5.946A15.375 15.375 0 0114 20.124V20h15a1 1 0 001-1zm4.854-2.146a.5.5 0 00-.854.353V24H22.62a15.846 15.846 0 015.256 10H34v6.793a.5.5 0 00.854.353L47.4 29z"
      />
    </svg>
  `;
};
