import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MarginLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Margin Left',
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
      aria-labelledby="${`title-MarginLeft-${count}`}"
      aria-describedby="${`title-MarginLeft-${count}`}"
    >
      <title id="${`title-MarginLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MarginLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M40 40H24V8h16zm4 2V6a2 2 0 00-2-2H22a2 2 0 00-2 2v36a2 2 0 002 2h20a2 2 0 002-2z" />
      <rect height="12" rx="2" ry="2" transform="rotate(90 10 24)" width="40" x="-10" y="18" />
    </svg>
  `;
};
