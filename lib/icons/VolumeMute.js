import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VolumeMute = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume Mute',
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
      aria-labelledby="${`title-VolumeMute-${count}`}"
      aria-describedby="${`title-VolumeMute-${count}`}"
    >
      <title id="${`title-VolumeMute-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VolumeMute-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32.1 24.1A11.9 11.9 0 1044 36a11.9 11.9 0 00-11.9-11.9zM41.025 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0141.025 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0123.175 36zm-6.975.1A15.774 15.774 0 0122 23.746V7.155a.931.931 0 00-1.542-.761l-9.8 9.154a2.018 2.018 0 01-1.284.46L2 16.013A1.994 1.994 0 000 18v12.013A1.994 1.994 0 002 32h7.375a2 2 0 011.28.455l5.634 5.313A15.865 15.865 0 0116.2 36.1z"
      />
    </svg>
  `;
};
