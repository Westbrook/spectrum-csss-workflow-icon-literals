import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ExperienceAddTo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Experience Add To',
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
      aria-labelledby="${`title-ExperienceAddTo-${count}`}"
      aria-describedby="${`title-ExperienceAddTo-${count}`}"
    >
      <title id="${`title-ExperienceAddTo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ExperienceAddTo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 36h-8v-4h8v-4h-8v-4h24V6a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h22zM4 8h32v12H4zm8 28H4V24h8z"
      />
      <path
        d="M47.688 41.688l-6.826-6.826 5.972-6.011a.5.5 0 00-.357-.85H28v18.641a.5.5 0 00.854.358l6.008-6.139 6.826 6.826a1 1 0 001.414 0l4.586-4.587a1 1 0 000-1.412z"
      />
    </svg>
  `;
};
