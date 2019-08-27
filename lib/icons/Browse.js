import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Browse = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Browse',
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
      aria-labelledby="${`title-Browse-${count}`}"
      aria-describedby="${`title-Browse-${count}`}"
    >
      <title id="${`title-Browse-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Browse-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.91 28.25S39.024 11.707 38 9c-.978-2.583-2.238-5-5-5-3.1 0-4.707 2.244-5 5a490.06 490.06 0 00-.484 5h-7.037c-.269-2.857-.468-4.871-.479-5-.244-2.8-1.366-5-5-5-2.762 0-3.9 2.467-5 5C9.122 11.024.889 28.622.889 28.622h.02A11 11 0 1022 33c0-.338-.021-.67-.05-1h4.1c-.03.33-.05.662-.05 1a11 11 0 1020.91-4.75zM11 40.2a7.2 7.2 0 117.2-7.2 7.2 7.2 0 01-7.2 7.2zm26 0a7.2 7.2 0 117.2-7.2 7.2 7.2 0 01-7.2 7.2z"
        fill="currentColor"
      />
    </svg>
  `;
};
