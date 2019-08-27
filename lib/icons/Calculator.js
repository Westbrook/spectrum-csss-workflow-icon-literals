import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Calculator = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calculator',
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
      aria-labelledby="${`title-Calculator-${count}`}"
      aria-describedby="${`title-Calculator-${count}`}"
    >
      <title id="${`title-Calculator-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Calculator-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 4H8a2 2 0 00-2 2v36a2 2 0 002 2h32a2 2 0 002-2V6a2 2 0 00-2-2zM14 39.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm8 16a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm8 16a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm8 16a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-16a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-8a.5.5 0 01-.5.5h-27a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h27a.5.5 0 01.5.5z"
        fill="currentColor"
      />
    </svg>
  `;
};
