import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Check',
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
      aria-labelledby="${`title-DataCheck-${count}`}"
      aria-describedby="${`title-DataCheck-${count}`}"
    >
      <title id="${`title-DataCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
      <path
        d="M20.1 36a15.873 15.873 0 01.519-3.965C14.3 31.624 5.872 30.121 4 27.152v10.6c0 3.268 8.03 5.946 18.258 6.223A15.8 15.8 0 0120.1 36zM36 20.1a15.8 15.8 0 017.955 2.147 2 2 0 00.045-.28V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.459-20-5v6.471c0 3.257 7.978 5.93 18.16 6.221A15.886 15.886 0 0136 20.1z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
