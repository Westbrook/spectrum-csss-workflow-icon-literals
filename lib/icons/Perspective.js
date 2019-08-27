import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Perspective = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Perspective',
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
      aria-labelledby="${`title-Perspective-${count}`}"
      aria-describedby="${`title-Perspective-${count}`}"
    >
      <title id="${`title-Perspective-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Perspective-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 6.322v36.859a2 2 0 002.661 1.888l36-12.6A2 2 0 0044 30.581V11.722a2 2 0 00-1.7-1.977l-36-5.4A2 2 0 004 6.322zm36 13l-6 .626v-7.403l6 .9zM22 21.2V10.745l8 1.2v8.424zm8 3.187v8.271l-8 2.8V25.226zM18 10.145v11.477L8 22.665V8.645zM8 26.687l10-1.044v11.219l-10 3.5zm26 4.575v-7.288l6-.627v5.815z"
        fill="currentColor"
      />
    </svg>
  `;
};
