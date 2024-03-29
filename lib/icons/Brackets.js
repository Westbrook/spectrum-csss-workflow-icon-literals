import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Brackets = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Brackets',
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
      aria-labelledby="${`title-Brackets-${count}`}"
      aria-describedby="${`title-Brackets-${count}`}"
    >
      <title id="${`title-Brackets-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Brackets-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 41.578a1 1 0 00-1-1h-2.024a.964.964 0 01-1-.917V29c0-2.342-3.87-5.021-3.87-5.021s3.87-2.6 3.87-4.979V8.282a.945.945 0 01.983-.9H17a1 1 0 001-1V3a1 1 0 00-1-1h-.959a8 8 0 00-8 8.037c.018 3.859.036 7.909.036 9.132 0 1.637-2.157 3.17-3.679 4.047a.873.873 0 00-.01 1.544c1.523.9 3.689 2.452 3.689 4.029V38a8 8 0 008 8H17a1 1 0 001-1zm12 0a1 1 0 011-1h2.024a.964.964 0 001-.917V29c0-2.342 3.871-5.021 3.871-5.021s-3.871-2.6-3.871-4.979V8.282a.944.944 0 00-.982-.9H31a1 1 0 01-1-1V3a1 1 0 011-1h.96a8 8 0 018 8.037c-.019 3.859-.037 7.909-.037 9.132 0 1.637 2.157 3.17 3.68 4.047a.873.873 0 01.009 1.544c-1.523.9-3.689 2.452-3.689 4.029V38a8 8 0 01-8 8H31a1 1 0 01-1-1z"
      />
    </svg>
  `;
};
