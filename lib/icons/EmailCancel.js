import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailCancel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Cancel',
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
      aria-labelledby="${`title-EmailCancel-${count}`}"
      aria-describedby="${`title-EmailCancel-${count}`}"
    >
      <title id="${`title-EmailCancel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailCancel-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.685 24.755a.54.54 0 00.633 0L48 7.387V6a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 6v1.387zm-10.513-2.936L0 12.161v16.928l13.172-7.27zM20 36a15.909 15.909 0 012.079-7.869 4.4 4.4 0 01-.934-.464L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h17.956A16.091 16.091 0 0120 36zm28-10.559v-13.28l-10.773 7.9A15.941 15.941 0 0148 25.441zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3z"
      />
    </svg>
  `;
};
