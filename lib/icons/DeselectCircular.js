import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeselectCircular = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Deselect Circular',
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
      aria-labelledby="${`title-DeselectCircular-${count}`}"
      aria-describedby="${`title-DeselectCircular-${count}`}"
    >
      <title id="${`title-DeselectCircular-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeselectCircular-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6.005 24.433l-4 .09a21.828 21.828 0 001.625 7.785l3.7-1.512a17.844 17.844 0 01-1.325-6.363zm1.76-8.183l-2.958-2.958a21.468 21.468 0 00-2.381 6.453l-.052.229 3.947.668a18.017 18.017 0 011.444-4.392zm7.566 27.974a22.4 22.4 0 007.747 1.759l.175-4a18.321 18.321 0 01-6.348-1.441zM9.1 34.086l-3.317 2.241A21.965 21.965 0 0011.348 42l2.3-3.27A18 18 0 019.1 34.086zm22.656 6.155a17.847 17.847 0 01-4.782 1.517l.659 3.946a21.86 21.86 0 007.082-2.5zM42 23.567l4-.09a21.828 21.828 0 00-1.622-7.785l-3.7 1.511A17.849 17.849 0 0142 23.567zm3.626 4.459l-3.947-.668a18 18 0 01-1.444 4.391l2.958 2.959a21.473 21.473 0 002.381-6.454zM32.669 3.776a22.39 22.39 0 00-7.747-1.759l-.175 4A18.353 18.353 0 0131.1 7.453zM38.9 13.914l3.313-2.241A21.949 21.949 0 0036.652 6l-2.3 3.27a18 18 0 014.548 4.644zM16.243 7.759a17.889 17.889 0 014.783-1.517L20.367 2.3a21.874 21.874 0 00-7.083 2.5z"
      />
      <rect height="56" rx="1" ry="1" transform="rotate(-45 24 24)" width="4" x="22" y="-4" />
    </svg>
  `;
};
