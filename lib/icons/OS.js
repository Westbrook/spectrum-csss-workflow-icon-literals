import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Os = ({ width = 24, height = 24, hidden = false, title = 'Os', desc } = {}) => {
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
      aria-labelledby="${`title-OS-${count}`}"
      aria-describedby="${`title-OS-${count}`}"
    >
      <title id="${`title-OS-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OS-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25.889 22.864c.039 8.046-4.937 13.294-12.011 13.294-7.541 0-12.05-5.6-12.05-13.177 0-7.463 4.9-13.138 12.05-13.138 7.622-.001 11.972 5.83 12.011 13.021zM14.034 32c4.392 0 7.035-3.615 7-9.018C21.03 17.539 18.348 14 13.8 14c-4.12 0-7.113 3.226-7.113 8.979C6.687 28 9.252 32 14.034 32zm15.546 2.758a.577.577 0 01-.272-.583v-4.042c0-.155.155-.233.311-.155A13.081 13.081 0 0036.538 32c3.187 0 4.548-1.244 4.548-2.915 0-1.438-.933-2.526-3.887-3.77l-1.866-.777c-4.781-2.021-6.025-4.431-6.025-7.347 0-4.159 3.148-7.346 9.018-7.346a14.249 14.249 0 015.947 1.011c.194.116.233.233.233.505v3.77c0 .155-.117.311-.35.155A12.143 12.143 0 0038.287 14c-3.343 0-4.393 1.4-4.393 2.76 0 1.4.894 2.371 3.965 3.654l1.477.622c5.053 2.1 6.491 4.548 6.491 7.619 0 4.548-3.576 7.5-9.446 7.5a14.8 14.8 0 01-6.801-1.397z"
      />
    </svg>
  `;
};
