import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Briefcase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Briefcase',
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
      aria-labelledby="${`title-Briefcase-${count}`}"
      aria-describedby="${`title-Briefcase-${count}`}"
    >
      <title id="${`title-Briefcase-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Briefcase-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M28 24v3a1 1 0 01-1 1h-6a1 1 0 01-1-1v-3H0v16a2 2 0 002 2h44a2 2 0 002-2V24zm18-12H36V8a4 4 0 00-4-4H16a4 4 0 00-4 4v4H2a2 2 0 00-2 2v6h20v-1a1 1 0 011-1h6a1 1 0 011 1v1h20v-6a2 2 0 00-2-2zM16 8h16v4H16z"
      />
    </svg>
  `;
};
