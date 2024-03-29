import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PublishPending = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Publish Pending',
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
      aria-labelledby="${`title-PublishPending-${count}`}"
      aria-describedby="${`title-PublishPending-${count}`}"
    >
      <title id="${`title-PublishPending-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PublishPending-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.244 4.424L2.05 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.361 33.627L12.116 29v10.185a.95.95 0 001.565.725l6.565-5.531c.028-.254.076-.502.115-.752zM36.05 20.2a15.871 15.871 0 014.125.56L47.5 6.091 16.128 26.042l5.741 2.895A15.885 15.885 0 0136.05 20.2zm2 8v8.149a1 1 0 01-.293.707l-3.42 3.42a1 1 0 01-1.414 0l-1.336-1.336a1 1 0 010-1.414l2.17-2.17a1 1 0 00.293-.707V28.2zm5.006 11.977l2.666 2.666A11.808 11.808 0 0047.77 38h-3.794a8.2 8.2 0 01-.92 2.177z"
      />
      <path
        d="M40.241 43.019A8.078 8.078 0 0136.05 44.2a8.185 8.185 0 01-2-16.126v-3.793a11.894 11.894 0 002 23.619 11.765 11.765 0 006.85-2.225zM43.974 34h3.8a11.82 11.82 0 00-2.029-4.862l-2.682 2.682a8.188 8.188 0 01.911 2.18zm-1.062-7.691a11.814 11.814 0 00-4.862-2.029v3.794a8.106 8.106 0 012.183.915z"
      />
    </svg>
  `;
};
