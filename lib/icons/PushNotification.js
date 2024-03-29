import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PushNotification = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Push Notification',
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
      aria-labelledby="${`title-PushNotification-${count}`}"
      aria-describedby="${`title-PushNotification-${count}`}"
    >
      <title id="${`title-PushNotification-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PushNotification-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 .1A11.9 11.9 0 1047.9 12 11.9 11.9 0 0036 .1zM39.936 20h-8.043c-.148 0-.19-.063-.169-.19v-2.9a.2.2 0 01.232-.19h1.957V7.364A16.235 16.235 0 0131.84 8c-.148.021-.19-.021-.19-.147V5.418c0-.106.021-.169.148-.19a12.152 12.152 0 002.523-1.123A.778.778 0 0134.68 4h3.2c.106 0 .127.063.127.148L38 16.72h1.888c.148 0 .19.063.212.19v2.858c.025.169-.037.232-.164.232z"
      />
      <path d="M20.1 12H6a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V27.9A15.9 15.9 0 0120.1 12z" />
    </svg>
  `;
};
