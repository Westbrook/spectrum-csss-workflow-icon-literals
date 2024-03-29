import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Efficient = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Efficient',
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
      aria-labelledby="${`title-Efficient-${count}`}"
      aria-describedby="${`title-Efficient-${count}`}"
    >
      <title id="${`title-Efficient-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Efficient-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M12.232 18.084a2 2 0 01-.734-3.861 105.769 105.769 0 0112.648-4.091A80.852 80.852 0 0135.594 8.36a2 2 0 01.256 3.993 78.365 78.365 0 00-10.829 1.681 103.7 103.7 0 00-12.054 3.909 2 2 0 01-.735.141zm.424-8.21a2 2 0 01-.734-3.862 103.482 103.482 0 0112.224-3.88 90.036 90.036 0 013.057-.63 2 2 0 01.738 3.932c-.923.173-1.9.373-2.92.6a101.607 101.607 0 00-11.631 3.7 2 2 0 01-.734.14zM18 44v1.172a2 2 0 00.586 1.414l.828.828a2 2 0 001.414.586h6.344a2 2 0 001.414-.586l.828-.828A2 2 0 0030 45.172V44a2 2 0 002-2v-4a2 2 0 00-2-2H18a2 2 0 00-2 2v4a2.031 2.031 0 002 2zm-5.065-18.2a2 2 0 01-.735-3.861 96.906 96.906 0 0111.946-3.811 80.852 80.852 0 0111.448-1.768 2 2 0 01.256 3.993 78.365 78.365 0 00-10.829 1.681 94.754 94.754 0 00-11.352 3.629 2 2 0 01-.734.137zM18 29v3h4v-3a4.938 4.938 0 00-.553-2.238c-1.429.452-2.826.933-4 1.354A.993.993 0 0118 29zm17.271-5H31a5.005 5.005 0 00-5 5v3h4v-3a1 1 0 011-1h4.271a2 2 0 000-4z"
      />
    </svg>
  `;
};
