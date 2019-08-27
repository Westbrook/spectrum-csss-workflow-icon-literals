import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewDetail = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Detail',
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
      aria-labelledby="${`title-ViewDetail-${count}`}"
      aria-describedby="${`title-ViewDetail-${count}`}"
    >
      <title id="${`title-ViewDetail-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewDetail-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.7 42.3l-7.161-7.161a10.1 10.1 0 10-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 00.006-3.4zM23.8 30a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2z"
      />
      <path
        d="M17.365 36H8V8h28v9.365a14.024 14.024 0 014 2.846V6a2 2 0 00-2-2H6a2 2 0 00-2 2v32a2 2 0 002 2h14.211a14.024 14.024 0 01-2.846-4z"
      />
    </svg>
  `;
};
