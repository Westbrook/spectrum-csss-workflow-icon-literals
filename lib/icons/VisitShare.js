import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VisitShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Visit Share',
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
      aria-labelledby="${`title-VisitShare-${count}`}"
      aria-describedby="${`title-VisitShare-${count}`}"
    >
      <title id="${`title-VisitShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VisitShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"
      />
      <path
        d="M39.722 26.331L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
      <path
        d="M4 8h32v8.247l4 4.426V4a2 2 0 00-2-2H2a2 2 0 00-2 2v28a1.981 1.981 0 001.8 1.96A14.3 14.3 0 017.532 30H4z"
      />
      <path
        d="M16 31a5 5 0 015-5h2.981a14.787 14.787 0 001.3-5.838c0-5.546-2.709-8.162-6.8-8.162s-6.88 2.738-6.88 8.162a13.97 13.97 0 002.58 7.815 1.606 1.606 0 01.358.99v2.214a1.607 1.607 0 01-1.378 1.557c-8.818.941-10.527 6.886-10.527 9.282V44H16z"
      />
    </svg>
  `;
};
