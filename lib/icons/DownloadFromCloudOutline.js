import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DownloadFromCloudOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download From Cloud Outline',
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
      aria-labelledby="${`title-DownloadFromCloudOutline-${count}`}"
      aria-describedby="${`title-DownloadFromCloudOutline-${count}`}"
    >
      <title id="${`title-DownloadFromCloudOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DownloadFromCloudOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.313 44.89a.5.5 0 01-.626 0l-5.451-5.524a.785.785 0 01-.236-.56.8.8 0 01.8-.806H22V19a1 1 0 011-1h2a1 1 0 011 1v19h3.2a.8.8 0 01.8.806.785.785 0 01-.236.56z"
      />
      <path
        d="M40.135 14.739a9.6 9.6 0 00-1.9-.716 11.041 11.041 0 00-3.1-6.718A11.515 11.515 0 0027.166 4h-.158a11.178 11.178 0 00-4.039.741 11.344 11.344 0 00-6.067 5.7 10.176 10.176 0 00-6.646 2.859 9.757 9.757 0 00-2.786 5.685 6.8 6.8 0 00-4.333 6.244 6.373 6.373 0 001.815 4.6 8.208 8.208 0 006.267 2.156h4.78a1 1 0 001-1v-2a1 1 0 00-1-1h-4.78a5.493 5.493 0 01-2.867-.523 2.688 2.688 0 01.987-4.873 4.176 4.176 0 01.87-.087 7.77 7.77 0 011.759.24 5.82 5.82 0 011.1-6.6 6.216 6.216 0 014.337-1.714 5.981 5.981 0 012.445.509A7.109 7.109 0 0127.008 8h.1a7.519 7.519 0 015.19 2.123 7.035 7.035 0 011.407 7.71 9.455 9.455 0 011.707-.162 6.437 6.437 0 012.916.638 5 5 0 01-.372 9.153 10.473 10.473 0 01-4.007.538H32a1 1 0 00-1 1v2a1 1 0 001 1h1.95a14.043 14.043 0 005.534-.838 9.22 9.22 0 005.65-8 9.188 9.188 0 00-4.999-8.423z"
      />
    </svg>
  `;
};
