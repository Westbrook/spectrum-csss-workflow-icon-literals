import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ApplicationDelivery = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Application Delivery',
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
      aria-labelledby="${`title-ApplicationDelivery-${count}`}"
      aria-describedby="${`title-ApplicationDelivery-${count}`}"
    >
      <title id="${`title-ApplicationDelivery-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ApplicationDelivery-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M13.811 38.383A5.045 5.045 0 0113.459 36H10a2 2 0 01-2-2V10a2 2 0 012-2h24a2 2 0 012 2v2.9a4.168 4.168 0 012.725.269l1.275.52V10a6 6 0 00-6-6H10a6 6 0 00-6 6v24a6 6 0 006 6h4.488z"
      />
      <path
        d="M44.948 24.168l-2.8 1.175a11.662 11.662 0 00-3.364-3.369l1.155-2.822a1.077 1.077 0 00-.589-1.407l-2.14-.877a1.079 1.079 0 00-1.408.59l-1.158 2.822a11.667 11.667 0 00-4.761.042l-1.174-2.8a1.078 1.078 0 00-1.412-.578l-1.991.834a1.079 1.079 0 00-.578 1.412l1.175 2.8a11.662 11.662 0 00-3.369 3.364L19.712 24.2a1.078 1.078 0 00-1.407.59l-.877 2.14a1.078 1.078 0 00.59 1.407l2.822 1.156a11.667 11.667 0 00.042 4.761l-2.8 1.174a1.079 1.079 0 00-.578 1.412l.834 1.991a1.079 1.079 0 001.412.578l2.8-1.175a11.665 11.665 0 003.364 3.37l-1.155 2.821a1.077 1.077 0 00.589 1.407l2.14.877a1.08 1.08 0 001.408-.59l1.155-2.819a11.685 11.685 0 004.761-.043l1.174 2.8a1.079 1.079 0 001.412.578l1.991-.834a1.079 1.079 0 00.578-1.412l-1.174-2.8a11.674 11.674 0 003.369-3.364l2.821 1.156a1.08 1.08 0 001.407-.59l.877-2.14a1.079 1.079 0 00-.59-1.408l-2.821-1.155a11.685 11.685 0 00-.043-4.761l2.8-1.174a1.08 1.08 0 00.578-1.412l-.834-1.991a1.079 1.079 0 00-1.409-.582zm-8.62 5.952a4.316 4.316 0 11-5.648-2.313 4.315 4.315 0 015.648 2.313z"
      />
    </svg>
  `;
};
