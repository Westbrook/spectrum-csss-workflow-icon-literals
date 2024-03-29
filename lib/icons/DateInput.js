import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DateInput = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Date Input',
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
      aria-labelledby="${`title-DateInput-${count}`}"
      aria-describedby="${`title-DateInput-${count}`}"
    >
      <title id="${`title-DateInput-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DateInput-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 24.849h3.286a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727h-3.531a2.833 2.833 0 00-2.021.852L38 25.212l-1.734-2.42a2.833 2.833 0 00-2.021-.852h-3.531a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.728H34L36 28v6.849h-3.286a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.727H36v2.122l-2 3.151h-3.286a.721.721 0 00-.714.728v1.455a.721.721 0 00.714.727h3.531a2.833 2.833 0 002.021-.852L38 42.667l1.734 2.42a2.833 2.833 0 002.021.852h3.531a.721.721 0 00.714-.726v-1.455a.721.721 0 00-.714-.728H42l-2-3.15v-2.122h3.286a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727H40V28z"
      />
      <path
        d="M28 38H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4v5.939h3.285a4.211 4.211 0 01.637.061H46V9a1 1 0 00-1-1h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h25z"
      />
    </svg>
  `;
};
