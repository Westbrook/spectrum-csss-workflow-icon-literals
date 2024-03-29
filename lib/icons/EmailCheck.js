import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Check',
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
      aria-labelledby="${`title-EmailCheck-${count}`}"
      aria-describedby="${`title-EmailCheck-${count}`}"
    >
      <title id="${`title-EmailCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.685 24.755a.54.54 0 00.633 0L48 7.387V6a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 6v1.387zm-10.513-2.936L0 12.161v16.928l13.172-7.27zM20.1 36a15.814 15.814 0 012.068-7.825 4.432 4.432 0 01-1.023-.509L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h18.057a15.941 15.941 0 01-.139-2zM48 25.59V12.162l-10.9 7.993A15.844 15.844 0 0148 25.59zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
