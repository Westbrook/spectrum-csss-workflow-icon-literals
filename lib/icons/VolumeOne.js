import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VolumeOne = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume One',
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
      aria-labelledby="${`title-VolumeOne-${count}`}"
      aria-describedby="${`title-VolumeOne-${count}`}"
    >
      <title id="${`title-VolumeOne-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VolumeOne-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M9.275 16.1H2a1.994 1.994 0 00-2 1.987v11.921A1.994 1.994 0 002 32h7.275a2 2 0 011.279.46l9.8 9.244A1 1 0 0022 40.938V7.155a1 1 0 00-1.642-.762l-9.8 9.245a2.011 2.011 0 01-1.283.462zM28.05 24a5.938 5.938 0 01-1.142 3.5 1.959 1.959 0 00-.383 1.142 1.687 1.687 0 00.407 1.109l.186.217a1.842 1.842 0 001.24.635 1.678 1.678 0 001.493-.634 9.727 9.727 0 000-11.944 1.662 1.662 0 00-1.35-.641 1.845 1.845 0 00-1.383.642l-.186.217a1.675 1.675 0 00-.4 1.038 1.942 1.942 0 00.381 1.213A5.94 5.94 0 0128.05 24z"
      />
    </svg>
  `;
};
