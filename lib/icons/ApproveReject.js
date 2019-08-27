import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ApproveReject = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Approve Reject',
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
      aria-labelledby="${`title-ApproveReject-${count}`}"
      aria-describedby="${`title-ApproveReject-${count}`}"
    >
      <title id="${`title-ApproveReject-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ApproveReject-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M7 18a1 1 0 01-1-1v-2a1 1 0 011-1h16.376a19.836 19.836 0 018.106-1.974A15.816 15.816 0 0016 .2 15.661 15.661 0 00.2 16a15.815 15.815 0 0011.826 15.482A19.912 19.912 0 0117.765 18z"
      />
      <path
        d="M32 16a16 16 0 00-16 16 15.831 15.831 0 0016 15.8A15.661 15.661 0 0047.8 32 15.831 15.831 0 0032 16zm8.739 11.07L30.033 40.8a1.212 1.212 0 01-.875.461h-.072a1.2 1.2 0 01-.85-.352l-5.884-5.893a1.2 1.2 0 010-1.7L23.678 32a1.2 1.2 0 011.7 0l3.445 3.444 8.57-10.981a1.2 1.2 0 011.685-.21l1.455 1.133a1.2 1.2 0 01.206 1.684z"
      />
    </svg>
  `;
};
