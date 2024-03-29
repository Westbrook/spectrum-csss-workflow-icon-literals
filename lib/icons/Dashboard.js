import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Dashboard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dashboard',
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
      aria-labelledby="${`title-Dashboard-${count}`}"
      aria-describedby="${`title-Dashboard-${count}`}"
    >
      <title id="${`title-Dashboard-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Dashboard-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M9.321 36.978a18.245 18.245 0 01-3.653-10.717 18.539 18.539 0 0117.8-18.587 18.33 18.33 0 0115.212 29.3 1 1 0 00.143 1.373l1.277 1.07a1.008 1.008 0 001.442-.147 22 22 0 10-35.084 0 1 1 0 001.438.147l1.281-1.068a1 1 0 00.144-1.371z"
      />
      <path
        d="M27.9 31.127a4 4 0 11-4.773-3.027c1.028-.229 7.608-8.53 8.451-8.037C32.5 20.6 27.651 30 27.9 31.127z"
      />
      <circle cx="10" cy="26" r="2.2" />
      <circle cx="14" cy="16" r="2.2" />
      <circle cx="34" cy="16" r="2" />
      <circle cx="24" cy="12" r="2" />
      <circle cx="38" cy="26" r="2" />
    </svg>
  `;
};
