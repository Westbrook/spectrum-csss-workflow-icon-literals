import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AttachmentExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Attachment Exclude',
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
      aria-labelledby="${`title-AttachmentExclude-${count}`}"
      aria-describedby="${`title-AttachmentExclude-${count}`}"
    >
      <title id="${`title-AttachmentExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AttachmentExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M21.251 42.019a9.009 9.009 0 01-5.984 2.307h-.144A9.5 9.5 0 018.548 41.5a9.211 9.211 0 01-.142-13.158l22.767-22.8a6.642 6.642 0 014.268-2.014 5.068 5.068 0 014.153 1.525 4.819 4.819 0 011.517 4.187 7.816 7.816 0 01-2.158 4.085l-7.577 7.563A15.893 15.893 0 0136 20.2c.279 0 .552.028.828.042l4.527-4.515c3.416-3.412 4.728-8.992.644-13.076A8.481 8.481 0 0035.761.109a9.906 9.906 0 00-6.99 3.034L6.115 25.764a12.841 12.841 0 0016.792 19.349 15.843 15.843 0 01-1.656-3.094z"
      />
      <path
        d="M33.554 13.874a1 1 0 00.02-1.39l-.92-.979a1 1 0 00-1.439-.02l-14.11 14.161c-1.383 1.383-3.11 4.436-.1 7.449a4.365 4.365 0 003.173 1.413 15.786 15.786 0 01.756-3.469 1.436 1.436 0 01-1.825-.364c-1.117-1.117-.239-2.138.717-3.094.365-.363 11.787-11.771 13.728-13.707zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.924 36a8.858 8.858 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0144.924 36zm-17.849 0a8.855 8.855 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
