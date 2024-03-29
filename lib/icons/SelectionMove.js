import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectionMove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Selection Move',
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
      aria-labelledby="${`title-SelectionMove-${count}`}"
      aria-describedby="${`title-SelectionMove-${count}`}"
    >
      <title id="${`title-SelectionMove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectionMove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 14h4v8h-4zM4 14h4v8H4zm0 12h4v8H4zM44 6a2 2 0 00-2-2h-4v4h2v2h4zM8 8h2V4H6a2 2 0 00-2 2v4h4zm0 32v-2H4v4a2 2 0 002 2h4v-4zm6 0h8v4h-8zM26 4h8v4h-8zM14 4h8v4h-8zm32.89 27.687l-5.524-5.451a.785.785 0 00-.56-.236.8.8 0 00-.806.8V30h-6v-6h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56l-5.451-5.524a.5.5 0 00-.626 0l-5.451 5.524a.785.785 0 00-.236.56.8.8 0 00.8.806H30v6h-6v-3.2a.8.8 0 00-.806-.8.785.785 0 00-.56.236l-5.524 5.451a.5.5 0 000 .626l5.524 5.451a.785.785 0 00.56.236.8.8 0 00.806-.8V34h6v6h-3.2a.8.8 0 00-.8.806.785.785 0 00.236.56l5.451 5.524a.5.5 0 00.626 0l5.451-5.524a.785.785 0 00.236-.56.8.8 0 00-.8-.806H34v-6h6v3.2a.8.8 0 00.806.8.785.785 0 00.56-.236l5.524-5.451a.5.5 0 000-.626z"
      />
    </svg>
  `;
};
