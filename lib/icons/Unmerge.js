import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Unmerge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Unmerge',
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
      aria-labelledby="${`title-Unmerge-${count}`}"
      aria-describedby="${`title-Unmerge-${count}`}"
    >
      <title id="${`title-Unmerge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Unmerge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M37.332 26.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V32H24V14h12v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7L37.332 2.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V8H20a2 2 0 00-2 2v10H5a1 1 0 00-1 1v4a1 1 0 001 1h13v10a2 2 0 002 2h16v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7z"
        fill="currentColor"
      />
    </svg>
  `;
};
