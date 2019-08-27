import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SentimentNegative = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sentiment Negative',
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
      aria-labelledby="${`title-SentimentNegative-${count}`}"
      aria-describedby="${`title-SentimentNegative-${count}`}"
    >
      <title id="${`title-SentimentNegative-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SentimentNegative-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm19.674 20.763l-2.416 1.208a1.157 1.157 0 01-1.346-.229 12.381 12.381 0 00-8.857-3.336 12.362 12.362 0 00-8.889 3.363 1.176 1.176 0 01-.84.358 1.144 1.144 0 01-.519-.127L11.4 32.8a1.157 1.157 0 01-.375-1.773c2.9-3.482 7.768-5.56 13.03-5.56 5.238 0 10.095 2.061 12.992 5.515a1.152 1.152 0 01-.373 1.779z"
        fill="currentColor"
      />
    </svg>
  `;
};
