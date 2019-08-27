import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CampaignDelete = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Campaign Delete',
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
      aria-labelledby="${`title-CampaignDelete-${count}`}"
      aria-describedby="${`title-CampaignDelete-${count}`}"
    >
      <title id="${`title-CampaignDelete-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CampaignDelete-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10.157 22A14.015 14.015 0 0122 10.16V4.1A20 20 0 004.1 22zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm-6.577-17.328A15.8 15.8 0 0143.539 22h.361A20 20 0 0026 4.1v6.06a14 14 0 0111.423 10.012zM20.171 37.421A14 14 0 0110.157 26H4.1A20 20 0 0022 43.9v-.36a15.793 15.793 0 01-1.829-6.119zm9.28-15.898a5.992 5.992 0 10-7.929 7.929 15.941 15.941 0 017.929-7.929z"
      />
    </svg>
  `;
};
