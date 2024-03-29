import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailGearOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Gear Outline',
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
      aria-labelledby="${`title-EmailGearOutline-${count}`}"
      aria-describedby="${`title-EmailGearOutline-${count}`}"
    >
      <title id="${`title-EmailGearOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailGearOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.1 32.207h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V21.9a.9.9 0 00-.9-.9H33.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H21.9a.9.9 0 00-.9.9V34.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V46.1a.9.9 0 00.9.9H34.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H46.1a.9.9 0 00.9-.9V33.1a.9.9 0 00-.9-.893zM34 37.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
      <path
        d="M19.864 41.879a4.877 4.877 0 01.575-2.307A4.9 4.9 0 0118.128 38H4v-2.809l14.182-8.566 2.255 1.8a4.882 4.882 0 01-.574-2.308 4.965 4.965 0 01.065-.663L4 12.7V10h40v2.731l-6.39 5.107a4.922 4.922 0 011.405 1.437L44 15.293v5.071a4.868 4.868 0 011.343.933l1.362 1.362A4.848 4.848 0 0148 25.046V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h17.876c-.001-.041-.012-.08-.012-.121zM4 15.265l12.516 10.028L4 32.854z"
      />
    </svg>
  `;
};
