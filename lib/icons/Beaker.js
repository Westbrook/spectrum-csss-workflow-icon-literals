import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Beaker = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Beaker',
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
      aria-labelledby="${`title-Beaker-${count}`}"
      aria-describedby="${`title-Beaker-${count}`}"
    >
      <title id="${`title-Beaker-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Beaker-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.61 40.424l-8.963-20.915A8 8 0 0132 16.358V8a2 2 0 002-2V4a2 2 0 00-2-2H16a2 2 0 00-2 2v2a2 2 0 002 2v8.358a8.014 8.014 0 01-.647 3.151L6.389 40.424A4 4 0 0010.066 46h27.867a4 4 0 003.677-5.576zM14.272 32l4.78-11.3A12.006 12.006 0 0020 16.022V8h8v8.059a12 12 0 00.919 4.607l2.444 5.879z"
        fill="currentColor"
      />
    </svg>
  `;
};
