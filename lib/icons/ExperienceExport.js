import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ExperienceExport = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Experience Export',
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
      aria-labelledby="${`title-ExperienceExport-${count}`}"
      aria-describedby="${`title-ExperienceExport-${count}`}"
    >
      <title id="${`title-ExperienceExport-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ExperienceExport-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 38H16v-4h8v-4h-8v-4h8v-4H4V10h36V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h36a2 2 0 002-2zm-28 0H4V26h8z"
      />
      <path
        d="M36 20v-5.341a.5.5 0 01.864-.343L46.548 24l-9.685 9.684a.5.5 0 01-.863-.343V28h-7a1 1 0 01-1-1v-6a1 1 0 011-1z"
      />
    </svg>
  `;
};
