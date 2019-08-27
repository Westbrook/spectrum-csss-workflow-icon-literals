import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SMSKey = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'SMSKey',
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
      aria-labelledby="${`title-SMSKey-${count}`}"
      aria-describedby="${`title-SMSKey-${count}`}"
    >
      <title id="${`title-SMSKey-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SMSKey-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19.824 40.656a10.1 10.1 0 019.8-10.68h.008a11.682 11.682 0 011.646.113l3.622-3.621a6.055 6.055 0 01-1.74-.568.553.553 0 01-.26-.542v-2.386l.332-.1a7.152 7.152 0 003.618 1.065 4.079 4.079 0 00.654-.065l1.462-1.461c-.054-.548-.437-1.054-1.886-1.768l-.908-.4c-2.295-1.077-3.272-2.356-3.272-4.276 0-2.555 1.952-4.206 4.977-4.206a7.148 7.148 0 013.158.564.471.471 0 01.26.476v2.258l-.338.122h-.088l-.152-.092a5.918 5.918 0 00-2.84-.608c-1.323 0-2.083.474-2.083 1.3 0 .6.313 1.092 1.91 1.828l.766.34a6.366 6.366 0 013 2.346 4.351 4.351 0 011.952-.482H44V6a2 2 0 00-2-2H6a2 2 0 00-2 2v26a2 2 0 002 2h6l5.571 9.285a.5.5 0 00.858 0l1.434-2.391c-.008-.081-.033-.156-.039-.238zm-9.939-14.02a7.914 7.914 0 01-3.624-.736.566.566 0 01-.261-.54v-2.388l.333-.1a7.146 7.146 0 003.618 1.065c1.371 0 2.127-.491 2.127-1.379 0-.607-.319-1.138-1.895-1.916l-.912-.4C6.977 19.161 6 17.882 6 15.961c0-2.555 1.952-4.206 4.977-4.206a7.133 7.133 0 013.158.564.471.471 0 01.26.476v2.258l-.338.122h-.087l-.154-.092a5.883 5.883 0 00-2.839-.608c-1.322 0-2.084.474-2.084 1.3 0 .6.314 1.092 1.912 1.828l.768.34c2.476 1.135 3.527 2.451 3.527 4.4 0 2.608-2.047 4.293-5.215 4.293zm9.459-.581l-.01.238-.391.148h-2.277l-.173-.421.807-13.92.406-.129h3.256a.436.436 0 01.443.3c.421 1.466 1.89 6.705 2.521 9.433.431-1.575 1.2-4.116 1.844-6.24.394-1.3.744-2.458.948-3.166l.065-.144.343-.187h3.4l.186.333.565 13.806-.086.2-.072.088-.244.042h-2.5l-.17-.4c-.064-3.348-.1-7.52-.112-10.007-.52 1.928-1.319 4.7-2 7.058l-.919 3.2-.377.148h-2.042a.416.416 0 01-.452-.321 514.87 514.87 0 01-2.6-10.177c-.062 2.606-.215 6.668-.359 10.118z"
      />
      <path
        d="M25.885 41.376a2.543 2.543 0 102.544-2.543 2.546 2.546 0 00-2.544 2.543zm3.819-7.4a5.946 5.946 0 012.743.605l10.644-10.642a.475.475 0 01.327-.135h2.119a.464.464 0 01.463.462v4.624a.464.464 0 01-.463.462H42.3v3.238a.464.464 0 01-.463.462H38.6v2.682l-2.905 3a6.166 6.166 0 01.066 2.15 6.013 6.013 0 01-11.945-.489 6.1 6.1 0 015.884-6.418z"
      />
    </svg>
  `;
};