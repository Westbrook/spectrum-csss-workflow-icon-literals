import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Shuffle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shuffle',
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
      aria-labelledby="${`title-Shuffle-${count}`}"
      aria-describedby="${`title-Shuffle-${count}`}"
    >
      <title id="${`title-Shuffle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Shuffle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M3 16h7l3.6 5.4 3.5-5.25-3.5-5.254A2 2 0 0011.93 10H3a1 1 0 00-1 1v4a1 1 0 001 1zm35 0v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7L39.332 4.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V10H27.07a2 2 0 00-1.664.891L10 34H3a1 1 0 00-1 1v4a1 1 0 001 1h8.93a2 2 0 001.664-.891L29 16z"
      />
      <path
        d="M39.332 28.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V34H29l-3.6-5.394-3.5 5.25 3.5 5.253a2 2 0 001.67.891H38v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7z"
      />
    </svg>
  `;
};
