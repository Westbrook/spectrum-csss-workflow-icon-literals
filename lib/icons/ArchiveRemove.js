import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArchiveRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Archive Remove',
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
      aria-labelledby="${`title-ArchiveRemove-${count}`}"
      aria-describedby="${`title-ArchiveRemove-${count}`}"
    >
      <title id="${`title-ArchiveRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArchiveRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="8" rx="2" ry="2" width="40" y="4" />
      <path
        d="M36 24.1a11.85 11.85 0 100 23.7 11.85 11.85 0 000-23.7zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"
      />
      <path
        d="M13 28a1 1 0 01-1-1v-6a1 1 0 011-1h14a1 1 0 011 1v1.275a15.806 15.806 0 018-2.175V16H4v18a2 2 0 002 2h14.1a15.806 15.806 0 012.175-8z"
      />
    </svg>
  `;
};
