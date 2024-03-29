import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudDisconnected = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Disconnected',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-CloudDisconnected-${count}`}"
      aria-describedby="${`title-CloudDisconnected-${count}`}"
    >
      <title id="${`title-CloudDisconnected-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CloudDisconnected-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.946 38H27.61a11.995 11.995 0 019.98-17.99s-.01-.947-.01-1.476A10.31 10.31 0 0027.124 8c-5.392 0-9.008 4.182-10.274 8.499a10.404 10.404 0 00-2.839-.396 8.492 8.492 0 00-8.657 8.282 6.627 6.627 0 00.18 2.15C2.426 26.535 0 29.987 0 32.347 0 35.748 1.774 38 4.946 38z"
      />
      <path
        d="M38 22a10 10 0 1010 10 10.01 10.01 0 00-10-10zm5.246 13.416a1.295 1.295 0 01-.915 2.211 1.302 1.302 0 01-.916-.381L38 33.83l-3.415 3.416a1.293 1.293 0 01-2.21-.915 1.286 1.286 0 01.379-.915L36.17 32l-3.37-3.404a1.151 1.151 0 01-.43-.828 1.417 1.417 0 011.346-1.383 1.302 1.302 0 01.916.38L38 30.17l3.368-3.404a1.302 1.302 0 01.916-.381 1.417 1.417 0 011.346 1.383 1.151 1.151 0 01-.43.828L39.83 32z"
      />
    </svg>
  `;
};
