import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Retweet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Retweet',
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
      aria-labelledby="${`title-Retweet-${count}`}"
      aria-describedby="${`title-Retweet-${count}`}"
    >
      <title id="${`title-Retweet-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Retweet-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 34V18h3.586a1 1 0 00.707-1.707L10 8l-8.293 8.293A1 1 0 002.414 18H6v16a8 8 0 008 8h18l-8-8zm31.586-2H42V16a8 8 0 00-8-8H16l8 8h10v16h-3.586a1 1 0 00-.707 1.707L38 42l8.293-8.293A1 1 0 0045.586 32z"
      />
    </svg>
  `;
};
