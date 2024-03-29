import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlertCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Check',
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
      aria-labelledby="${`title-AlertCheck-${count}`}"
      aria-describedby="${`title-AlertCheck-${count}`}"
    >
      <title id="${`title-AlertCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlertCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.461 32.648a2.556 2.556 0 01-.462.093 2.683 2.683 0 010-5.365 2.637 2.637 0 012.044 1 15.943 15.943 0 019.273-7.576l-9.75-17.724a1.789 1.789 0 00-3.134 0L1.787 33.34a1.788 1.788 0 001.567 2.65H20.1a15.93 15.93 0 01.361-3.342zm-2.607-20.8a.894.894 0 01.894-.894h2.5a.894.894 0 01.894.894v12.519a.894.894 0 01-.894.894h-2.5a.894.894 0 01-.894-.894z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.132a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.478 43.9a.5.5 0 01-.707 0z"
      />
    </svg>
  `;
};
