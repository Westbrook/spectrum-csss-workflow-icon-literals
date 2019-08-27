import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SaveFloppy = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Save Floppy',
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
      aria-labelledby="${`title-SaveFloppy-${count}`}"
      aria-describedby="${`title-SaveFloppy-${count}`}"
    >
      <title id="${`title-SaveFloppy-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SaveFloppy-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M24 4h6v8h-6z" />
      <path d="M36 4h-2v12H16V4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V12zm2 36H10V24h28z" />
    </svg>
  `;
};
