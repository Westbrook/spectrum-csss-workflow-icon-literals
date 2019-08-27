import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Answer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Answer',
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
      aria-labelledby="${`title-Answer-${count}`}"
      aria-describedby="${`title-Answer-${count}`}"
    >
      <title id="${`title-Answer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Answer-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 6H6a2 2 0 00-2 2v28a2 2 0 002 2h12l6 10 6-10 11.994-.006a2 2 0 002-2L44 8a2 2 0 00-2-2zm-21.2 4.828a.355.355 0 01.242-.4A11 11 0 0123.951 10a12.679 12.679 0 012.959.323.433.433 0 01.29.4v2.593c0 3.025-.824 11.523-.968 12.6 0 .108-.05.217-.34.217h-3.88a.3.3 0 01-.339-.217c-.1-1.008-.873-9.471-.873-12.495zM24 35a2.9 2.9 0 01-3.2-2.956A3.014 3.014 0 0124 29a2.967 2.967 0 013.2 3.044A2.9 2.9 0 0124 35z"
        fill="currentColor"
      />
    </svg>
  `;
};
