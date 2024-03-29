import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Replay = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Replay',
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
      aria-labelledby="${`title-Replay-${count}`}"
      aria-describedby="${`title-Replay-${count}`}"
    >
      <title id="${`title-Replay-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Replay-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.789 16.243A1.6 1.6 0 0019.94 16H18.8a.8.8 0 00-.8.8v14.4a.8.8 0 00.8.8h1.14a1.6 1.6 0 00.849-.243l12.036-7.067a.8.8 0 000-1.38z"
      />
      <path
        d="M42.882 28.682l-2.727-.676a.493.493 0 00-.593.353 16.2 16.2 0 01-30.723 1.454 15.945 15.945 0 014.761-18.27 16.206 16.206 0 0121.243.484l-2.607 2.607a.785.785 0 00-.236.56.8.8 0 00.8.806h8.7a.5.5 0 00.5-.5V6.8a.8.8 0 00-.806-.8.785.785 0 00-.56.236l-3.1 3.1A19.965 19.965 0 1043.251 29.3a.506.506 0 00-.369-.618z"
      />
    </svg>
  `;
};
