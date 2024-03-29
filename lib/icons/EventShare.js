import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EventShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Event Share',
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
      aria-labelledby="${`title-EventShare-${count}`}"
      aria-describedby="${`title-EventShare-${count}`}"
    >
      <title id="${`title-EventShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EventShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M4 4h24v13.4l1.556 1.556L32 16.245V0H0v32h8v-4H4V4z" />
      <path
        d="M16 28a2 2 0 012-2h6.187a4.825 4.825 0 011.134-2.347l1.443-1.6L12.854 8.2a.489.489 0 00-.35-.147.5.5 0 00-.5.5v26.782a.5.5 0 00.5.5.489.489 0 00.35-.147L16 32.535zm31 2h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"
      />
      <path
        d="M39.722 26.331L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
    </svg>
  `;
};
