import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DragHandle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Drag Handle',
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
      aria-labelledby="${`title-DragHandle-${count}`}"
      aria-describedby="${`title-DragHandle-${count}`}"
    >
      <title id="${`title-DragHandle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DragHandle-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="14" r="2" />
      <circle cx="18" cy="22" r="2" />
      <circle cx="18" cy="30" r="2" />
      <circle cx="18" cy="38" r="2" />
      <circle cx="26" cy="6" r="2" />
      <circle cx="26" cy="14" r="2" />
      <circle cx="26" cy="22" r="2" />
      <circle cx="26" cy="30" r="2" />
      <circle cx="26" cy="38" r="2" />
    </svg>
  `;
};
