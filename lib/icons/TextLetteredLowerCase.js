import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextLetteredLowerCase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Lettered Lower Case',
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
      aria-labelledby="${`title-TextLetteredLowerCase-${count}`}"
      aria-describedby="${`title-TextLetteredLowerCase-${count}`}"
    >
      <title id="${`title-TextLetteredLowerCase-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextLetteredLowerCase-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="26" x="18" y="8" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="40" />
      <path
        d="M13.975 9.617c0 .436 0 .825.025 1.261 0 .045 0 .068-.049.09A12.482 12.482 0 018.876 12C6.163 12 4 10.856 4 8.336c0-2.427 2.513-3.571 5.781-3.571.954 0 1.531.044 1.783.067v-.411c0-.619-.353-2.106-2.839-2.106A8.09 8.09 0 005.359 3c-.076.022-.178 0-.178-.115V1.26c0-.092.028-.137.126-.207A9.942 9.942 0 019.1.368c3.439 0 4.872 1.991 4.872 4.441zm-2.411-3.068a14.852 14.852 0 00-1.657-.067c-2.388 0-3.495.685-3.495 1.854 0 .985.755 1.877 2.89 1.877a6.259 6.259 0 002.262-.389zM6 14c.132 0 .175 0 .175.115v4.475a7.594 7.594 0 012.369-.345c3.206 0 5.267 1.959 5.267 4.513 0 3.476-3.2 5.242-6.427 5.242a11.51 11.51 0 01-3.228-.4.209.209 0 01-.156-.177V14.115c0-.1.065-.115.153-.115zm2.172 5.857a5.691 5.691 0 00-2 .307v6.107a5.884 5.884 0 001.383.134c2.107 0 4.039-1.152 4.039-3.476.006-1.843-1.317-3.072-3.423-3.072zM14 43.454c0 .092-.026.137-.131.184a9.968 9.968 0 01-3.017.367C6.414 44.005 4 41.348 4 38.235c0-3.39 2.914-5.862 7.272-5.862a8.119 8.119 0 012.6.274.207.207 0 01.131.229l-.026 1.67c0 .14-.077.14-.182.114a7.279 7.279 0 00-2.495-.341c-2.7 0-4.646 1.441-4.646 3.823 0 2.632 2.232 3.846 4.646 3.846a8.564 8.564 0 002.52-.274c.132-.045.183 0 .183.092z"
      />
    </svg>
  `;
};
