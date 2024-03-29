import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeviceRotatePortrait = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Rotate Portrait',
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
      aria-labelledby="${`title-DeviceRotatePortrait-${count}`}"
      aria-describedby="${`title-DeviceRotatePortrait-${count}`}"
    >
      <title id="${`title-DeviceRotatePortrait-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeviceRotatePortrait-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.764 25.367a.786.786 0 00.236-.56.8.8 0 00-.8-.807h-8.7a.5.5 0 00-.5.5v8.7a.8.8 0 00.806.8.785.785 0 00.56-.236l2.875-2.875a8.063 8.063 0 01-4.3 12.985 8.091 8.091 0 01-4.727-15.452A1.147 1.147 0 0032 27.357V25.28a.8.8 0 00-.979-.79 11.891 11.891 0 00-8.89 12.382A12.049 12.049 0 0033.823 47.9 11.9 11.9 0 0045.9 36a11.744 11.744 0 00-2.974-7.8z"
      />
      <path
        d="M17.046 30H8V12h32v8h6v-8a4 4 0 00-4-4H6a4 4 0 00-4 4v18a4 4 0 004 4h10.117a17.91 17.91 0 01.929-4zM6 23a1 1 0 01-2 0v-4a1.04 1.04 0 011-1 1.04 1.04 0 011 1z"
      />
    </svg>
  `;
};
