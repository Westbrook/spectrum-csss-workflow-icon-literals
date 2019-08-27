import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LineHeight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Line Height',
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
      aria-labelledby="${`title-LineHeight-${count}`}"
      aria-describedby="${`title-LineHeight-${count}`}"
    >
      <title id="${`title-LineHeight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LineHeight-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="26" x="18" y="6" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="22" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="38" />
      <path
        d="M13.2 10a.8.8 0 00.8-.806.785.785 0 00-.236-.56L8.313 3.11a.5.5 0 00-.626 0L2.236 8.634a.785.785 0 00-.236.56.8.8 0 00.8.806H6v28H2.8a.8.8 0 00-.8.806.785.785 0 00.236.56l5.451 5.524a.5.5 0 00.626 0l5.451-5.524a.785.785 0 00.236-.56.8.8 0 00-.8-.806H10V10z"
      />
    </svg>
  `;
};
