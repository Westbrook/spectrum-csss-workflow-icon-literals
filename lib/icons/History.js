import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const History = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'History',
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
      aria-labelledby="${`title-History-${count}`}"
      aria-describedby="${`title-History-${count}`}"
    >
      <title id="${`title-History-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-History-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25 10h-2a1 1 0 00-1 1v12.586a1 1 0 00.293.707l6.3 6.3a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-5.054-5.054a1 1 0 01-.289-.703V11a1 1 0 00-1-1z"
      />
      <path
        d="M44.221 22.915A19.994 19.994 0 005.182 18H.8a.8.8 0 00-.8.806.785.785 0 00.236.56l6.435 6.488a.5.5 0 00.707 0l6.386-6.488a.785.785 0 00.236-.56.8.8 0 00-.8-.806H9.215a16.2 16.2 0 113.932 17.787.493.493 0 00-.69.005l-1.986 1.987a.506.506 0 00.005.722 20 20 0 0033.745-15.586z"
      />
    </svg>
  `;
};
