import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShowOneLayer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Show One Layer',
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
      aria-labelledby="${`title-ShowOneLayer-${count}`}"
      aria-describedby="${`title-ShowOneLayer-${count}`}"
    >
      <title id="${`title-ShowOneLayer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShowOneLayer-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.842 35.724L32.8 30.151l11.044-5.533a.5.5 0 000-.894l-11.087-5.553 11.085-5.553a.5.5 0 000-.894L24.448 2.008a1 1 0 00-.9 0l-19.39 9.716a.5.5 0 000 .894l11.085 5.553-11.085 5.553a.5.5 0 000 .894l11.031 5.526-11.031 5.58a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894zm-24.58-19.566L11.3 12.171 24 5.81l12.7 6.361-7.959 3.987-4.29-2.15a1 1 0 00-.9 0l-4.29 2.15zM24 42.532l-12.7-6.361 7.907-4.012 4.342 2.175a1 1 0 00.9 0l4.328-2.169 7.923 4.006z"
        fill="currentColor"
      />
    </svg>
  `;
};
