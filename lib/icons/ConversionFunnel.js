import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ConversionFunnel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Conversion Funnel',
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
      aria-labelledby="${`title-ConversionFunnel-${count}`}"
      aria-describedby="${`title-ConversionFunnel-${count}`}"
    >
      <title id="${`title-ConversionFunnel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ConversionFunnel-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M12 32v14a2 2 0 002 2h18a2 2 0 002-2V32zm17.3 5.6l-6.737 8.983a.5.5 0 01-.754.054l-4.87-4.87a.5.5 0 010-.707l2.121-2.121a.5.5 0 01.707 0l2.016 2.016L26.1 35.2a.5.5 0 01.7-.1l2.4 1.8a.5.5 0 01.1.7zM6 16l4.5 12h25L40 16H6zM44.557 0H1.443a1 1 0 00-.936 1.351L4.5 12h37l3.993-10.649A1 1 0 0044.557 0z"
      />
    </svg>
  `;
};
