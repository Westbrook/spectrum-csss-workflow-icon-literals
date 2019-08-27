import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectBox = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Box',
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
      aria-labelledby="${`title-SelectBox-${count}`}"
      aria-describedby="${`title-SelectBox-${count}`}"
    >
      <title id="${`title-SelectBox-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectBox-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 4H10a6 6 0 00-6 6v28a6 6 0 006 6h28a6 6 0 006-6V10a6 6 0 00-6-6zm-.443 12.971l-17.85 17.847a1 1 0 01-1.414 0l-7.85-7.848a1 1 0 010-1.414l3.113-3.113a1 1 0 011.414 0L19 26.475l14.029-14.032a1 1 0 011.414 0l3.113 3.113a1 1 0 01.001 1.415z"
        fill="currentColor"
      />
    </svg>
  `;
};
