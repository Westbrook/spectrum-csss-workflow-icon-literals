import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gauge5 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gauge5',
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
      aria-labelledby="${`title-Gauge5-${count}`}"
      aria-describedby="${`title-Gauge5-${count}`}"
    >
      <title id="${`title-Gauge5-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gauge5-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.13 34.29a1.685 1.685 0 01-1.708 1.525l-19.769.167a3.7 3.7 0 01-3.62-4.054 3.7 3.7 0 014.32-3.3l19.387 3.843a1.685 1.685 0 011.39 1.819z"
      />
      <path
        d="M4.264 24.745a19.982 19.982 0 0139.684 2.416 1.008 1.008 0 01-1.206 1.006l-2.026-.4a1 1 0 01-.8-.916 16.015 16.015 0 00-4.336-9.824A15.456 15.456 0 0027.6 12.4 16.031 16.031 0 008 28a15.865 15.865 0 001.176 5.966.988.988 0 01-.207 1.078l-1.529 1.53a.994.994 0 01-1.6-.256 19.8 19.8 0 01-1.576-11.573z"
      />
    </svg>
  `;
};
