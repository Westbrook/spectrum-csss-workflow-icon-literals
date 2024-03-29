import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Exclude',
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
      aria-labelledby="${`title-UserExclude-${count}`}"
      aria-describedby="${`title-UserExclude-${count}`}"
    >
      <title id="${`title-UserExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.1 36a15.821 15.821 0 014.149-10.684 1.746 1.746 0 01-.224-.837v-2.694a1.957 1.957 0 01.438-1.2 16.806 16.806 0 002.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 003.126 9.469 1.949 1.949 0 01.434 1.2v2.683a1.947 1.947 0 01-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h20.627a15.884 15.884 0 01-.527-4zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.1 36a8.038 8.038 0 01-1.257 4.3L31.7 29.157A8.071 8.071 0 0144.1 36zm-16.2 0a8.038 8.038 0 011.257-4.3L40.3 42.843A8.071 8.071 0 0127.9 36z"
      />
    </svg>
  `;
};
