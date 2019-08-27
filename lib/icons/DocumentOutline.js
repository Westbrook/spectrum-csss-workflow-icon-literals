import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DocumentOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Document Outline',
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
      aria-labelledby="${`title-DocumentOutline-${count}`}"
      aria-describedby="${`title-DocumentOutline-${count}`}"
    >
      <title id="${`title-DocumentOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DocumentOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26.18 4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V17.82a4 4 0 00-1.172-2.828l-9.82-9.82A4 4 0 0026.18 4zM36 40H12V8h12v10a2 2 0 002 2h10zm-8-24V9.82L34.18 16z"
        fill="currentColor"
      />
    </svg>
  `;
};
