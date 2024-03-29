import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextBaselineShift = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Baseline Shift',
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
      aria-labelledby="${`title-TextBaselineShift-${count}`}"
      aria-describedby="${`title-TextBaselineShift-${count}`}"
    >
      <title id="${`title-TextBaselineShift-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextBaselineShift-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.313 31.11a.5.5 0 00-.626 0l-5.451 5.524a.785.785 0 00-.236.56.8.8 0 00.8.806H36v7a1 1 0 001 1h2a1 1 0 001-1v-7h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56zM37.276 22a16.717 16.717 0 006.473-1.263.425.425 0 00.275-.438 12.364 12.364 0 01-.1-1.621v-6.647c0-3.9-2.314-6.138-6.349-6.138a12.642 12.642 0 00-4.719.842.418.418 0 00-.253.391v2.278c0 .329.315.446.641.223a6.277 6.277 0 013.689-.985c3.576 0 3.757 2.332 3.757 2.8v.776l-.393-.04c-.291-.032-1.056-.064-2.051-.064-4.524 0-7.225 1.816-7.225 4.86.006 3.148 2.341 5.026 6.255 5.026zm1.213-7.345a14.609 14.609 0 011.9.1l.4.071v4.2l-.308.13a6.638 6.638 0 01-2.527.417c-3.3 0-3.868-1.278-3.868-2.456s.935-2.462 4.403-2.462z"
      />
      <rect height="4" rx="1" ry="1" width="23.989" x="2" y="36" />
      <rect height="4" rx="1" ry="1" width="15.975" x="30" y="24" />
      <path
        d="M2.694 33h2.727a.515.515 0 00.555-.4L8.8 24.657h9.84l2.9 8.033a.6.6 0 00.523.31h3.047a.43.43 0 00.393-.19.411.411 0 000-.419L16.087 6.384A.435.435 0 0015.609 6h-3.93a.433.433 0 00-.446.435 4.13 4.13 0 01-.266 1.573L2.213 32.387a.524.524 0 00.09.448.481.481 0 00.391.165zm8.026-14.285c1.158-3.325 2.353-6.751 2.989-8.926.658 2.158 1.93 5.8 2.886 8.54.376 1.075.712 2.033.955 2.749H9.9c.264-.768.539-1.563.82-2.363z"
      />
    </svg>
  `;
};
