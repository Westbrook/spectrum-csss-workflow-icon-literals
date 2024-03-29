import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StraightenOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Straighten Outline',
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
      aria-labelledby="${`title-StraightenOutline-${count}`}"
      aria-describedby="${`title-StraightenOutline-${count}`}"
    >
      <title id="${`title-StraightenOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StraightenOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="10" cy="13.8" r="2.2" />
      <circle cx="38" cy="13.8" r="2.2" />
      <circle cx="24" cy="5.8" r="2.2" />
      <circle cx="16" cy="7.8" r="2.2" />
      <circle cx="32" cy="7.8" r="2.2" />
      <path
        d="M46 20H2a2 2 0 00-2 2v16a2 2 0 002 2h44a2 2 0 002-2V22a2 2 0 00-2-2zm-15.872 4A6.868 6.868 0 0124 28.2a6.868 6.868 0 01-6.128-4.2zM4 36V24h4v12zm8 0V24h2.2a10 10 0 0019.6 0H36v12zm32 0h-4V24h4z"
      />
    </svg>
  `;
};
