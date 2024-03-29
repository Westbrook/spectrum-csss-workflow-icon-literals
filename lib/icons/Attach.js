import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Attach = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Attach',
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
      aria-labelledby="${`title-Attach-${count}`}"
      aria-describedby="${`title-Attach-${count}`}"
    >
      <title id="${`title-Attach-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Attach-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M21.707 41.643a9.044 9.044 0 01-6.439 2.683h-.145A9.5 9.5 0 018.549 41.5a9.211 9.211 0 01-.143-13.158l22.768-22.8a6.64 6.64 0 014.267-2.014A5.071 5.071 0 0139.6 5.056a4.818 4.818 0 011.511 4.184 7.814 7.814 0 01-2.157 4.085L22.247 30c-1.041 1.041-2.019 1.791-3.136.674s-.239-2.138.717-3.094c.364-.363 11.785-11.771 13.726-13.707a1 1 0 00.02-1.39l-.92-.979a1 1 0 00-1.438-.02L17.105 25.646c-1.383 1.383-3.11 4.436-.1 7.449 3.623 3.623 7.739-.8 7.739-.8l16.612-16.568c3.416-3.412 4.727-8.992.643-13.076A8.48 8.48 0 0035.762.109a9.908 9.908 0 00-6.991 3.034L6.115 25.764a12.849 12.849 0 0018.17 18.172L43.818 24.4a1 1 0 000-1.414L42.8 21.967a1 1 0 00-1.415 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
