import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlagExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flag Exclude',
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
      aria-labelledby="${`title-FlagExclude-${count}`}"
      aria-describedby="${`title-FlagExclude-${count}`}"
    >
      <title id="${`title-FlagExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlagExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="1" ry="1" width="4" x="4" y="4" />
      <path
        d="M24.147 25.427A15.831 15.831 0 0144 22.275V11.394a1.42 1.42 0 00-1.064-1.387 25.5 25.5 0 00-6.019-.717 24.822 24.822 0 00-5.379.594 1.43 1.43 0 01-1.705-1.418V6.354a1.42 1.42 0 00-1.064-1.387 25.477 25.477 0 00-6.019-.717A25.406 25.406 0 0010 8.168V28a25.336 25.336 0 0112.762-3.917 1.425 1.425 0 011.385 1.344z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
