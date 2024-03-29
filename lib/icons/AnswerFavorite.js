import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AnswerFavorite = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Answer Favorite',
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
      aria-labelledby="${`title-AnswerFavorite-${count}`}"
      aria-describedby="${`title-AnswerFavorite-${count}`}"
    >
      <title id="${`title-AnswerFavorite-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AnswerFavorite-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.232 40.837l-6.926-6.692a1.989 1.989 0 01.726-3.306A3.078 3.078 0 0124 29a3.218 3.218 0 012.429.976l4.495-.673 4.225-8.655a2 2 0 013.587-.015l4.3 8.617.961.135L44 8a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h12l6 10 2.82-4.7zM20.8 10.828a.355.355 0 01.243-.4A11 11 0 0123.951 10a12.692 12.692 0 012.959.323.433.433 0 01.29.4v2.593c0 3.025-.823 11.523-.968 12.6 0 .108-.05.217-.34.217h-3.88a.3.3 0 01-.339-.217c-.1-1.008-.874-9.471-.874-12.495z"
      />
      <path
        d="M33.6 32.947l2.924-5.992a.5.5 0 01.9 0l2.977 5.966 6.6.93a.5.5 0 01.281.852l-4.754 4.675 1.156 6.567a.5.5 0 01-.723.53l-5.921-3.081-5.888 3.128a.5.5 0 01-.727-.522l1.1-6.576-4.795-4.633a.5.5 0 01.27-.856z"
      />
    </svg>
  `;
};
