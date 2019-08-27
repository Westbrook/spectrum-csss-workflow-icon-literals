import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Curate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Curate',
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
      aria-labelledby="${`title-Curate-${count}`}"
      aria-describedby="${`title-Curate-${count}`}"
    >
      <title id="${`title-Curate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Curate-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 4H2a2 2 0 00-2 2v36a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2zm-2 36H4v-8h10.328a4.164 4.164 0 007.344 0h2.656a4.164 4.164 0 007.344 0H44zm0-12H31.672a4.164 4.164 0 00-7.344 0h-2.656a4.164 4.164 0 00-7.344 0H4v-8h4.328a4.164 4.164 0 007.344 0h2.656a4.164 4.164 0 007.344 0h6.656a4.164 4.164 0 007.344 0H44zm0-12h-4.328a4.164 4.164 0 00-7.344 0h-6.656a4.164 4.164 0 00-7.344 0h-2.656a4.164 4.164 0 00-7.344 0H4V8h40z"
        fill="currentColor"
      />
    </svg>
  `;
};
