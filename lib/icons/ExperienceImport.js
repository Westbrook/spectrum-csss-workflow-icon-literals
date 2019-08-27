import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ExperienceImport = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Experience Import',
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
      aria-labelledby="${`title-ExperienceImport-${count}`}"
      aria-describedby="${`title-ExperienceImport-${count}`}"
    >
      <title id="${`title-ExperienceImport-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ExperienceImport-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 6H10a2 2 0 00-2 2v2h36v12H20v16H8v2a2 2 0 002 2h36a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H24v-4h20zm0-8H24v-4h20z"
      />
      <path
        d="M8 20v-5.341a.5.5 0 01.864-.343L18 24l-9.136 9.684A.5.5 0 018 33.341V28H1a1 1 0 01-1-1v-6a1 1 0 011-1z"
      />
    </svg>
  `;
};
