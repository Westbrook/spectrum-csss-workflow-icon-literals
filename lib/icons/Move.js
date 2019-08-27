import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Move = ({ width = 24, height = 24, hidden = false, title = 'Move', desc } = {}) => {
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
      aria-labelledby="${`title-Move-${count}`}"
      aria-describedby="${`title-Move-${count}`}"
    >
      <title id="${`title-Move-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Move-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.854 23.622l-6.488-6.386a.785.785 0 00-.56-.236.8.8 0 00-.806.8V22H26V10h4.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56l-6.435-6.487a.5.5 0 00-.707 0l-6.386 6.487a.785.785 0 00-.236.56.8.8 0 00.8.806H22v12H10v-4.2a.8.8 0 00-.806-.8.785.785 0 00-.56.236l-6.488 6.435a.5.5 0 000 .707l6.488 6.386a.785.785 0 00.56.236.8.8 0 00.806-.8V26h12v12h-4.2a.8.8 0 00-.8.806.783.783 0 00.236.56l6.435 6.488a.5.5 0 00.707 0l6.386-6.488a.785.785 0 00.236-.56.8.8 0 00-.8-.806H26V26h12v4.2a.8.8 0 00.806.8.785.785 0 00.56-.236l6.488-6.435a.5.5 0 000-.707z"
        fill="currentColor"
      />
    </svg>
  `;
};
