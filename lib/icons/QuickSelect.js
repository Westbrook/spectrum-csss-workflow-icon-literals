import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const QuickSelect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Quick Select',
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
      aria-labelledby="${`title-QuickSelect-${count}`}"
      aria-describedby="${`title-QuickSelect-${count}`}"
    >
      <title id="${`title-QuickSelect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-QuickSelect-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22.686 22.566a5.48 5.48 0 00-3.853 1.027 7.907 7.907 0 00-2.415 4.216c-.531 1.69-1.163 3.53-2.677 4.45a2.843 2.843 0 00-.721.5.641.641 0 00-.076.806.887.887 0 00.494.232c4.07.938 9.262 1.25 12.61-1.759a5.4 5.4 0 00-1.572-8.989 5.759 5.759 0 00-1.79-.483zm8.465 1.639c6.9-7.844 15.657-18.626 13.363-20.92S32.72 11.692 25.887 19.18a9.586 9.586 0 015.264 5.025zM7.8 31.28V26H4v5.28c0 .428.026.849.064 1.268l3.754-.915c-.004-.118-.018-.233-.018-.353zM4 16.719V22h3.8v-5.281c0-.048.007-.1.007-.144l-3.754-.914c-.026.35-.053.701-.053 1.058zm16.912 24.332a10.12 10.12 0 01-5.824 0L14.02 44.7a13.877 13.877 0 007.96 0zm6.35-5.525a10.249 10.249 0 01-2.748 3.594L25.65 43a14.024 14.024 0 005.356-6.558zM15.088 6.948a10.12 10.12 0 015.824 0L21.98 3.3a13.877 13.877 0 00-7.96 0zm-6.442 5.715a10.251 10.251 0 012.84-3.784L10.35 5a14.022 14.022 0 00-5.427 6.752zm2.84 26.457a10.249 10.249 0 01-2.748-3.594l-3.744.912A14.024 14.024 0 0010.35 43zm15.539-27.106q1.424-1.539 2.708-2.893A14 14 0 0025.65 5l-1.136 3.879a10.245 10.245 0 012.511 3.135z"
      />
    </svg>
  `;
};
