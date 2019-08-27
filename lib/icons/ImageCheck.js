import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Check',
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
      aria-labelledby="${`title-ImageCheck-${count}`}"
      aria-describedby="${`title-ImageCheck-${count}`}"
    >
      <title id="${`title-ImageCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="31.5" cy="16.404" r="3.094" />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.187l8.939-8.939a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
      <path
        d="M48 25.689V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h19.244a15.808 15.808 0 011.384-14.481c-2.747-2.763-6.008-6.3-7.117-6.3C14.1 21.215 6.479 26.587 4 29.7V10h40v12.375a15.95 15.95 0 014 3.314z"
      />
    </svg>
  `;
};
