import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RangeMask = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Range Mask',
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
      aria-labelledby="${`title-RangeMask-${count}`}"
      aria-describedby="${`title-RangeMask-${count}`}"
    >
      <title id="${`title-RangeMask-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RangeMask-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8.837 18.576a14.738 14.738 0 012.739-2.739l-1.908-3.3a18.569 18.569 0 00-4.136 4.136zm0 17.848l-3.3 1.908a18.569 18.569 0 004.136 4.136l1.908-3.305a14.738 14.738 0 01-2.744-2.739zm23.326 0a14.738 14.738 0 01-2.739 2.739l1.908 3.305a18.569 18.569 0 004.136-4.136zM14.854 13.926a14.631 14.631 0 013.749-.991V9.1a18.347 18.347 0 00-5.654 1.526zm11.292 27.148a14.631 14.631 0 01-3.749.991V45.9a18.347 18.347 0 005.654-1.526zM5.935 25.6a14.631 14.631 0 01.991-3.749l-3.3-1.9A18.376 18.376 0 002.1 25.6zm29.13 3.8a14.631 14.631 0 01-.991 3.749l3.3 1.905A18.347 18.347 0 0038.9 29.4zM6.926 33.146a14.631 14.631 0 01-.991-3.746H2.1a18.376 18.376 0 001.527 5.654zM18.6 42.065a14.631 14.631 0 01-3.749-.991l-1.9 3.3A18.347 18.347 0 0018.6 45.9zM46.034 1.957c-2.32-2.32-4.706-2.386-6.815-.277l-5.206 5.238L32 4.9a2.006 2.006 0 00-2.829 0l-4.094 4.094a2 2 0 000 2.829l.782.781-14.076 14.077a6.708 6.708 0 109.486 9.486l14.076-14.076.823.822a2 2 0 002.829 0l4.091-4.091a2 2 0 00-.011-2.839l-2-1.973 5.26-5.193c2.212-2.217 2.017-4.541-.303-6.86zM18.653 33.551A3.008 3.008 0 0114.4 29.3l14.075-14.079 4.254 4.253z"
      />
    </svg>
  `;
};
