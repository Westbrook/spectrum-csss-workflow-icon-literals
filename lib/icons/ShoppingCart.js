import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShoppingCart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shopping Cart',
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
      aria-labelledby="${`title-ShoppingCart-${count}`}"
      aria-describedby="${`title-ShoppingCart-${count}`}"
    >
      <title id="${`title-ShoppingCart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShoppingCart-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M17.56 42a4 4 0 11-4-4 4 4 0 014 4zm20 0a4 4 0 11-4-4 4 4 0 014 4zm2-10H14.483l.922-4H39.56a2 2 0 001.961-1.608l4.44-18A2 2 0 0044 6H11.78l-.41-2.294A2 2 0 009.392 2H4a2 2 0 000 4h3.667l3.893 19.9-1.941 7.614A2 2 0 0011.56 36h28a2 2 0 000-4zm2-22l-3.641 14h-22.6l-2.692-14z"
      />
    </svg>
  `;
};
