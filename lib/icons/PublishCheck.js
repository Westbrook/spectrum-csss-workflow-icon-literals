import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PublishCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Publish Check',
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
      aria-labelledby="${`title-PublishCheck-${count}`}"
      aria-describedby="${`title-PublishCheck-${count}`}"
    >
      <title id="${`title-PublishCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PublishCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.194 4.424L2 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.3 33.619L12.066 29v10.185a.95.95 0 001.564.725l6.551-5.518c.026-.262.078-.515.119-.773zM36 20.1a15.868 15.868 0 014.169.571l7.286-14.58-31.377 19.951 5.7 2.875A15.885 15.885 0 0136 20.1z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
