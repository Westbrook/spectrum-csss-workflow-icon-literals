import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailExcludeOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Exclude Outline',
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
      aria-labelledby="${`title-EmailExcludeOutline-${count}`}"
      aria-describedby="${`title-EmailExcludeOutline-${count}`}"
    >
      <title id="${`title-EmailExcludeOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailExcludeOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 36H4v-2.809l14.182-8.566 3.945 3.156c.038.03.084.04.123.068a16.015 16.015 0 011.115-1.64L4 10.7V8h40v2.731L31.629 20.62a15.97 15.97 0 013.95-.6L44 13.293v8.865a16.05 16.05 0 014 3.283V6a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h18.524A15.988 15.988 0 0120 36zM4 13.265l12.516 10.028L4 30.854z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
