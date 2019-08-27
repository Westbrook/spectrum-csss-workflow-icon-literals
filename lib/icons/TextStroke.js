import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextStroke = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Stroke',
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
      aria-labelledby="${`title-TextStroke-${count}`}"
      aria-describedby="${`title-TextStroke-${count}`}"
    >
      <title id="${`title-TextStroke-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextStroke-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 9v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3h-6v24h3a1 1 0 011 1v2a1 1 0 01-1 1H17a1 1 0 01-1-1v-2a1 1 0 011-1h3V12h-6v3a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1h24a1 1 0 011 1zM8 4a2 2 0 00-2 2v12a2 2 0 002 2h8v12h-2a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2v-8a2 2 0 00-2-2h-2V20h8a2 2 0 002-2V6a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
