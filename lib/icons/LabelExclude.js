import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LabelExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Label Exclude',
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
      aria-labelledby="${`title-LabelExclude-${count}`}"
      aria-describedby="${`title-LabelExclude-${count}`}"
    >
      <title id="${`title-LabelExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LabelExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.1 36.1a15.9 15.9 0 0119.172-15.559L23.317 4.586A2 2 0 0021.9 4H6a2 2 0 00-2 2v15.9a2 2 0 00.586 1.414L20.4 39.128a15.954 15.954 0 01-.3-3.028zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
