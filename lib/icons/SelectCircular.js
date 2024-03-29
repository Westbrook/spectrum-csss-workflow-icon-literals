import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectCircular = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Circular',
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
      aria-labelledby="${`title-SelectCircular-${count}`}"
      aria-describedby="${`title-SelectCircular-${count}`}"
    >
      <title id="${`title-SelectCircular-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectCircular-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6 24c0-.46.018-.916.051-1.366l-3.988-.3A21.906 21.906 0 002 24a21.848 21.848 0 00.9 6.241L6.73 29.1A17.82 17.82 0 016 24zm2.155 8.548l-3.519 1.9a22.063 22.063 0 004.978 6.193l2.618-3.025a18.057 18.057 0 01-4.077-5.068zm1.477-19.395l-3.191-2.41a21.862 21.862 0 00-3.569 7.1l3.84 1.118a17.934 17.934 0 012.92-5.808zm8.139-6.047l-1.383-3.752A21.9 21.9 0 009.55 7.41l2.629 3.016a17.917 17.917 0 015.592-3.32zM41.6 20.215l3.91-.834a21.778 21.778 0 00-3.049-7.347l-3.355 2.18a17.8 17.8 0 012.494 6.001zm-2-11.726a21.924 21.924 0 00-6.528-4.536L31.421 7.6a17.977 17.977 0 015.344 3.714zM13.351 43.258a21.869 21.869 0 007.541 2.525l.562-3.961a17.876 17.876 0 01-6.166-2.064zM34.7 38.476l2.379 3.215a21.947 21.947 0 005.434-5.8l-3.363-2.164a18.026 18.026 0 01-4.45 4.749zM42 24a17.946 17.946 0 01-1.17 6.4l3.739 1.422A21.939 21.939 0 0046 24v-.082zM25.185 41.962l.258 3.992a21.849 21.849 0 007.712-1.943l-1.667-3.637a17.831 17.831 0 01-6.303 1.588zm3.56-39.449a22.4 22.4 0 00-7.939-.283l.574 3.959a18.362 18.362 0 016.506.231z"
      />
    </svg>
  `;
};
