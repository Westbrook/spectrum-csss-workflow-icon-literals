import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsPublished = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Published',
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
      aria-labelledby="${`title-AssetsPublished-${count}`}"
      aria-describedby="${`title-AssetsPublished-${count}`}"
    >
      <title id="${`title-AssetsPublished-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsPublished-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 32H6V8h36v8l4-.875V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h11.392zm17.75 5.125l11.276 5.907a1 1 0 001.344-.446l8.916-20.729zm-3.67 2.125v7.639a.713.713 0 001.174.544l5.36-4.516z"
      />
      <path d="M45.478 20.135a.1.1 0 00-.084-.18l-30.878 9.952a.5.5 0 00-.08.926l7.917 3.953z" />
    </svg>
  `;
};
