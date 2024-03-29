import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TagBold = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tag Bold',
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
      aria-labelledby="${`title-TagBold-${count}`}"
      aria-describedby="${`title-TagBold-${count}`}"
    >
      <title id="${`title-TagBold-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TagBold-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 6.8c0-.271.06-.433.372-.486 2.226-.054 8.567-.162 12.715-.162C34.021 6.152 36 12.106 36 15.572a8.194 8.194 0 01-3.9 7.038c2.29 1.03 5.939 3.411 5.939 8.392 0 6.822-6.743 10.937-16.955 10.937-5.384 0-10.3-.054-12.655-.108C8.124 41.777 8 41.614 8 41.4zm7.971 13.423h4.479a41.277 41.277 0 015.361.31 4.713 4.713 0 002.241-4.081c0-3.05-2.595-4.548-7.424-4.548-1.887 0-3.417.051-4.657.051zm0 15.857c1.3.053 2.786.107 4.565.107 5.568.054 9.123-1.661 9.123-5.251 0-2.2-1.183-3.966-4.264-4.662a17.167 17.167 0 00-4.029-.375h-5.395z"
        fill="currentColor"
      />
    </svg>
  `;
};
