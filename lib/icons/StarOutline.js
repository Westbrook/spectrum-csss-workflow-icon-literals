import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StarOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Star Outline',
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
      aria-labelledby="${`title-StarOutline-${count}`}"
      aria-describedby="${`title-StarOutline-${count}`}"
    >
      <title id="${`title-StarOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StarOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.967 17.635L30.7 16.868l-5.654-15.12a1 1 0 00-1.869-.013l-5.883 15.133-16.262.781a1 1 0 00-.577 1.779l12.7 10.189-4.309 15.727a1 1 0 001.513 1.1L24 37.5l13.582 8.86a1 1 0 001.512-1.1l-4.253-15.643 12.7-10.2a1 1 0 00-.574-1.782zM14.492 39.176l3-10.968L8.618 21.1l11.358-.537L24 9.922l4.021 10.637 11.358.537-8.879 7.112 3 10.968-9.5-6.241z"
        fill="currentColor"
      />
    </svg>
  `;
};
