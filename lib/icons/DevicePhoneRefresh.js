import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DevicePhoneRefresh = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Phone Refresh',
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
      aria-labelledby="${`title-DevicePhoneRefresh-${count}`}"
      aria-describedby="${`title-DevicePhoneRefresh-${count}`}"
    >
      <title id="${`title-DevicePhoneRefresh-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DevicePhoneRefresh-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 40h-8V8h18v13.4a15.288 15.288 0 014-1.2V6a4 4 0 00-4-4H10a4 4 0 00-4 4v36a4 4 0 004 4h8zM17 4h4a1.04 1.04 0 011 1 1.04 1.04 0 01-1 1h-4a1 1 0 010-2z"
      />
      <path
        d="M45.231 36h-1.056a1.012 1.012 0 00-.984.864 9.134 9.134 0 01-8.846 7.716 8.149 8.149 0 01-5.66-2.135l3.079-3.079a.783.783 0 00.236-.56.8.8 0 00-.8-.806h-8.7a.5.5 0 00-.5.5v8.7a.8.8 0 00.806.8.785.785 0 00.56-.236l3.009-3.008A11.566 11.566 0 0034.345 48c6.024 0 11-4.724 11.885-10.891A.994.994 0 0045.231 36zm-21.772 0h1.056a1.012 1.012 0 00.984-.864 9.134 9.134 0 018.846-7.716 8.692 8.692 0 015.3 1.808l-3.406 3.407A.781.781 0 0036 33.2a.8.8 0 00.8.8h8.7a.5.5 0 00.5-.5v-8.7a.8.8 0 00-.806-.8.785.785 0 00-.56.236l-2.676 2.676A11.457 11.457 0 0034.345 24c-6.023 0-10.995 4.724-11.886 10.891a1 1 0 001 1.109z"
      />
    </svg>
  `;
};
