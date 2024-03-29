import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PeopleGroup = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'People Group',
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
      aria-labelledby="${`title-PeopleGroup-${count}`}"
      aria-describedby="${`title-PeopleGroup-${count}`}"
    >
      <title id="${`title-PeopleGroup-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PeopleGroup-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M17.613 4.913A4.913 4.913 0 1112.7 0a4.913 4.913 0 014.913 4.913zM12.99 12h-.58C7.765 12 4 14.257 4 18.785V30a1.222 1.222 0 001.243 1.2h2.2l1.37 15.755A1.229 1.229 0 0010.046 48h5.293a1.229 1.229 0 001.232-1.044L17.952 31.2h2.205A1.222 1.222 0 0021.4 30V18.785c0-4.528-3.765-6.785-8.41-6.785zm7.603-2.991A4.912 4.912 0 1023.3 0a4.882 4.882 0 00-2.725.827 8.811 8.811 0 011.038 4.087 8.814 8.814 0 01-1.02 4.095zm3 2.991h-.58c-.035 0-.068.006-.1.007a10.1 10.1 0 012.487 6.778V30a5.214 5.214 0 01-3.766 4.988L20.555 47.3a5.456 5.456 0 01-.147.652 1.219 1.219 0 00.238.043h5.293a1.228 1.228 0 001.231-1.044L28.552 31.2h2.205A1.222 1.222 0 0032 30V18.785C32 14.257 28.235 12 23.59 12z"
      />
      <path
        d="M30.593 9.009A4.912 4.912 0 1033.3 0a4.882 4.882 0 00-2.725.827 8.811 8.811 0 011.038 4.087 8.814 8.814 0 01-1.02 4.095zm3 2.991h-.58c-.035 0-.068.006-.1.007a10.1 10.1 0 012.487 6.778V30a5.214 5.214 0 01-3.766 4.988L30.555 47.3a5.456 5.456 0 01-.147.652 1.219 1.219 0 00.238.043h5.293a1.228 1.228 0 001.231-1.044L38.552 31.2h2.205A1.222 1.222 0 0042 30V18.785C42 14.257 38.235 12 33.59 12z"
      />
    </svg>
  `;
};
