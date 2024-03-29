import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CropRotate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Crop Rotate',
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
      aria-labelledby="${`title-CropRotate-${count}`}"
      aria-describedby="${`title-CropRotate-${count}`}"
    >
      <title id="${`title-CropRotate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CropRotate-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 30V11a1 1 0 00-1-1h-2a1 1 0 00-1 1v3h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v15a1 1 0 001 1h15v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1v-2a1 1 0 00-1-1zM38 4.5h-1V.8a.8.8 0 00-.806-.8.781.781 0 00-.559.236L30.11 5.687a.5.5 0 000 .626l5.524 5.451a.785.785 0 00.56.236.8.8 0 00.806-.8V7.5h1a6 6 0 016 6v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5a9 9 0 00-9-9zM17.89 41.687l-5.524-5.451a.785.785 0 00-.56-.236.8.8 0 00-.806.8v3.7h-1a6 6 0 01-6-6V34a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5a9 9 0 009 9h1v3.7a.8.8 0 00.806.8.781.781 0 00.559-.236l5.525-5.451a.5.5 0 000-.626z"
      />
      <path d="M30 18H20v-4h13a1 1 0 011 1v13h-4z" />
    </svg>
  `;
};
