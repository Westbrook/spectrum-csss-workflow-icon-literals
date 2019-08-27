import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Relevance = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Relevance',
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
      aria-labelledby="${`title-Relevance-${count}`}"
      aria-describedby="${`title-Relevance-${count}`}"
    >
      <title id="${`title-Relevance-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Relevance-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6.552 19.622a18.008 18.008 0 0113.07-13.07.5.5 0 00.378-.478V2.986a.506.506 0 00-.606-.5 22.016 22.016 0 00-16.9 16.9.506.506 0 00.5.606h3.08a.5.5 0 00.478-.37zm21.826-13.07a18.008 18.008 0 0113.07 13.07.5.5 0 00.478.378h3.088a.506.506 0 00.5-.606 22.016 22.016 0 00-16.9-16.9.506.506 0 00-.606.5v3.08a.5.5 0 00.37.478zm-8.756 34.896a18.008 18.008 0 01-13.07-13.07.5.5 0 00-.478-.378H2.986a.506.506 0 00-.5.606 22.016 22.016 0 0016.9 16.9.506.506 0 00.606-.5v-3.08a.5.5 0 00-.37-.478zm21.826-13.07a18.008 18.008 0 01-13.07 13.07.5.5 0 00-.378.478v3.088a.506.506 0 00.606.5 22.016 22.016 0 0016.9-16.9.506.506 0 00-.5-.606h-3.08a.5.5 0 00-.478.37z"
      />
      <circle cx="24" cy="24" r="8" />
    </svg>
  `;
};
