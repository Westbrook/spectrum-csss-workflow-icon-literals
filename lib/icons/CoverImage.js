import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CoverImage = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cover Image',
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
      aria-labelledby="${`title-CoverImage-${count}`}"
      aria-describedby="${`title-CoverImage-${count}`}"
    >
      <title id="${`title-CoverImage-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CoverImage-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M34.594 16.4a3.094 3.094 0 11-3.094-3.1 3.1 3.1 0 013.094 3.1z" />
      <path
        d="M46 6H2a2 2 0 00-2 2v28a2 2 0 002 2h3.545A16.523 16.523 0 0110 36.409 14.75 14.75 0 017.317 28.2a15.351 15.351 0 01.116-1.8A25.032 25.032 0 004 29.7V10h40v21.311c-1.919-2.035-7.22-5.909-8.762-5.847-1.116.083-4.42 3.016-6.769 4.47a14.97 14.97 0 01-2.455 6.507A17.024 17.024 0 0130.345 38H46a2 2 0 002-2V8a2 2 0 00-2-2z"
      />
      <path
        d="M32 45.5a3.971 3.971 0 00-1.333-2.995 12.868 12.868 0 00-7.3-2.843A1.457 1.457 0 0122.1 38.2v-2.106a1.415 1.415 0 01.351-.918 11.133 11.133 0 002.558-6.976c0-5.261-2.79-8.2-7.007-8.2s-7.085 3.055-7.085 8.2a11.263 11.263 0 002.679 6.98 1.406 1.406 0 01.347.913v2.1a1.45 1.45 0 01-1.265 1.463A12.337 12.337 0 005.286 42.5 3.979 3.979 0 004 45.45V48h28z"
      />
    </svg>
  `;
};
