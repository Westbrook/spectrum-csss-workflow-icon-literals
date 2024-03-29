import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CampaignClose = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Campaign Close',
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
      aria-labelledby="${`title-CampaignClose-${count}`}"
      aria-describedby="${`title-CampaignClose-${count}`}"
    >
      <title id="${`title-CampaignClose-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CampaignClose-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10.157 26H4.1A20 20 0 0022 43.9v-6.06A14.015 14.015 0 0110.157 26zm0-4A14.015 14.015 0 0122 10.16V4.1A20 20 0 004.1 22zm27.685 0H43.9A20 20 0 0026 4.1v6.06A14.015 14.015 0 0137.842 22zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3zM29.451 21.523a5.992 5.992 0 10-7.929 7.929 15.941 15.941 0 017.929-7.929z"
      />
    </svg>
  `;
};
