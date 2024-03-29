import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewedMarkAs = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Viewed Mark As',
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
      aria-labelledby="${`title-ViewedMarkAs-${count}`}"
      aria-describedby="${`title-ViewedMarkAs-${count}`}"
    >
      <title id="${`title-ViewedMarkAs-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewedMarkAs-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30.635 21.148A6.746 6.746 0 0030.75 20a6.269 6.269 0 00-.233-1.594 3.5 3.5 0 01-2.961 1.705A3.556 3.556 0 0124 16.556a3.507 3.507 0 011.8-3.026 6.545 6.545 0 00-1.8-.28 6.732 6.732 0 00-.781 13.421 15.908 15.908 0 017.416-5.523z"
      />
      <path
        d="M20.7 31.838A12.3 12.3 0 1136.3 20c0 .072-.01.143-.011.215a15.8 15.8 0 018.073 2.38A5.072 5.072 0 0045 20.48c0-3.152-5.619-9.788-12.183-13.04A19.965 19.965 0 0024 5.249c-11.552 0-21 11.5-21 15.231 0 3.538 7.8 11.984 17.2 13.877a15.672 15.672 0 01.5-2.519z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
