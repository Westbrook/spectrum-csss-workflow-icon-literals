import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EventExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Event Exclude',
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
      aria-labelledby="${`title-EventExclude-${count}`}"
      aria-describedby="${`title-EventExclude-${count}`}"
    >
      <title id="${`title-EventExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EventExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.924 36a8.858 8.858 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.924 36zm-17.85 0a8.858 8.858 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.074 36zM4 4h24v18.274a15.779 15.779 0 014-1.647V0H0v32h8v-4H4z"
      />
      <path
        d="M27.365 22.66L12.854 8.2a.488.488 0 00-.35-.147.5.5 0 00-.5.5v26.782a.5.5 0 00.5.5.488.488 0 00.35-.147L20 28.535l1.958.011a15.964 15.964 0 015.407-5.886z"
      />
    </svg>
  `;
};
