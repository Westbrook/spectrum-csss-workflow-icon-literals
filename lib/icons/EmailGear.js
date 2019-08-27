import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailGear = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Gear',
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
      aria-labelledby="${`title-EmailGear-${count}`}"
      aria-describedby="${`title-EmailGear-${count}`}"
    >
      <title id="${`title-EmailGear-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailGear-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M13.172 21.819L0 12.161v16.928l13.172-7.27zM17 34.9v-1.8a4.9 4.9 0 013.441-4.676 4.876 4.876 0 01-.521-1.659L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h15.947A4.856 4.856 0 0117 34.9zm4.3-12.239l1.354-1.361a4.9 4.9 0 015.774-.859A4.9 4.9 0 0133.1 17h1.788L48 7.387V6a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 6v1.387l21.117 15.485c.062-.072.112-.145.183-.211zm18.272-2.221a4.9 4.9 0 015.768.855l1.36 1.363a4.857 4.857 0 011.3 2.4V12.162l-9.226 6.765a4.882 4.882 0 01.798 1.513zM46.1 32.207h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V21.9a.9.9 0 00-.9-.9H33.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H21.9a.9.9 0 00-.9.9V34.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V46.1a.9.9 0 00.9.9H34.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H46.1a.9.9 0 00.9-.9V33.1a.9.9 0 00-.9-.893zM34 37.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
      <path
        d="M13.172 21.819L0 12.161v16.928l13.172-7.27zM17 34.9v-1.8a4.9 4.9 0 013.441-4.676 4.876 4.876 0 01-.521-1.659L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h15.947A4.856 4.856 0 0117 34.9zm4.3-12.239l1.354-1.361a4.9 4.9 0 015.774-.859A4.9 4.9 0 0133.1 17h1.788L48 7.387V6a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 6v1.387l21.117 15.485c.062-.072.112-.145.183-.211zm18.272-2.221a4.9 4.9 0 015.768.855l1.36 1.363a4.857 4.857 0 011.3 2.4V12.162l-9.226 6.765a4.882 4.882 0 01.798 1.513zM46.1 32.207h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V21.9a.9.9 0 00-.9-.9H33.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H21.9a.9.9 0 00-.9.9V34.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V46.1a.9.9 0 00.9.9H34.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H46.1a.9.9 0 00.9-.9V33.1a.9.9 0 00-.9-.893zM34 37.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"
      />
    </svg>
  `;
};