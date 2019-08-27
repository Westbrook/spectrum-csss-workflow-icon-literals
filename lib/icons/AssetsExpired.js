import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsExpired = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Expired',
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
      aria-labelledby="${`title-AssetsExpired-${count}`}"
      aria-describedby="${`title-AssetsExpired-${count}`}"
    >
      <title id="${`title-AssetsExpired-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsExpired-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.718 32H6V8h36v18.128l4 7.158V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.483z"
      />
      <path
        d="M47.627 44.4L32.939 18.115a1.076 1.076 0 00-1.878 0L16.372 44.4a1.076 1.076 0 00.939 1.6h29.377a1.076 1.076 0 00.939-1.6zM34 41.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
