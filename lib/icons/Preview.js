import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Preview = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Preview',
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
      aria-labelledby="${`title-Preview-${count}`}"
      aria-describedby="${`title-Preview-${count}`}"
    >
      <title id="${`title-Preview-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Preview-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.321 43.926l-6.785-6.784a10.1 10.1 0 10-3.394 3.394l6.784 6.785c.469.468 2.5.889 3.395 0a2.446 2.446 0 000-3.395zM19.8 32a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2zM44 28.008z"
      />
      <path
        d="M42 6H2a2 2 0 00-2 2v32a2 2 0 002 2h14.211a14.019 14.019 0 01-2.846-4H4V14h36v21.257l4 4V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
