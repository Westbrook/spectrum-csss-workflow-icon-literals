import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BoxAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Box Add',
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
      aria-labelledby="${`title-BoxAdd-${count}`}"
      aria-describedby="${`title-BoxAdd-${count}`}"
    >
      <title id="${`title-BoxAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BoxAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M15.818 19.907l20.645-11.5 6.8 3.682a1.03 1.03 0 010 1.813L24 24.339zM44 22.3V18l-4.585 2.547A15.8 15.8 0 0144 22.3zM20.2 36.1a15.827 15.827 0 011.8-7.353V28L4 18v16.823a2 2 0 001.029 1.748L22 46v-2.547a15.828 15.828 0 01-1.8-7.353zM4.74 13.906l6.911 3.744L32.3 6.154l-7.347-3.977a2.005 2.005 0 00-1.906 0L4.74 12.094a1.03 1.03 0 000 1.812zM47.9 36A11.9 11.9 0 1136 24.1 11.9 11.9 0 0147.9 36zM44 34.5a.5.5 0 00-.5-.5H38v-5.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V34h-5.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H34v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V38h5.5a.5.5 0 00.5-.5z"
        fill="currentColor"
      />
    </svg>
  `;
};
