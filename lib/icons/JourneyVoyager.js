import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JourneyVoyager = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey Voyager',
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
      aria-labelledby="${`title-JourneyVoyager-${count}`}"
      aria-describedby="${`title-JourneyVoyager-${count}`}"
    >
      <title id="${`title-JourneyVoyager-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JourneyVoyager-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 34a6 6 0 00-5.651 4H28a4 4 0 01-4-4V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20v8a8 8 0 008 8h6.349A6 6 0 1040 34zm0-28.4A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4zm32 16a2.4 2.4 0 112.4-2.4 2.4 2.4 0 01-2.4 2.4z"
        fill="currentColor"
      />
    </svg>
  `;
};
