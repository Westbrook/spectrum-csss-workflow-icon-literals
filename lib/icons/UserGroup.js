import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserGroup = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Group',
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
      aria-labelledby="${`title-UserGroup-${count}`}"
      aria-describedby="${`title-UserGroup-${count}`}"
    >
      <title id="${`title-UserGroup-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserGroup-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.424 27.7c-1.865-.162-1.895-1.655-1.895-3.516 0 0 4-4.443 4-10.093C38.529 7.976 35.033 4 30 4a8.336 8.336 0 00-3.233.645C30.025 7.2 32 11.462 32 16.7a20.021 20.021 0 01-2.774 9.813.956.956 0 00.512 1.382c4.5 1.532 10.234 5.261 11.921 12.066h4.5a1.8 1.8 0 001.818-2.029C46.752 30.483 38.884 27.91 36.424 27.7z"
      />
      <path
        d="M36.057 44a1.905 1.905 0 001.92-2.142c-1.295-7.858-9.6-10.573-12.2-10.8-1.969-.171-2-1.747-2-3.711 0 0 4.221-4.69 4.221-10.654 0-6.452-3.689-10.65-9-10.65s-9 4.2-9 10.65c0 5.964 4.221 10.654 4.221 10.654 0 1.964-.031 3.54-2 3.711-2.6.224-10.9 2.939-12.2 10.8A1.905 1.905 0 001.943 44z"
      />
    </svg>
  `;
};
