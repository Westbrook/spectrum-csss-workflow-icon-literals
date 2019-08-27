import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Facebook = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Facebook',
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
      aria-labelledby="${`title-Facebook-${count}`}"
      aria-describedby="${`title-Facebook-${count}`}"
    >
      <title id="${`title-Facebook-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Facebook-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 6v36a2 2 0 002 2h20V28.036h-5.211V22H26v-3.971c0-4.313 2.279-7.562 6.276-7.963a43.021 43.021 0 015.92.221v5.4h-3.205c-1.27 0-2.981.529-2.981 1.913 0 1.11-.01 4.4-.01 4.4h5.978l-.778 6.038H32V44h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
        fill="currentColor"
      />
    </svg>
  `;
};
