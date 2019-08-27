import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TagItalic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tag Italic',
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
      aria-labelledby="${`title-TagItalic-${count}`}"
      aria-describedby="${`title-TagItalic-${count}`}"
    >
      <title id="${`title-TagItalic-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TagItalic-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.574 41.527c-.052.272-.1.382-.36.382h-5.226c-.255 0-.357-.055-.307-.437l5.738-35.048c.053-.273.2-.326.36-.326h5.278c.308 0 .358.162.358.435z"
        fill="currentColor"
      />
    </svg>
  `;
};
