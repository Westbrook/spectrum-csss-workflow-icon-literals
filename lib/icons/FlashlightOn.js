import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlashlightOn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flashlight On',
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
      aria-labelledby="${`title-FlashlightOn-${count}`}"
      aria-describedby="${`title-FlashlightOn-${count}`}"
    >
      <title id="${`title-FlashlightOn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlashlightOn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 27.155l-1.392 1.391-15.427-15.427 1.391-1.392a2 2 0 012.829 0L36 24.326a2 2 0 010 2.829zM16.993 15.306l-1.028 1.1a2.185 2.185 0 00-.534 1.43l-1.181 9.096L1.184 40a2 2 0 000 2.827l3.739 3.743a2 2 0 002.832 0L20.8 33.477l9.09-1.177a2.179 2.179 0 001.429-.533l1.1-1.028zm.148 18.108l-3 3a2 2 0 01-2.828-2.828l3-3a2 2 0 112.828 2.828zM28 10a1.964 1.964 0 01-.394-.039 2 2 0 01-1.569-2.353l1-6A1.876 1.876 0 0129.392.239a1.807 1.807 0 011.569 2.153l-1 6A2 2 0 0128 10zm6.827 5.173a2 2 0 01-1.414-3.414l5.173-5.173a2 2 0 112.828 2.828l-5.173 5.173a1.992 1.992 0 01-1.414.586zM40 22a2 2 0 01-.39-3.961l6-1a1.806 1.806 0 012.153 1.569 1.875 1.875 0 01-1.369 2.353l-6 1A1.964 1.964 0 0140 22z"
      />
    </svg>
  `;
};
