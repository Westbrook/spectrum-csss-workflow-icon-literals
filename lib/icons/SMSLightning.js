import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SMSLightning = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'SMSLightning',
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
      aria-labelledby="${`title-SMSLightning-${count}`}"
      aria-describedby="${`title-SMSLightning-${count}`}"
    >
      <title id="${`title-SMSLightning-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SMSLightning-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v26a2 2 0 002 2h6l5.571 9.285a.5.5 0 00.858 0l2.131-3.551a15.7 15.7 0 012.756-13.293h-.561a.416.416 0 01-.452-.321 514.87 514.87 0 01-2.6-10.177c-.062 2.6-.214 6.661-.358 10.111l-.01.238-.391.148h-2.278l-.173-.421L17.3 12.1l.406-.129h3.256a.436.436 0 01.443.3c.421 1.466 1.89 6.705 2.521 9.433.431-1.575 1.2-4.116 1.844-6.24.394-1.3.744-2.458.948-3.166l.065-.144.343-.187h3.4l.186.333.352 8.591a15.865 15.865 0 014.859-.789c-2.1-1.05-3.016-2.3-3.016-4.143 0-2.555 1.952-4.206 4.977-4.206a7.148 7.148 0 013.158.564.471.471 0 01.26.476v2.258l-.338.122h-.088l-.152-.092a5.918 5.918 0 00-2.84-.608c-1.323 0-2.083.474-2.083 1.3 0 .6.313 1.092 1.91 1.828l.766.34c1.97.9 3.027 1.926 3.383 3.286A15.8 15.8 0 0144 22.272V6a2 2 0 00-2-2zM9.885 26.636a7.914 7.914 0 01-3.624-.736.566.566 0 01-.261-.54v-2.388l.333-.1a7.146 7.146 0 003.618 1.065c1.371 0 2.127-.491 2.127-1.379 0-.607-.319-1.138-1.895-1.916l-.912-.4C6.977 19.161 6 17.882 6 15.961c0-2.555 1.952-4.206 4.977-4.206a7.133 7.133 0 013.158.564.471.471 0 01.26.476v2.258l-.338.122h-.087l-.154-.092a5.883 5.883 0 00-2.839-.608c-1.322 0-2.084.474-2.084 1.3 0 .6.314 1.092 1.912 1.828l.768.34c2.476 1.135 3.527 2.451 3.527 4.4 0 2.608-2.047 4.293-5.215 4.293zm16.2-3.54l-.178.617a15.985 15.985 0 012.233-1.525c-.028-2.3-.047-4.567-.053-6.15-.519 1.929-1.317 4.698-2.001 7.062z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm5.119 12.838l-7.435 8.5a.769.769 0 01-1.287-.805l2.508-5.955-3.548-1.523a1.328 1.328 0 01-.476-2.094l7.435-8.5a.769.769 0 011.287.8l-2.509 5.955 3.548 1.523a1.328 1.328 0 01.477 2.099z"
      />
    </svg>
  `;
};