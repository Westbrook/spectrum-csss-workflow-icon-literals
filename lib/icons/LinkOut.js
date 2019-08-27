import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinkOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Link Out',
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
      aria-labelledby="${`title-LinkOut-${count}`}"
      aria-describedby="${`title-LinkOut-${count}`}"
    >
      <title id="${`title-LinkOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LinkOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.5 4H30a1 1 0 00-1 1.007.978.978 0 00.295.7l3.671 3.672-9.378 9.379a1 1 0 000 1.414l4.242 4.242a1 1 0 001.414 0l9.379-9.378 3.672 3.671a.978.978 0 00.7.295A1 1 0 0044 18V4.5a.5.5 0 00-.5-.5z"
      />
      <path
        d="M40 27v13H8V8h13a1 1 0 001-1V5a1 1 0 00-1-1H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V27a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
