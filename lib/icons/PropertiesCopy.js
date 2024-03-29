import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PropertiesCopy = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Properties Copy',
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
      aria-labelledby="${`title-PropertiesCopy-${count}`}"
      aria-describedby="${`title-PropertiesCopy-${count}`}"
    >
      <title id="${`title-PropertiesCopy-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PropertiesCopy-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M5 12h3.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1V9a1 1 0 00-1-1H21.675a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1zm10-5.3a3.3 3.3 0 11-3.3 3.3A3.3 3.3 0 0115 6.7zm5.223 31.962a3.31 3.31 0 11-.207-1.966c-.01-.231-.016-.463-.016-.7a15.97 15.97 0 01.512-4.022A6.856 6.856 0 0017 31a6.977 6.977 0 00-6.675 5H5a1 1 0 00-1 1v2a1 1 0 001 1h5.325A6.977 6.977 0 0017 45a6.88 6.88 0 004.69-1.849 15.875 15.875 0 01-1.467-4.489zM5 26h17.325a7.1 7.1 0 00.411 1.053 16.021 16.021 0 013-3.372 3.281 3.281 0 014.575-2.709 15.759 15.759 0 014.377-1.005A6.944 6.944 0 0022.325 22H5a1 1 0 00-1 1v2a1 1 0 001 1zm31-2a12 12 0 1012 12 12 12 0 00-12-12zm8 13a1 1 0 01-1 1h-5v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-5a1 1 0 01-1-1v-2a1 1 0 011-1h5v-5a1 1 0 011-1h2a1 1 0 011 1v5h5a1 1 0 011 1z"
      />
    </svg>
  `;
};
