import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Branch2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Branch2',
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
      aria-labelledby="${`title-Branch2-${count}`}"
      aria-describedby="${`title-Branch2-${count}`}"
    >
      <title id="${`title-Branch2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Branch2-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 30a7.948 7.948 0 00-6.161 2.954l-13.983-7.531a7.121 7.121 0 000-2.846l13.983-7.531A7.958 7.958 0 1030 10a7.987 7.987 0 00.144 1.423L16.16 18.954a8 8 0 100 10.093l13.983 7.531A7.991 7.991 0 1038 30zm0-24.2a4.2 4.2 0 11-4.2 4.2A4.2 4.2 0 0138 5.8zm0 36.4a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2z"
        fill="currentColor"
      />
    </svg>
  `;
};
