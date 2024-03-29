import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailNotification = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Notification',
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
      aria-labelledby="${`title-EmailNotification-${count}`}"
      aria-describedby="${`title-EmailNotification-${count}`}"
    >
      <title id="${`title-EmailNotification-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailNotification-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.317 24.754L48 7.387V6a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 6v1.387l23.685 17.367a.539.539 0 00.632 0zm18.074-2.066A9.786 9.786 0 0148 28.285V12.162l-8.407 6.165a5.377 5.377 0 012.798 4.361zM0 12.161v16.928l13.172-7.27L0 12.161zm23.316 20.974V32a10.452 10.452 0 01.586-3.455 4.818 4.818 0 01-2.756-.879L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h20.229c.917-.563.919-1.076.905-4.865zM44 32c0-3.437-2.063-5.506-6-5.883V23a1.078 1.078 0 00-1.143-1h-1.714A1.078 1.078 0 0034 23v3.117c-3.937.377-6 2.446-6 5.883 0 6 0 8-4 10.154V44h8a4 4 0 008 0h8v-1.846C44 40 44 38 44 32z"
      />
    </svg>
  `;
};
