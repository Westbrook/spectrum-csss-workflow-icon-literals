import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinearGradient = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Linear Gradient',
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
      aria-labelledby="${`title-LinearGradient-${count}`}"
      aria-describedby="${`title-LinearGradient-${count}`}"
    >
      <title id="${`title-LinearGradient-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LinearGradient-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 8h32v32H8zM4 6v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
        fill="currentColor"
      />
      <path opacity=".75" fill="currentColor" d="M8 40v-2h32v2z" />
      <path opacity=".7" fill="currentColor" d="M8 38v-2h32v2z" />
      <path opacity=".65" fill="currentColor" d="M8 36v-2h32v2z" />
      <path opacity=".6" fill="currentColor" d="M8 34v-2h32v2z" />
      <path opacity=".55" fill="currentColor" d="M8 32v-2h32v2z" />
      <path opacity=".5" fill="currentColor" d="M8 30v-2h32v2z" />
      <path opacity=".45" fill="currentColor" d="M8 28v-2h32v2z" />
      <path opacity=".4" fill="currentColor" d="M8 26v-2h32v2z" />
      <path opacity=".35" fill="currentColor" d="M8 24v-2h32v2z" />
      <path opacity=".3" fill="currentColor" d="M8 22v-2h32v2z" />
      <path opacity=".25" fill="currentColor" d="M8 20v-2h32v2z" />
      <path opacity=".2" fill="currentColor" d="M8 18v-2h32v2z" />
      <path opacity=".15" fill="currentColor" d="M8 16v-2h32v2z" />
      <path opacity=".1" fill="currentColor" d="M8 14v-2h32v2z" />
      <path opacity=".05" fill="currentColor" d="M8 12v-2h32v2z" />
    </svg>
  `;
};
