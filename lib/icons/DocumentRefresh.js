import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DocumentRefresh = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Document Refresh',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-DocumentRefresh-${count}`}"
      aria-describedby="${`title-DocumentRefresh-${count}`}"
    >
      <title id="${`title-DocumentRefresh-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DocumentRefresh-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 0v10h10L26 0zm19.231 36h-1.056a1.012 1.012 0 00-.984.863 9.134 9.134 0 01-8.846 7.717 8.15 8.15 0 01-5.66-2.135l3.079-3.08a.784.784 0 00.236-.56.803.803 0 00-.801-.805H22.5a.5.5 0 00-.5.5v8.698a.801.801 0 00.806.802.784.784 0 00.56-.236l3.009-3.008A11.568 11.568 0 0034.345 48c6.024 0 10.995-4.725 11.885-10.891a.995.995 0 00-.999-1.11zm-21.772 0h1.056a1.012 1.012 0 00.984-.864 9.134 9.134 0 018.846-7.716 8.692 8.692 0 015.297 1.808l-3.406 3.406a.784.784 0 00-.236.56.803.803 0 00.801.806H45.5a.5.5 0 00.5-.5v-8.698a.801.801 0 00-.806-.802.784.784 0 00-.56.236l-2.676 2.676A11.457 11.457 0 0034.345 24c-6.023 0-10.995 4.724-11.886 10.89a.995.995 0 001 1.11z"
      />
      <path
        d="M18 36a15.906 15.906 0 0118-15.862V14H24a2 2 0 01-2-2V0H6a2 2 0 00-2 2v36a2 2 0 002 2h12.524A15.974 15.974 0 0118 36z"
      />
    </svg>
  `;
};
