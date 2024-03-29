import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinkCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Link Check',
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
      aria-labelledby="${`title-LinkCheck-${count}`}"
      aria-describedby="${`title-LinkCheck-${count}`}"
    >
      <title id="${`title-LinkCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LinkCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.133 36.75c-.851.87-1.932 2-2.187 2.252A6.327 6.327 0 019 30.055l8.214-8.214c2.471-2.471 6.854-2.75 9.325-.279a9.217 9.217 0 01.966 1.115 15.8 15.8 0 013.991-1.819 10.911 10.911 0 00-1.808-2.445 11.28 11.28 0 00-15.829.073L5.643 26.7A11.071 11.071 0 0021.3 42.357l.056-.056a15.829 15.829 0 01-1.223-5.551zM26.991 12c.8-.8 2.732-2.668 3.063-3A6.327 6.327 0 1139 17.945l-2.291 2.291a15.826 15.826 0 015.49 1.22l.156-.156A11.071 11.071 0 0026.7 5.643c-.595.594-3.806 3.741-5.482 5.418a12.819 12.819 0 015.773.939z"
      />
      <path
        d="M22.72 27.367a5.543 5.543 0 01-1.294-.933 6.42 6.42 0 01-1.914-2.508 3.1 3.1 0 00-.659.491l-2.524 2.641a11.039 11.039 0 001.893 2.581 9.521 9.521 0 002.572 1.816 15.85 15.85 0 011.926-4.088zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
