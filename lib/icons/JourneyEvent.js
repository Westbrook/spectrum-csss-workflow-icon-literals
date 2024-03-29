import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JourneyEvent = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey Event',
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
      aria-labelledby="${`title-JourneyEvent-${count}`}"
      aria-describedby="${`title-JourneyEvent-${count}`}"
    >
      <title id="${`title-JourneyEvent-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JourneyEvent-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm5.119 12.938l-7.434 8.5a.769.769 0 01-1.288-.8l2.508-5.955-3.548-1.523a1.328 1.328 0 01-.475-2.094l7.434-8.5a.769.769 0 011.288.8L37.1 33.322l3.548 1.523a1.328 1.328 0 01.471 2.093z"
      />
      <path
        d="M20 34a7.991 7.991 0 00.055.908A15.916 15.916 0 0124 25.441V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"
      />
    </svg>
  `;
};
