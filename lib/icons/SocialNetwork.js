import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SocialNetwork = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Social Network',
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
      aria-labelledby="${`title-SocialNetwork-${count}`}"
      aria-describedby="${`title-SocialNetwork-${count}`}"
    >
      <title id="${`title-SocialNetwork-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SocialNetwork-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 28.555v-11.11a3.982 3.982 0 00-3.86-6.966L27.986 4.133c0-.045.014-.087.014-.133a4 4 0 00-8 0c0 .046.012.088.014.133L9.86 10.479A3.949 3.949 0 008 10a3.988 3.988 0 00-2 7.445v11.11a3.982 3.982 0 003.86 6.966l10.154 6.346c0 .045-.014.087-.014.133a4 4 0 008 0c0-.046-.012-.088-.014-.133l10.154-6.346A3.949 3.949 0 0040 36a3.988 3.988 0 002-7.445zM26.731 6.886L36.2 12.8A3.961 3.961 0 0036 14a3.953 3.953 0 00.047.466l-9.537 5.443a3.95 3.95 0 00-1.01-.609V7.668a3.957 3.957 0 001.231-.782zm-5.462 0a3.957 3.957 0 001.231.782V19.3a3.945 3.945 0 00-.919.537l-9.616-5.488c.01-.116.035-.227.035-.346a3.979 3.979 0 00-.192-1.2zM9 28.142V17.858a3.952 3.952 0 001.6-.839l9.462 5.4a2.911 2.911 0 000 1.171l-9.456 5.4A3.96 3.96 0 009 28.142zm12.258 10.964L11.8 33.2A3.981 3.981 0 0012 32c0-.115-.024-.224-.034-.337l9.622-5.491a3.97 3.97 0 00.912.531V38.3a3.984 3.984 0 00-1.242.806zm5.484 0a3.984 3.984 0 00-1.242-.8V26.7a3.964 3.964 0 001-.606l9.543 5.446A4.064 4.064 0 0036 32a3.981 3.981 0 00.2 1.2zM39 28.142a3.957 3.957 0 00-1.513.77l-9.534-5.442A4.043 4.043 0 0028 23a4.112 4.112 0 00-.046-.461l9.54-5.445a3.944 3.944 0 001.506.764z"
        fill="currentColor"
      />
    </svg>
  `;
};
