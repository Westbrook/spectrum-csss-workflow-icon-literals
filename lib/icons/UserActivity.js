import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserActivity = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Activity',
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
      aria-labelledby="${`title-UserActivity-${count}`}"
      aria-describedby="${`title-UserActivity-${count}`}"
    >
      <title id="${`title-UserActivity-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserActivity-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M32 4v8h8l-8-8z" />
      <path
        d="M30 16a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V16zm6.042 24H12.1a26.316 26.316 0 01-.039-1.091c0-1.658 1.049-5.862 7.761-6.4a1.086 1.086 0 001-1.061v-1.52a1.017 1.017 0 00-.294-.684 7.784 7.784 0 01-2.1-5.044c0-3.733 2.274-5.95 5.614-5.95s5.551 2.133 5.551 5.95a7.69 7.69 0 01-2.007 5.045 1.009 1.009 0 00-.295.683v1.53a1.092 1.092 0 001 1.061c6.589.612 7.774 4.8 7.774 6.39L36.042 40z"
      />
    </svg>
  `;
};
