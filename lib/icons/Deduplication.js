import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Deduplication = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Deduplication',
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
      aria-labelledby="${`title-Deduplication-${count}`}"
      aria-describedby="${`title-Deduplication-${count}`}"
    >
      <title id="${`title-Deduplication-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Deduplication-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="9" cy="7" r="5" />
      <path d="M28.756 12H17.09l5.833-10 5.833 10z" />
      <circle cx="17.333" cy="41" r="5" />
      <path
        d="M36.886 46H25.219l5.834-10 5.833 10zm6.024-34H31.244l5.833-10 5.833 10zM38 16.077H10v2.759a2 2 0 001.012 1.739l7.429 4.225A4 4 0 0120 27.968V33a1 1 0 001 1h6a1 1 0 001-1v-5.032a4 4 0 011.559-3.168l7.429-4.224A2 2 0 0038 18.836z"
      />
    </svg>
  `;
};
