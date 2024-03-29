import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Attributes = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Attributes',
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
      aria-labelledby="${`title-Attributes-${count}`}"
      aria-describedby="${`title-Attributes-${count}`}"
    >
      <title id="${`title-Attributes-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Attributes-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.25 41.455V45a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-1H15a1 1 0 01-1-1v-2a1 1 0 011-1h22.645a11.94 11.94 0 00-1.253-4H17.868a.773.773 0 01-.547-1.321l1.068-1.068A5.5 5.5 0 0122.278 32h10.914a15.114 15.114 0 00-2.522-1.766l-2.519-1.385 4.668-2.567.019.011a17.544 17.544 0 019.412 15.162zM15.162 21.707l.019.011 4.668-2.567-2.519-1.385A15.114 15.114 0 0114.808 16h10.914a5.5 5.5 0 003.889-1.611l1.068-1.068A.773.773 0 0030.132 12H11.608a11.94 11.94 0 01-1.253-4H33a1 1 0 001-1V5a1 1 0 00-1-1H10.25V3a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v3.545a17.544 17.544 0 009.412 15.162zM41.25 2h-2.5a1 1 0 00-1 1v3.545a12.893 12.893 0 01-7.08 11.221l-15.508 8.527A17.544 17.544 0 005.75 41.455V45a1 1 0 001 1h2.5a1 1 0 001-1v-3.545a12.893 12.893 0 017.08-11.221l15.508-8.527A17.544 17.544 0 0042.25 6.545V3a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  `;
};
