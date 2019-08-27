import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Exclude',
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
      aria-labelledby="${`title-TextExclude-${count}`}"
      aria-describedby="${`title-TextExclude-${count}`}"
    >
      <title id="${`title-TextExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 38V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a8.289 8.289 0 01-1-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0144.925 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
