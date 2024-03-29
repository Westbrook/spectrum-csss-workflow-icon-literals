import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageAutoMode = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Auto Mode',
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
      aria-labelledby="${`title-ImageAutoMode-${count}`}"
      aria-describedby="${`title-ImageAutoMode-${count}`}"
    >
      <title id="${`title-ImageAutoMode-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageAutoMode-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.088 25.109a2.891 2.891 0 11-2.891-2.89 2.891 2.891 0 012.891 2.89zm11.854-9.729a3.5 3.5 0 00-2.925 1.787l-2.1 3.745-.155-4.29a3.5 3.5 0 00-1.785-2.922l-3.745-2.1 4.29-.156a3.5 3.5 0 002.925-1.786l2.1-3.745.153 4.287a3.5 3.5 0 001.787 2.925l3.745 2.1zM24.028 5.322L27.46 5.2a2.8 2.8 0 002.34-1.431l1.679-3 .121 3.436a2.8 2.8 0 001.429 2.34l3 1.678-3.429.125a2.8 2.8 0 00-2.34 1.428l-1.679 3-.124-3.432A2.8 2.8 0 0027.024 7z"
      />
      <path
        d="M37.809 25.78a1 1 0 01-1.745-.4L36 25.124v13.3l-5.862-5.864a2.037 2.037 0 00-2.88 0l-3.126 3.127-7.693-7.693a2.036 2.036 0 00-2.879 0l-7.011 7.011c-.278-.1-.494-.162-.549-.1V18h28.25l-.265-1.079L28.771 14H4a2 2 0 00-2 2v24a2 2 0 002 2h34a2 2 0 002-2V23.108z"
      />
    </svg>
  `;
};
