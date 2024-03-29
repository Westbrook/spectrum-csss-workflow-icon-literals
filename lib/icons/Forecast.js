import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Forecast = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Forecast',
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
      aria-labelledby="${`title-Forecast-${count}`}"
      aria-describedby="${`title-Forecast-${count}`}"
    >
      <title id="${`title-Forecast-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Forecast-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35.265 42h-22.53a2 2 0 01-1.906-2.606L12.545 34h22.91l1.716 5.394A2 2 0 0135.265 42zM48 12.17l-1.783 2.119a2.257 2.257 0 00-.412 2.172l.883 2.625-2.12-1.786a2.257 2.257 0 00-2.172-.412l-2.625.883 1.783-2.119a2.257 2.257 0 00.412-2.172l-.883-2.625 2.117 1.786a2.256 2.256 0 002.172.412zm-9.4-9.078l-2.3 2.729a2.906 2.906 0 00-.531 2.8L36.908 12l-2.729-2.3a2.906 2.906 0 00-2.8-.531L28 10.31l2.3-2.729a2.906 2.906 0 00.531-2.8L29.69 1.4l2.729 2.3a2.906 2.906 0 002.8.531z"
      />
      <path
        d="M38 22a13.984 13.984 0 00-1.344-5.993s-.11-.132-.44-.067a3.993 3.993 0 01-1.882-.879l-2.262-1.9-2.8.939a4 4 0 01-4.555-6.082Q24.363 8 24 8a14 14 0 00-9.8 24h19.6A13.957 13.957 0 0038 22z"
      />
    </svg>
  `;
};
