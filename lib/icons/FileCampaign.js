import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileCampaign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Campaign',
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
      aria-labelledby="${`title-FileCampaign-${count}`}"
      aria-describedby="${`title-FileCampaign-${count}`}"
    >
      <title id="${`title-FileCampaign-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileCampaign-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 39a13 13 0 0113-13c.338 0 .669.025 1 .051V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h17a12.949 12.949 0 01-1-5z"
      />
      <path
        d="M36.5 39a2.5 2.5 0 112.5 2.5 2.5 2.5 0 01-2.5-2.5zm8.4-1H48a9.144 9.144 0 00-8-8v3.1a5.98 5.98 0 014.9 4.9zM30 38h3.1a5.98 5.98 0 014.9-4.9V30a9.144 9.144 0 00-8 8zm10 6.9V48a9.144 9.144 0 008-8h-3.1a5.98 5.98 0 01-4.9 4.9zM33.1 40H30a9.144 9.144 0 008 8v-3.1a5.98 5.98 0 01-4.9-4.9z"
      />
    </svg>
  `;
};
