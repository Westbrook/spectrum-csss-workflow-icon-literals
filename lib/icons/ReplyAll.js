import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ReplyAll = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Reply All',
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
      aria-labelledby="${`title-ReplyAll-${count}`}"
      aria-describedby="${`title-ReplyAll-${count}`}"
    >
      <title id="${`title-ReplyAll-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ReplyAll-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M28 8V3a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-10 10a1 1 0 000 1.494l10 10a.979.979 0 00.658.255A1 1 0 0028 23v-4.815a19.124 19.124 0 013.724-.259c5.437.41 9.777 3.917 12.424 7.256a.612.612 0 001.1-.366C45.252 22.121 42.278 8.051 28 8zM15.249 24H14v-5a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-10 11a1 1 0 000 1.494l10 11a.979.979 0 00.658.255A1 1 0 0014 41v-5c8.337-1.667 16.133 3.007 19.869 7.717a.7.7 0 001.267-.42C35.136 40.2 31.71 24 15.249 24z"
      />
    </svg>
  `;
};
