import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VoiceOver = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Voice Over',
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
      aria-labelledby="${`title-VoiceOver-${count}`}"
      aria-describedby="${`title-VoiceOver-${count}`}"
    >
      <title id="${`title-VoiceOver-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VoiceOver-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M32 9a9 9 0 00-18 0v16a9 9 0 0018 0z" />
      <path
        d="M37.5 20H36a.5.5 0 00-.5.5V25a12.484 12.484 0 01-11.454 12.442l-1.036.086-1.052-.088A12.6 12.6 0 0110.5 25v-4.5a.5.5 0 00-.5-.5H8.5a.5.5 0 00-.5.5v4.076a15.292 15.292 0 0013.75 15.355V44H13a1 1 0 00-1 1v2a1 1 0 001 1h20a1 1 0 001-1v-2a1 1 0 00-1-1h-8.75v-4.066A14.992 14.992 0 0038 25v-4.5a.5.5 0 00-.5-.5z"
      />
    </svg>
  `;
};
