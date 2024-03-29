import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FeedAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Feed Add',
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
      aria-labelledby="${`title-FeedAdd-${count}`}"
      aria-describedby="${`title-FeedAdd-${count}`}"
    >
      <title id="${`title-FeedAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FeedAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.1 24.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5z"
      />
      <path
        d="M20.1 36H10v-6h11.272a15.9 15.9 0 012.366-4H10v-6h28a9.211 9.211 0 014 1.272V8a2 2 0 00-2-2H8a2 2 0 00-2 2v30a2 2 0 002 2h12.607a15.935 15.935 0 01-.507-4zM10 10h28v6H10z"
      />
    </svg>
  `;
};
