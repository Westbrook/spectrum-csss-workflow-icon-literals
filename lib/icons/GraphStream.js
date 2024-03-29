import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphStream = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Stream',
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
      aria-labelledby="${`title-GraphStream-${count}`}"
      aria-describedby="${`title-GraphStream-${count}`}"
    >
      <title id="${`title-GraphStream-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphStream-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 21.667c-2.792 0-4.8-1.38-6.747-2.713-1.964-1.349-3.818-2.62-6.586-2.62-2.284 0-3.922.865-6 1.961A25.168 25.168 0 014 21.378v5.232a54.253 54.253 0 015.724 1.1A36.056 36.056 0 0018.667 29a25.02 25.02 0 006.733-1.347 24.028 24.028 0 016.6-1.32 28.081 28.081 0 016.464 1.136c1.719.431 3.588.875 5.536 1.178v-9.388a37.278 37.278 0 00-5.644 1.262A22.156 22.156 0 0132 21.667zM32 12c-6.6 0-7.142-8-13.333-8C13.368 4 11.07 11.8 4 14.047V18a22.272 22.272 0 007.114-2.659C13.4 14.141 15.558 13 18.667 13c3.8 0 6.283 1.7 8.471 3.2 1.667 1.143 3.1 2.13 4.862 2.13a19.373 19.373 0 005.442-1.016A39.341 39.341 0 0144 15.9V7.188C39.222 8.527 37.325 12 32 12zm0 17.667a22.012 22.012 0 00-5.656 1.182 27.4 27.4 0 01-7.677 1.484 39.358 39.358 0 01-9.711-1.377c-1.631-.386-3.229-.744-4.956-.988v3.906c5.053 1.352 8.733 4.793 14.667 4.793C23.28 38.667 28.086 36 32 36c3.293 0 5.7 3.763 12 4.961v-8.947a61.232 61.232 0 01-6.347-1.31A26.052 26.052 0 0032 29.667z"
        fill="currentColor"
      />
    </svg>
  `;
};
