import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageGear = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Gear',
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
      aria-labelledby="${`title-PageGear-${count}`}"
      aria-describedby="${`title-PageGear-${count}`}"
    >
      <title id="${`title-PageGear-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageGear-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.1 32.207h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V21.9a.9.9 0 00-.9-.9H33.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H21.9a.9.9 0 00-.9.9V34.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V46.1a.9.9 0 00.9.9H34.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H46.1a.9.9 0 00.9-.9V33.1a.9.9 0 00-.9-.893zM34 37.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
      <path
        d="M18.524 38H6V14h36v6.158a16.035 16.035 0 014 3.283V8a2 2 0 00-2-2H4a2 2 0 00-2 2v32a2 2 0 002 2h16.158a15.862 15.862 0 01-1.634-4z"
      />
    </svg>
  `;
};
