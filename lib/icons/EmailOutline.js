import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Outline',
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
      aria-labelledby="${`title-EmailOutline-${count}`}"
      aria-describedby="${`title-EmailOutline-${count}`}"
    >
      <title id="${`title-EmailOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 6H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zm-2 4v1.105l-19.941 14.5a.1.1 0 01-.118 0L4 11.105V10zm0 5.8v16.29l-11.2-8.143zm-28.8 8.147L4 32.09V15.8zM4 38v-1.212L18.427 26.3l3.28 2.386a3.888 3.888 0 004.587 0l3.279-2.386L44 36.788V38z"
        fill="currentColor"
      />
    </svg>
  `;
};
