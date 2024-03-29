import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const OnAir = ({ width = 24, height = 24, hidden = false, title = 'On Air', desc } = {}) => {
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
      aria-labelledby="${`title-OnAir-${count}`}"
      aria-describedby="${`title-OnAir-${count}`}"
    >
      <title id="${`title-OnAir-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OnAir-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M28.862 25.853a1.509 1.509 0 002.289.224 10.188 10.188 0 002.082-11.441 9.989 9.989 0 00-6.741-5.606 10.154 10.154 0 00-9.618 17.07 1.507 1.507 0 002.284-.234 1.475 1.475 0 00-.172-1.893 7.181 7.181 0 01-1.474-8.125 7.04 7.04 0 014.7-3.9 7.153 7.153 0 016.822 12 1.482 1.482 0 00-.172 1.905z"
      />
      <path
        d="M22.146 2.614A16.319 16.319 0 0013.4 31.249a1.478 1.478 0 002.205-.3 1.534 1.534 0 00-.271-1.995 13.361 13.361 0 01-3.785-14.909 13.331 13.331 0 1121.136 14.894 1.5 1.5 0 001.95 2.279 16.325 16.325 0 00-12.488-28.6z"
      />
      <path
        d="M26.325 22.777a4.6 4.6 0 002.112-5.143 4.553 4.553 0 00-3.21-3.234 4.591 4.591 0 00-3.552 8.381l-5.982 19.932A1 1 0 0016.651 44h1.672a1 1 0 00.958-.712l.9-3.288h7.643l.9 3.288a1 1 0 00.958.712h1.672a1 1 0 00.958-1.287zM24 16.323a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5zM25.638 32h-3.276L24 26zm-4.913 6l1.092-4h4.367l1.092 4z"
      />
    </svg>
  `;
};
