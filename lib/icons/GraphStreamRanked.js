import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphStreamRanked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Stream Ranked',
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
      aria-labelledby="${`title-GraphStreamRanked-${count}`}"
      aria-describedby="${`title-GraphStreamRanked-${count}`}"
    >
      <title id="${`title-GraphStreamRanked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphStreamRanked-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M13.973 20c3.258 0 5.518 1.531 7.51 2.881 1.668 1.131 3.107 2.105 4.957 2.105.895-.516 1.273-5.029 1.479-7.453.041-.493.086-1 .133-1.519a2.089 2.089 0 01-1.612 1c-4.077 0-7-4.986-12.466-4.986C6.518 12.03 7.33 17.017 4 17.017v7.973c.91 0 1.57-.57 2.756-1.66C8.279 21.926 10.367 20 13.973 20zm29.918 21.453c-9.276 0-12.177-2.344-14.437-2.454-7.76-.377-10.25 2.454-15.481 2.454-3.809 0-8.76-2.494-9.973-2.494v5.483h39.891zm0-17.453H41.4c-3.287 0-3.9 2.139-4.518 7.02a15.848 15.848 0 01-1.419 5.556 34.245 34.245 0 008.429.878z"
      />
      <path
        d="M43.891 6.551h-7.479c-3.3 0-3.951 4.693-4.508 11.322-.461 5.465-.935 11.117-5.465 11.117-3.078 0-5.268-1.484-7.2-2.793C17.5 25.02 16 24 13.973 24c-2.045 0-3.131 1-4.506 2.267S6.514 28.99 4 28.99v5.969a10.939 10.939 0 014.947 1.279 10.494 10.494 0 005.025 1.215 20.781 20.781 0 005.49-.9 43.028 43.028 0 019.469-1.525A4.3 4.3 0 0129.49 35a51.662 51.662 0 011.936-.037c.793 0 1.1-1.369 1.486-4.441C33.441 26.33 34.24 20 41.4 20h2.492z"
      />
    </svg>
  `;
};
