const currentYear = document.querySelector('#current-year');
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

document.documentElement.classList.add('js');

const excerptTargets = document.querySelectorAll('[data-md-excerpt]');

await Promise.allSettled(
  Array.from(excerptTargets, async (target) => {
    const source = target.getAttribute('data-md-excerpt');
    if (!source) return;

    const response = await fetch(source, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Unable to load ${source}: ${response.status}`);
    }

    const markdown = await response.text();
    const excerpt = firstParagraph(markdown);
    if (excerpt) {
      target.textContent = excerpt;
    }
  }),
);

function firstParagraph(markdown) {
  return markdown
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((block) =>
      block
        .split('\n')
        .filter((line) => line.trim() && !line.trim().startsWith('#'))
        .join(' ')
        .trim(),
    )
    .find(Boolean)
    ?.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/[*_`>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
