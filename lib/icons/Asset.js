import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Asset = ({ width = 24, height = 24, hidden = false, title = 'Asset', desc } = {}) => {
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
      aria-labelledby="${`title-Asset-${count}`}"
      aria-describedby="${`title-Asset-${count}`}"
    >
      <title id="${`title-Asset-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Asset-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="28.5" cy="13.5" r="2.5" />
      <path
        d="M36 4H4a2 2 0 00-2 2v24a2 2 0 002 2h14V22a5.965 5.965 0 011.026-3.353l-3.418-3.417a2 2 0 00-2.828 0L6 22.01V8h28v8h4V6a2 2 0 00-2-2z"
      />
      <path
        d="M22 22v22a2 2 0 002 2h20a2 2 0 002-2V22a2 2 0 00-2-2H24a2 2 0 00-2 2zm6 3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm16-18a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zM39.5 34h-11a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v1a.5.5 0 01-.5.5z"
      />
    </svg>
  `;
};
