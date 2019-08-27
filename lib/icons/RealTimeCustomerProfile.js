import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RealTimeCustomerProfile = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Real Time Customer Profile',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-RealTimeCustomerProfile-${count}`}"
      aria-describedby="${`title-RealTimeCustomerProfile-${count}`}"
    >
      <title id="${`title-RealTimeCustomerProfile-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RealTimeCustomerProfile-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 2a22 22 0 1022 22A22 22 0 0024 2zm13.155 34.246a13.317 13.317 0 00-6.998-3.116 1.692 1.692 0 01-1.464-1.697v-2.45a1.7 1.7 0 01.431-1.092 12.93 12.93 0 002.951-8.07c0-6.109-3.246-9.523-8.135-9.523s-8.228 3.541-8.228 9.523a13.074 13.074 0 003.084 8.074 1.695 1.695 0 01.43 1.092v2.437a1.682 1.682 0 01-1.475 1.696 13.29 13.29 0 00-7 3.021 18 18 0 1126.404.105z"
        fill="currentColor"
      />
    </svg>
  `;
};
