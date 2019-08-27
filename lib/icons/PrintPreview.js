import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PrintPreview = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Print Preview',
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
      aria-labelledby="${`title-PrintPreview-${count}`}"
      aria-describedby="${`title-PrintPreview-${count}`}"
    >
      <title id="${`title-PrintPreview-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PrintPreview-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 2v10H4L14 2z" />
      <path
        d="M14 32a13.989 13.989 0 0118-13.413V4a2 2 0 00-2-2H18v12a2 2 0 01-2 2H4v20a2 2 0 002 2h9.365A13.921 13.921 0 0114 32z"
      />
      <path
        d="M43.26 43.865l-6.723-6.723a10.1 10.1 0 10-3.395 3.395l6.723 6.723c.469.469 2.5.89 3.395 0a2.445 2.445 0 000-3.395zM21.8 32a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2z"
      />
    </svg>
  `;
};
