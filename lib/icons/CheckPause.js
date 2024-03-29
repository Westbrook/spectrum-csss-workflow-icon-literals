import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CheckPause = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Check Pause',
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
      aria-labelledby="${`title-CheckPause-${count}`}"
      aria-describedby="${`title-CheckPause-${count}`}"
    >
      <title id="${`title-CheckPause-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CheckPause-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.94 20.643l7.318-9.406a1 1 0 00-.175-1.4L36.111 7.52a1 1 0 00-1.4.175l-17.697 22.73L8.4 21.811a1 1 0 00-1.414 0l-2.693 2.695a1 1 0 000 1.414l12.431 12.447a1 1 0 001.5-.093l1.886-2.424a15.888 15.888 0 0111.83-15.207z"
      />
      <path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM34 42h-4V30h4zm8 0h-4V30h4z" />
    </svg>
  `;
};
