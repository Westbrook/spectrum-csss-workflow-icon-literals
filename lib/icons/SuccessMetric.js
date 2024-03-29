import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SuccessMetric = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Success Metric',
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
      aria-labelledby="${`title-SuccessMetric-${count}`}"
      aria-describedby="${`title-SuccessMetric-${count}`}"
    >
      <title id="${`title-SuccessMetric-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SuccessMetric-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="10" rx="2" ry="2" width="10" x="4" y="34" />
      <rect height="30" rx="2.003" ry="2.003" width="10" x="18" y="14" />
      <rect height="16" rx="2" ry="2" width="10" x="32" y="28" />
      <path
        d="M15.529 21.529h-6.49a1 1 0 01-1-1v-.5a1 1 0 011-1h6.49zM10.562 9.584l4.967 3.18-1.346 2.1-4.967-3.18a1 1 0 01-.3-1.381l.268-.418a1 1 0 011.378-.301zm10.747 1.958L19 4.267a.5.5 0 00-.628-.325l-1.428.458a.5.5 0 00-.325.628l2.071 6.519zm9.201 9.987H37a1 1 0 001-1v-.5a1 1 0 00-1-1h-6.49zm4.967-11.945l-4.967 3.18 1.346 2.1 4.967-3.18a1 1 0 00.3-1.381l-.268-.418a1 1 0 00-1.378-.301zM24.73 11.542l2.31-7.275a.5.5 0 01.628-.325l1.427.453a.5.5 0 01.325.628l-2.071 6.519z"
      />
    </svg>
  `;
};
