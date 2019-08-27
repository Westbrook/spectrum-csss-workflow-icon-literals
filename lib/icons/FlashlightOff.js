import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlashlightOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flashlight Off',
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
      aria-labelledby="${`title-FlashlightOff-${count}`}"
      aria-describedby="${`title-FlashlightOff-${count}`}"
    >
      <title id="${`title-FlashlightOff-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlashlightOff-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 23.155l-1.392 1.391L23.181 9.118l1.391-1.391a2 2 0 012.829 0L40 20.326a2 2 0 010 2.829zM20.993 11.306l-1.028 1.1a2.184 2.184 0 00-.533 1.43l-1.182 9.096L3.184 38a2 2 0 000 2.827l3.739 3.743a2 2 0 002.832 0L24.8 29.477l9.09-1.177a2.179 2.179 0 001.429-.533l1.1-1.028zm.148 18.108l-3 3a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 2.828z"
      />
    </svg>
  `;
};
