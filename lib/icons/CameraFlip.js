import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CameraFlip = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Camera Flip',
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
      aria-labelledby="${`title-CameraFlip-${count}`}"
      aria-describedby="${`title-CameraFlip-${count}`}"
    >
      <title id="${`title-CameraFlip-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CameraFlip-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 12h-6.75a2 2 0 01-1.664-.891l-4.992-4.218A2 2 0 0028.93 6h-9.86a2 2 0 00-1.664.891l-4.867 4.218a2 2 0 01-1.664.891H4a2 2 0 00-2 2v26a2 2 0 002 2h40a2 2 0 002-2V14a2 2 0 00-2-2zM24 38a11.924 11.924 0 01-9.265-4.431l-1.9 1.691a.5.5 0 01-.835-.373V28.5a.5.5 0 01.5-.5h7.185a.5.5 0 01.332.874l-2.289 2.034A7.941 7.941 0 0031.717 28h4.1A11.994 11.994 0 0124 38zm12-14.5a.5.5 0 01-.5.5h-7.185a.5.5 0 01-.332-.874l2.289-2.034A7.941 7.941 0 0016.283 24h-4.1a11.955 11.955 0 0121.085-5.569l1.9-1.691a.5.5 0 01.832.373z"
        fill="currentColor"
      />
    </svg>
  `;
};
