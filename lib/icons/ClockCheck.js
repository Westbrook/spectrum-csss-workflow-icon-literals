import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ClockCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Clock Check',
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
      aria-labelledby="${`title-ClockCheck-${count}`}"
      aria-describedby="${`title-ClockCheck-${count}`}"
    >
      <title id="${`title-ClockCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ClockCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 22.086V11a1 1 0 011-1h2a1 1 0 011 1v12.586a1 1 0 01-.293.707l-6.3 6.3a1 1 0 01-1.414 0l-1.336-1.336a1 1 0 010-1.414l5.054-5.054a1 1 0 00.289-.703z"
      />
      <path
        d="M20.661 40.132A16.194 16.194 0 1137.73 20.2a15.784 15.784 0 014.051 1A19.99 19.99 0 1022 44c.09 0 .177-.012.267-.013a15.791 15.791 0 01-1.606-3.855z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.478 43.9a.5.5 0 01-.707 0z"
      />
    </svg>
  `;
};
