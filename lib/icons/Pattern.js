import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pattern = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pattern',
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
      aria-labelledby="${`title-Pattern-${count}`}"
      aria-describedby="${`title-Pattern-${count}`}"
    >
      <title id="${`title-Pattern-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pattern-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="8" x="4" y="8" />
      <rect height="4" rx="1" ry="1" width="10" x="18" y="8" />
      <rect height="4" rx="1" ry="1" width="8" x="34" y="8" />
      <path
        d="M15 16a1 1 0 01-1-1V7a1 1 0 012 0v8a1 1 0 01-1 1zm16 0a1 1 0 01-1-1V7a1 1 0 012 0v8a1 1 0 01-1 1z"
      />
      <rect height="4" rx="1" ry="1" width="8" x="26" y="18" />
      <rect height="4" rx="1" ry="1" width="8" x="12" y="18" />
      <path
        d="M9 24a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"
      />
      <rect height="4" rx="1" ry="1" width="8" x="4" y="26" />
      <rect height="4" rx="1" ry="1" width="10" x="18" y="26" />
      <rect height="4" rx="1" ry="1" width="8" x="34" y="26" />
      <path
        d="M15 34a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm16 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"
      />
      <rect height="4" rx="1" ry="1" width="8" x="26" y="36" />
      <rect height="4" rx="1" ry="1" width="8" x="12" y="36" />
      <path
        d="M9 42a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"
      />
    </svg>
  `;
};
