import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCWBold = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate CW Bold',
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
      aria-labelledby="${`title-RotateCWBold-${count}`}"
      aria-describedby="${`title-RotateCWBold-${count}`}"
    >
      <title id="${`title-RotateCWBold-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateCWBold-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 3.9a19.9 19.9 0 0115.444 7.366l4.9-3.176a.8.8 0 011.11.239.788.788 0 01.116.553L43.119 20.63a.5.5 0 01-.588.382l-11.724-2.559a.785.785 0 01-.458-.331.8.8 0 01.235-1.111l5.478-3.552A15.97 15.97 0 1038.3 31.05l.015.008a1.976 1.976 0 011.722-1.042 2 2 0 012 2 1.969 1.969 0 01-.18.812l.018.009A19.993 19.993 0 1124 3.9z"
        fill="currentColor"
      />
    </svg>
  `;
};
