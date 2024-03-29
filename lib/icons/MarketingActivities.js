import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MarketingActivities = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Marketing Activities',
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
      aria-labelledby="${`title-MarketingActivities-${count}`}"
      aria-describedby="${`title-MarketingActivities-${count}`}"
    >
      <title id="${`title-MarketingActivities-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MarketingActivities-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16.646 22.375l3.716 2.66a6.387 6.387 0 011.181-1.613l-3.772-2.7a6.406 6.406 0 01-1.125 1.653zm14.405 1.741a6.35 6.35 0 01.958 1.757l3.116-1.773a6.362 6.362 0 01-1.051-1.7zm2.075-12.323a6.452 6.452 0 01-1.421 1.407l3.031 3.174a6.424 6.424 0 011.395-1.437zM12.551 35.51a6.407 6.407 0 011.149 1.638l7.51-4.948a6.424 6.424 0 01-1.089-1.679zm4.193-21.767a6.394 6.394 0 011.1 1.672l5.348-3.235a6.407 6.407 0 01-1.085-1.68zM8 44.4a4.4 4.4 0 114.4-4.4A4.4 4.4 0 018 44.4zM30.4 28a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4zm14-8a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4zm-12-12a4.4 4.4 0 10-4.4 4.4A4.4 4.4 0 0032.4 8zm-16 10a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4z"
      />
    </svg>
  `;
};
