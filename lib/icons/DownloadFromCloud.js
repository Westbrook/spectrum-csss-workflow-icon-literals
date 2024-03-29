import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DownloadFromCloud = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download From Cloud',
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
      aria-labelledby="${`title-DownloadFromCloud-${count}`}"
      aria-describedby="${`title-DownloadFromCloud-${count}`}"
    >
      <title id="${`title-DownloadFromCloud-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DownloadFromCloud-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22 38h-6.2a.8.8 0 00-.8.8.782.782 0 00.2.526l8.445 8.525a.5.5 0 00.7 0l8.455-8.52a.782.782 0 00.2-.526.8.8 0 00-.8-.8H26V32h-4zm15.5-21.016a7.392 7.392 0 00-.846.048 9.5 9.5 0 10-18.575-3.775A8 8 0 008.27 23.05a4.5 4.5 0 10-.77 8.934L22 32V20.984a1 1 0 011-1h2a1 1 0 011 1V32l11.5-.016a7.5 7.5 0 000-15z"
      />
    </svg>
  `;
};
