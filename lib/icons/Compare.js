import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Compare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Compare',
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
      aria-labelledby="${`title-Compare-${count}`}"
      aria-describedby="${`title-Compare-${count}`}"
    >
      <title id="${`title-Compare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Compare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.7 42.3l-7.161-7.161a10.1 10.1 0 10-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 00.006-3.4zM23.8 30a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2zM28 14v2.462a13.273 13.273 0 018 1.238V6a2 2 0 00-2-2H14a2 2 0 00-2 2v6h14a2 2 0 012 2z"
      />
      <path
        d="M16.3 30a13.687 13.687 0 017.645-12.275A1.976 1.976 0 0022 16H2a2 2 0 00-2 2v24a2 2 0 002 2h20a1.976 1.976 0 001.944-1.725A13.687 13.687 0 0116.3 30z"
      />
    </svg>
  `;
};
