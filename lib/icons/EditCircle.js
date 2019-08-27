import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EditCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Edit Circle',
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
      aria-labelledby="${`title-EditCircle-${count}`}"
      aria-describedby="${`title-EditCircle-${count}`}"
    >
      <title id="${`title-EditCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EditCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14.5 33.5c1.56-.466 4.393-1.723 6.2-2.266L16.754 27.3z" />
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm-2.058 28.587a.864.864 0 01-.365.219c-1.271.382-8.552 2.993-8.8 3.049a.237.237 0 01-.054.005c-.285 0-.789-.417-.689-.748l3.048-8.791a.88.88 0 01.221-.371L30.961 10.4a1.207 1.207 0 01.815-.358h.034a1.069 1.069 0 01.762.311l5.071 5.071a1.075 1.075 0 01.308.834 1.208 1.208 0 01-.356.777z"
      />
    </svg>
  `;
};
