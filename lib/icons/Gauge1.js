import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gauge1 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gauge1',
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
      aria-labelledby="${`title-Gauge1-${count}`}"
      aria-describedby="${`title-Gauge1-${count}`}"
    >
      <title id="${`title-Gauge1-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gauge1-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M2.87 34.29a1.685 1.685 0 001.708 1.525l19.769.167a3.7 3.7 0 003.62-4.054 3.7 3.7 0 00-4.32-3.3L4.26 32.471a1.685 1.685 0 00-1.39 1.819z"
      />
      <path
        d="M43.736 24.745a19.982 19.982 0 00-39.683 2.416 1.008 1.008 0 001.206 1.006l2.026-.4a1 1 0 00.8-.916 16.015 16.015 0 014.336-9.824A15.456 15.456 0 0120.4 12.4 16.031 16.031 0 0140 28a15.865 15.865 0 01-1.176 5.966.988.988 0 00.207 1.078l1.529 1.53a.994.994 0 001.6-.256 19.8 19.8 0 001.576-11.573z"
      />
    </svg>
  `;
};
