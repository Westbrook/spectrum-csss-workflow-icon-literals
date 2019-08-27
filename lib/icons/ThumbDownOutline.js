import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbDownOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumb Down Outline',
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
      aria-labelledby="${`title-ThumbDownOutline-${count}`}"
      aria-describedby="${`title-ThumbDownOutline-${count}`}"
    >
      <title id="${`title-ThumbDownOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ThumbDownOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.921 25.076l-4.405-12.882A7.676 7.676 0 0035.251 7H16a2 2 0 00-2-2H6a2 2 0 00-2 2v25a2 2 0 002 2h8a2 2 0 002-2v-1.812c2.859.929 7.113 3.654 8.96 11.625A5.956 5.956 0 0030.5 46.2a5.033 5.033 0 005.085-4.839 49.267 49.267 0 00-1.1-9.361l8.163-.008a5.147 5.147 0 003.987-2.527 4.837 4.837 0 00.286-4.389zm-3.741 2.373a1.139 1.139 0 01-.819.551H29.105l.86 2.623a41.865 41.865 0 011.62 10.738 1.1 1.1 0 01-1.085.839 1.988 1.988 0 01-1.644-1.29c-2.625-11.327-9.827-14.164-12.8-14.858L16 26.039V11h19.251a3.677 3.677 0 013.48 2.488l4.5 13.143a.863.863 0 01-.051.818z"
        fill="currentColor"
      />
    </svg>
  `;
};
