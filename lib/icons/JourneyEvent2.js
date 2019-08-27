import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JourneyEvent2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey Event2',
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
      aria-labelledby="${`title-JourneyEvent2-${count}`}"
      aria-describedby="${`title-JourneyEvent2-${count}`}"
    >
      <title id="${`title-JourneyEvent2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JourneyEvent2-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"
      />
      <path
        d="M20 34a7.991 7.991 0 00.055.908A15.916 15.916 0 0124 25.441V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"
      />
    </svg>
  `;
};
