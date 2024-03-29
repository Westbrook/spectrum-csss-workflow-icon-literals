import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FeedManagement = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Feed Management',
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
      aria-labelledby="${`title-FeedManagement-${count}`}"
      aria-describedby="${`title-FeedManagement-${count}`}"
    >
      <title id="${`title-FeedManagement-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FeedManagement-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.1 36H10v-6h11.272a15.9 15.9 0 012.366-4H10v-6h28a9.211 9.211 0 014 1.272V8a2 2 0 00-2-2H8a2 2 0 00-2 2v30a2 2 0 002 2h12.607a15.935 15.935 0 01-.507-4zM10 10h28v6H10z"
      />
      <path
        d="M47.146 34.349h-2.891a8.356 8.356 0 00-1.221-2.964l2.059-2.058a.826.826 0 000-1.168l-1.251-1.251a.826.826 0 00-1.168 0l-2.058 2.059a8.366 8.366 0 00-2.964-1.221v-2.892a.826.826 0 00-.826-.826h-1.652a.826.826 0 00-.826.826v2.891a8.366 8.366 0 00-2.964 1.221l-2.058-2.059a.826.826 0 00-1.168 0l-1.251 1.251a.826.826 0 000 1.168l2.059 2.058a8.356 8.356 0 00-1.221 2.964h-2.891a.826.826 0 00-.826.826v1.651a.826.826 0 00.826.826h2.891a8.356 8.356 0 001.221 2.964l-2.059 2.058a.825.825 0 000 1.167l1.251 1.251a.826.826 0 001.168 0l2.058-2.058a8.366 8.366 0 002.964 1.221v2.891a.826.826 0 00.826.826h1.651a.826.826 0 00.826-.826v-2.89a8.365 8.365 0 002.964-1.221l2.058 2.058a.826.826 0 001.168 0l1.251-1.251a.825.825 0 000-1.167l-2.059-2.058a8.356 8.356 0 001.221-2.964h2.891a.826.826 0 00.826-.826v-1.652a.826.826 0 00-.825-.825zM36 39.223A3.223 3.223 0 1139.223 36 3.223 3.223 0 0136 39.223z"
      />
    </svg>
  `;
};
