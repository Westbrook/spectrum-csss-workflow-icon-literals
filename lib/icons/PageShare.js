import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Share',
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
      aria-labelledby="${`title-PageShare-${count}`}"
      aria-describedby="${`title-PageShare-${count}`}"
    >
      <title id="${`title-PageShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.722 26.331L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
      <path
        d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"
      />
      <path d="M16 38H6V14h36v12h4V8a2 2 0 00-2-2H4a2 2 0 00-2 2v32a2 2 0 002 2h12z" />
    </svg>
  `;
};
