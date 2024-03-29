import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Teapot = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Teapot',
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
      aria-labelledby="${`title-Teapot-${count}`}"
      aria-describedby="${`title-Teapot-${count}`}"
    >
      <title id="${`title-Teapot-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Teapot-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34.729 12a14.8 14.8 0 00-8.849-4.179 2.993 2.993 0 10-3.609.124 14.886 14.886 0 00-8 4.056zm2.363 4H11.3a21.909 21.909 0 00-1.893 5.545h-.044c-1.73-.716-1.5-1.3-2.972-5.138-.85-2.208-3.534-2.489-4.511-2.711a.984.984 0 00-1.095.545l-.594 1.186c-.262.539-.024 1.338.573 1.378a2.01 2.01 0 011.712.993 12.922 12.922 0 01.73 2.767c.288 1.57.551 4.489 2.106 6.446A9.74 9.74 0 009.7 29.977a16.856 16.856 0 007 9.713 2.039 2.039 0 001.1.31h13.4a2.039 2.039 0 001.1-.31 16.706 16.706 0 006.589-8.4c.129-.047.262-.092.384-.144a18.982 18.982 0 004.5-2.645 10.356 10.356 0 003.9-8.257A6.13 6.13 0 0037.092 16zm5.608 9.454a10.928 10.928 0 01-2.888 2.1A18.6 18.6 0 0040 25a20.319 20.319 0 00-1.18-6.469c1.155-1.3 3.385-2.191 4.866-.84 2.137 1.949.642 6.024-.986 7.763z"
      />
    </svg>
  `;
};
