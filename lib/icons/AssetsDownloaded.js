import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsDownloaded = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Downloaded',
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
      aria-labelledby="${`title-AssetsDownloaded-${count}`}"
      aria-describedby="${`title-AssetsDownloaded-${count}`}"
    >
      <title id="${`title-AssetsDownloaded-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsDownloaded-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 34a18.064 18.064 0 01.118-2H6V8h36v9.9a18.037 18.037 0 014 2.722V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.117A18.064 18.064 0 0116 34z"
      />
      <path
        d="M34 20a14 14 0 1014 14 14 14 0 00-14-14zm7.364 16.464l-5.9 5.9a2.15 2.15 0 01-2.929 0l-5.9-5.9a2 2 0 012.828-2.828L32 36.171V25a2 2 0 014 0v11.172l2.536-2.536a2 2 0 112.828 2.828z"
      />
    </svg>
  `;
};
