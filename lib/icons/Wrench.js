import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Wrench = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Wrench',
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
      aria-labelledby="${`title-Wrench-${count}`}"
      aria-describedby="${`title-Wrench-${count}`}"
    >
      <title id="${`title-Wrench-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Wrench-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.005 36.447L26.651 21.093c-4.889-4.931-1.666-11.607-6.3-16.244C16.363.863 8.54 1.885 6.756 3.008a.2.2 0 00.036.336l8.417 4.185a.5.5 0 01.276.408l.391 4.932a1 1 0 01-.458.922l-4.168 2.666a.5.5 0 01-.492.026l-8.482-4.216a.2.2 0 00-.286.121c-.206 1.356 1.672 5.473 4.216 8.017 4.243 4.243 10.55 2.106 13.374 4.93L34.6 43.09a5.081 5.081 0 00.533.63 5 5 0 007.418-.383 5.2 5.2 0 00-.546-6.89z"
        fill="currentColor"
      />
    </svg>
  `;
};
