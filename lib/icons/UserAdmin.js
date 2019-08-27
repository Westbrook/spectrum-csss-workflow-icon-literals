import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserAdmin = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Admin',
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
      aria-labelledby="${`title-UserAdmin-${count}`}"
      aria-describedby="${`title-UserAdmin-${count}`}"
    >
      <title id="${`title-UserAdmin-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserAdmin-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19 34.9a15.84 15.84 0 015.024-11.577v-1.538a1.954 1.954 0 01.438-1.2 13.147 13.147 0 001.82-3.4 17.1 17.1 0 001.252-6.066c0-3.3-.854-5.778-2.33-7.429a7.625 7.625 0 00-6-2.46 7.629 7.629 0 00-6.006 2.46c-1.477 1.651-2.33 4.128-2.33 7.43a17.075 17.075 0 001.253 6.066 13.111 13.111 0 001.82 3.4 1.959 1.959 0 01.437 1.2v2.694a1.751 1.751 0 01-.224.837l.018.021a1.891 1.891 0 01-1.414 1.016C2.07 27.494 0 34.7 0 37.6V40h19.851A15.848 15.848 0 0119 34.9zm28.1-1.693h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V22.9a.9.9 0 00-.9-.9H34.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H22.9a.9.9 0 00-.9.9V35.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V47.1a.9.9 0 00.9.9H35.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H47.1a.9.9 0 00.9-.9V34.1a.9.9 0 00-.9-.893zM35 38.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
    </svg>
  `;
};