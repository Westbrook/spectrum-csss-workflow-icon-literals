import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCCWBold = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate CCW Bold',
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
      aria-labelledby="${`title-RotateCCWBold-${count}`}"
      aria-describedby="${`title-RotateCCWBold-${count}`}"
    >
      <title id="${`title-RotateCCWBold-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateCCWBold-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 3.9a19.9 19.9 0 00-15.444 7.366L3.658 8.09a.8.8 0 00-1.11.239.788.788 0 00-.116.553L4.881 20.63a.5.5 0 00.588.382l11.724-2.559a.785.785 0 00.458-.331.8.8 0 00-.235-1.111l-5.478-3.552A15.97 15.97 0 119.7 31.05l-.015.008a1.976 1.976 0 00-1.722-1.042 2 2 0 00-2 2 1.969 1.969 0 00.18.812l-.018.009A19.993 19.993 0 1024 3.9z"
        fill="currentColor"
      />
    </svg>
  `;
};
