import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Hand2 = ({ width = 24, height = 24, hidden = false, title = 'Hand2', desc } = {}) => {
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
      aria-labelledby="${`title-Hand2-${count}`}"
      aria-describedby="${`title-Hand2-${count}`}"
    >
      <title id="${`title-Hand2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Hand2-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35.715 25.893c-.639-.361-1.318-3.3-3.909-3.3a1.515 1.515 0 01-.7-.084c-.161-.1-.578-3-3.412-3a8.742 8.742 0 01-1.925-.139A3.627 3.627 0 0023 18a5.542 5.542 0 00-3.221 1.381.753.753 0 01-.966-.381c-.983-2.867-3.144-9.353-3.144-9.353A2.965 2.965 0 0012.46 7.6a2.86 2.86 0 00-2.251 3.742L14.1 22.661a9.636 9.636 0 01.357 1.537 2.38 2.38 0 01-1.071 2.62c-.216.124-1.081-.277-2.055-.811-1.781-1.3-3.606-2.749-3.606-2.749-2.857-1.945-4.619-1.272-5.357-.4-.786.931-.238 2.46.9 3.638l7.319 8.313a52.91 52.91 0 001.861 2.131 26.186 26.186 0 002.489 3.723c2 2.19 4.834 3.333 9.047 3.333h.065a13.47 13.47 0 008.311-2.446A8.547 8.547 0 0035.414 38c.982-2.845 1.8-5.961 2.107-7.336a4.3 4.3 0 00-1.806-4.771z"
        fill="currentColor"
      />
    </svg>
  `;
};
