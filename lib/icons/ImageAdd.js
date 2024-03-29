import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Add',
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
      aria-labelledby="${`title-ImageAdd-${count}`}"
      aria-describedby="${`title-ImageAdd-${count}`}"
    >
      <title id="${`title-ImageAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="31.5" cy="16.404" r="3.094" />
      <path
        d="M20.1 36a15.8 15.8 0 012.49-8.519c-2.739-2.758-5.975-6.266-7.079-6.266C14.1 21.214 6.478 26.587 4 29.7V10h40v12.275a15.947 15.947 0 014 3.315V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h19.28a15.843 15.843 0 01-1.18-6z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
