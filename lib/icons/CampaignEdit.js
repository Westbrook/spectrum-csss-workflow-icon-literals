import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CampaignEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Campaign Edit',
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
      aria-labelledby="${`title-CampaignEdit-${count}`}"
      aria-describedby="${`title-CampaignEdit-${count}`}"
    >
      <title id="${`title-CampaignEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CampaignEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="6" />
      <path
        d="M10.157 26H4.1A20 20 0 0022 43.9v-6.06A14.015 14.015 0 0110.157 26zm0-4A14.015 14.015 0 0122 10.16V4.1A20 20 0 004.1 22zm27.685 0H43.9A20 20 0 0026 4.1v6.06A14.015 14.015 0 0137.842 22zm9.825 7.01l-4.68-4.68a.987.987 0 00-.7-.287h-.031a1.112 1.112 0 00-.753.33L27.054 38.82a.812.812 0 00-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2L47.624 30.5a1.115 1.115 0 00.328-.717.992.992 0 00-.285-.773zM32.179 43.645c-1.754.527-4.505 1.747-6.02 2.2l2.189-6.022z"
      />
    </svg>
  `;
};
