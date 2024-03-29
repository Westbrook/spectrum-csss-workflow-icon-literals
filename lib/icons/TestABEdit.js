import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TestABEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Test AB Edit',
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
      aria-labelledby="${`title-TestABEdit-${count}`}"
      aria-describedby="${`title-TestABEdit-${count}`}"
    >
      <title id="${`title-TestABEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TestABEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6.425 24.148l-1.744 5.234a.314.314 0 01-.349.254H1.16c-.19 0-.254-.1-.222-.317l6.534-18.588a4.851 4.851 0 00.285-1.713c0-.127.063-.222.19-.222h4.409c.159 0 .19.032.222.19l7.327 20.365c.032.19 0 .285-.19.285h-3.551a.318.318 0 01-.317-.19l-1.84-5.3zm6.566-3.458c-.666-2.093-2.157-6.5-2.791-8.723h-.032c-.507 2.126-1.776 5.833-2.728 8.724zM23.4 30.841c-.032.127-.1.159-.222.159h-2.635c-.159 0-.19-.063-.159-.19l6.249-23.251c.032-.127.063-.127.19-.127h2.664c.127 0 .159.032.127.159zm12.375-6.398v-4.038h2.886a10.254 10.254 0 011.509.108 5 5 0 015.654 1l1.161 1.162a5.33 5.33 0 00-3-4.3 4.952 4.952 0 002-4.124c0-2.03-1.016-5.519-7.644-5.519-2.126 0-5.013.063-6.154.1-.158.032-.19.127-.19.285v19.1zm0-12.412c.666 0 1.49-.032 2.506-.032 2.6 0 4 .92 4 2.791a3 3 0 01-1.209 2.51 19.525 19.525 0 00-2.887-.19h-2.41z"
      />
      <path
        d="M47.668 29.01l-4.68-4.68a.987.987 0 00-.7-.287h-.031a1.112 1.112 0 00-.753.33L27.055 38.82a.812.812 0 00-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2L47.624 30.5a1.115 1.115 0 00.328-.717.992.992 0 00-.284-.773zM32.18 43.645c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022z"
      />
    </svg>
  `;
};
