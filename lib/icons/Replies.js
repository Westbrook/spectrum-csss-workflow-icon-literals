import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Replies = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Replies',
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
      aria-labelledby="${`title-Replies-${count}`}"
      aria-describedby="${`title-Replies-${count}`}"
    >
      <title id="${`title-Replies-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Replies-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.93 8.078V3.837a.848.848 0 00-1.448-.6L16.9 13.169l9.582 9.931a.848.848 0 001.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.176a.6.6 0 001.081-.347C44.9 21.464 41.977 8.078 27.93 8.078zM14 24v-5a1 1 0 00-1.707-.707L1 30l11.293 11.705A1 1 0 0014 41v-5.075C24.817 34.1 30.568 40.277 32.726 43.2A.708.708 0 0034 42.794C34 39.776 30.555 24 14 24z"
      />
    </svg>
  `;
};
