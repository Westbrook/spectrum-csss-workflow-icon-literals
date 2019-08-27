import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Label = ({ width = 24, height = 24, hidden = false, title = 'Label', desc } = {}) => {
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
      aria-labelledby="${`title-Label-${count}`}"
      aria-describedby="${`title-Label-${count}`}"
    >
      <title id="${`title-Label-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Label-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.4 24.669L23.318 4.586A2 2 0 0021.9 4H6a2 2 0 00-2 2v15.9a2 2 0 00.586 1.414L24.68 43.413a2 2 0 002.829 0L43.4 27.5a2 2 0 000-2.831zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  `;
};
