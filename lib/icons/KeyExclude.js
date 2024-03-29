import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const KeyExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Key Exclude',
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
      aria-labelledby="${`title-KeyExclude-${count}`}"
      aria-describedby="${`title-KeyExclude-${count}`}"
    >
      <title id="${`title-KeyExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-KeyExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
      <path
        d="M22.653 26.493l8.916-8.972 2.241 2.241a15.641 15.641 0 016.48.424l2.139-2.138-5.693-5.693 1.641-1.642 5.693 5.694 3.293-3.293a1 1 0 000-1.415l-8.617-8.617a2 2 0 00-2.829 0L17.606 21.394a12 12 0 102.677 19.274c-1.313-4.433-.858-10.946 2.37-14.175zM10 38a4 4 0 114-4 4 4 0 01-4 4z"
      />
    </svg>
  `;
};
