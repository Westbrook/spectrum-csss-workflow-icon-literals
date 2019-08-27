import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gradient = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gradient',
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
      aria-labelledby="${`title-Gradient-${count}`}"
      aria-describedby="${`title-Gradient-${count}`}"
    >
      <title id="${`title-Gradient-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gradient-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H6V10h36z"
        fill="currentColor"
      />
      <path opacity=".8" fill="currentColor" d="M8 10h2v28H8z" />
      <path opacity=".9" fill="currentColor" d="M6 10h2v28H6z" />
      <path opacity=".75" fill="currentColor" d="M10 10h2v28h-2z" />
      <path opacity=".7" fill="currentColor" d="M12 10h2v28h-2z" />
      <path opacity=".65" fill="currentColor" d="M14 10h2v28h-2z" />
      <path opacity=".6" fill="currentColor" d="M16 10h2v28h-2z" />
      <path opacity=".55" fill="currentColor" d="M18 10h2v28h-2z" />
      <path opacity=".5" fill="currentColor" d="M20 10h2v28h-2z" />
      <path opacity=".45" fill="currentColor" d="M22 10h2v28h-2z" />
      <path opacity=".4" fill="currentColor" d="M24 10h2v28h-2z" />
      <path opacity=".35" fill="currentColor" d="M26 10h2v28h-2z" />
      <path opacity=".3" fill="currentColor" d="M28 10h2v28h-2z" />
      <path opacity=".25" fill="currentColor" d="M30 10h2v28h-2z" />
      <path opacity=".2" fill="currentColor" d="M32 10h2v28h-2z" />
      <path opacity=".15" fill="currentColor" d="M34 10h2v28h-2z" />
      <path opacity=".1" fill="currentColor" d="M36 10h2v28h-2z" />
      <path opacity=".05" fill="currentColor" d="M38 10h2v28h-2z" />
    </svg>
  `;
};
