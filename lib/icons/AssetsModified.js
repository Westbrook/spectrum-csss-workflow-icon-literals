import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsModified = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Modified',
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
      aria-labelledby="${`title-AssetsModified-${count}`}"
      aria-describedby="${`title-AssetsModified-${count}`}"
    >
      <title id="${`title-AssetsModified-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsModified-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16.958 34.7a5 5 0 011.256-2.106l.595-.594H6V8h36v7l4 4V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.571z"
      />
      <path
        d="M45.526 25.247l-5.765-5.765a1.214 1.214 0 00-.866-.353h-.038a1.371 1.371 0 00-.927.406L22.043 35.423a1 1 0 00-.251.421l-2.777 9.306c-.114.376.459.851.783.851a.274.274 0 00.061-.006c.276-.063 7.867-2.344 9.312-2.779a.98.98 0 00.414-.249l15.887-15.888a1.374 1.374 0 00.4-.883 1.222 1.222 0 00-.346-.949zm-23.9 18.142l2.009-6.73 4.72 4.708c-2.155.649-4.861 1.465-6.728 2.022z"
      />
    </svg>
  `;
};
