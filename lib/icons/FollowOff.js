import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FollowOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Follow Off',
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
      aria-labelledby="${`title-FollowOff-${count}`}"
      aria-describedby="${`title-FollowOff-${count}`}"
    >
      <title id="${`title-FollowOff-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FollowOff-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M11.658 37.325l-.927.12a3.548 3.548 0 01-3.975-3.063l-.371-3.33 7.964-1.032.371 3.33a3.548 3.548 0 01-3.062 3.975zm-2.62-33.69C6.991 1.248 4.7 1.023 3.083 6.044c-2.4 10.632-.538 14.923 2.839 21.9l7.964-1.032c-.854-6.592.787-9.552.443-12.2A21.473 21.473 0 009.038 3.635zm9.694 31.67l1.379.233a15.905 15.905 0 0110.964-14.559 44.426 44.426 0 00-.75-6.115C28.9 9.785 26.6 9.922 24.467 12.229a21.47 21.47 0 00-5.711 10.863c-.444 2.638 1.082 5.658-.024 12.213zm1.601 3.519l-2.187-.369-.493 3.251a3.548 3.548 0 002.908 4.089l.922.156a3.535 3.535 0 001.885-.2 15.835 15.835 0 01-3.035-6.927z"
      />
      <path
        d="M36.1 24.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zm8.925 11.9a8.858 8.858 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0145.025 36.1zm-17.85 0a8.858 8.858 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.175 36.1z"
      />
    </svg>
  `;
};
