import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbUpOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumb Up Outline',
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
      aria-labelledby="${`title-ThumbUpOutline-${count}`}"
      aria-describedby="${`title-ThumbUpOutline-${count}`}"
    >
      <title id="${`title-ThumbUpOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ThumbUpOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.635 18.535a5.147 5.147 0 00-3.987-2.527L34.485 16a49.267 49.267 0 001.1-9.361A5.033 5.033 0 0030.5 1.8a5.956 5.956 0 00-5.54 4.387c-1.851 7.987-6.119 10.708-8.978 11.631A1.994 1.994 0 0014 16H6a2 2 0 00-2 2v25a2 2 0 002 2h8a2 2 0 002-2v-2h19.251a7.676 7.676 0 007.265-5.194l4.405-12.882a4.837 4.837 0 00-.286-4.389zm-3.4 2.834l-4.5 13.143A3.677 3.677 0 0135.251 37H16V21.961l.055-.013c2.974-.694 10.176-3.531 12.8-14.858A1.988 1.988 0 0130.5 5.8a1.1 1.1 0 011.085.839 41.865 41.865 0 01-1.62 10.738L29.105 20h13.256a1.139 1.139 0 01.819.551.863.863 0 01.055.818z"
        fill="currentColor"
      />
    </svg>
  `;
};
