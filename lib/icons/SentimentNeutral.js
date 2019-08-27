import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SentimentNeutral = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sentiment Neutral',
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
      aria-labelledby="${`title-SentimentNeutral-${count}`}"
      aria-describedby="${`title-SentimentNeutral-${count}`}"
    >
      <title id="${`title-SentimentNeutral-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SentimentNeutral-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm15 17v2a1 1 0 01-1 1H17a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
