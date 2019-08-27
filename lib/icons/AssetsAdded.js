import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsAdded = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Added',
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
      aria-labelledby="${`title-AssetsAdded-${count}`}"
      aria-describedby="${`title-AssetsAdded-${count}`}"
    >
      <title id="${`title-AssetsAdded-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsAdded-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 34a18.064 18.064 0 01.118-2H6V8h36v9.9a18.037 18.037 0 014 2.722V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.117A18.064 18.064 0 0116 34z"
      />
      <path
        d="M34 20.05A13.95 13.95 0 1047.95 34 13.95 13.95 0 0034 20.05zM41 36h-5v5a2 2 0 11-4 0v-5h-5a2 2 0 110-4h5v-5a2 2 0 014 0v5h5a2 2 0 110 4z"
      />
    </svg>
  `;
};
