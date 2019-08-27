import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Email = ({ width = 24, height = 24, hidden = false, title = 'Email', desc } = {}) => {
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
      aria-labelledby="${`title-Email-${count}`}"
      aria-describedby="${`title-Email-${count}`}"
    >
      <title id="${`title-Email-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Email-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.685 26.755a.54.54 0 00.632 0L48 9.387V8a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 8v1.387zM48 14.162l-13.193 9.675L48 31.092v-16.93z"
      />
      <path
        d="M31.419 26.321l-4.562 3.346a5.012 5.012 0 01-5.712 0L16.56 26.3 0 35.437V38a2.1 2.1 0 002.182 2h43.636A2.1 2.1 0 0048 38v-2.561zm-18.247-2.502L0 14.161v16.928l13.172-7.27z"
      />
    </svg>
  `;
};
