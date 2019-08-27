import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Audio = ({ width = 24, height = 24, hidden = false, title = 'Audio', desc } = {}) => {
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
      aria-labelledby="${`title-Audio-${count}`}"
      aria-describedby="${`title-Audio-${count}`}"
    >
      <title id="${`title-Audio-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Audio-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40.327.908L17.57 6.805A2.066 2.066 0 0016 8.742v23.712A8.535 8.535 0 0013.235 32a12.319 12.319 0 00-4.744 1c-4.76 2-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 004.744-1C17.677 43.567 20 40.2 20 37.143V13.172l18-4.72v18A8.535 8.535 0 0035.235 26a12.319 12.319 0 00-4.744 1c-4.76 2.005-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 004.744-1C39.677 37.567 42 34.2 42 31.143V2.156A1.349 1.349 0 0040.327.908z"
        fill="currentColor"
      />
    </svg>
  `;
};
