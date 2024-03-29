import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Actions = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Actions',
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
      aria-labelledby="${`title-Actions-${count}`}"
      aria-describedby="${`title-Actions-${count}`}"
    >
      <title id="${`title-Actions-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Actions-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34.047 27.238l-4.276 4.282 11.712 11.712a1.819 1.819 0 002.572 0l1.707-1.707a1.817 1.817 0 000-2.572zM8.878 24.829l1.936-1.936c.71-.71-.029-1.717-.029-1.717l1.988-1.918a1.82 1.82 0 002.556-.016l1.081-1.082 2.082 2.082 4.279-4.28-2.082-2.081.706-.7a1.819 1.819 0 000-2.572l-.854-.854s2.512-2.82 3.04-3.348c2.22-2.22 7.134-.789 7.361-1.925s-10.911-5.35-17.009.748l-6.346 6.341a1.819 1.819 0 000 2.577l.429.413-1.881 1.964a1.209 1.209 0 00-1.739-.05l-1.937 1.936a.908.908 0 000 1.285l5.133 5.133a.908.908 0 001.286 0zm5.843 14.656c-2.1.755-4.72 1.7-6.532 2.351l2.339-6.536zM38.988 4.331L9.149 34.17a1.512 1.512 0 00-.353.551l-2.831 7.818a1.12 1.12 0 001.469 1.48l7.859-2.8a1.5 1.5 0 00.559-.356L45.686 11a1.276 1.276 0 00.114-1.795l-5.021-5a1.279 1.279 0 00-1.791.126z"
      />
    </svg>
  `;
};
