(() => {
  const tag = 'pgk87-20';
  const products = [
    ['Bambu Lab A1 Mini', 'B0DMQKNPR8'],
    ['Bambu Lab A1 Combo', 'B0DSLQ1GJC'],
    ['Bambu Lab P1S Combo', 'B0CHDS1DMC'],
    ['ELEGOO Mars 5 Ultra', 'B0D3TMS8DF'],
    ['ELEGOO Saturn 4 Ultra', 'B0DT8PV51T'],
    ['FLASHFORGE Adventurer 5M', 'B0CHJGFVSL'],
    ['A1 Mini', 'B0DMQKNPR8'],
    ['A1 Combo', 'B0DSLQ1GJC'],
    ['P1S Combo', 'B0CHDS1DMC'],
    ['Mars 5 Ultra', 'B0D3TMS8DF'],
    ['Saturn 4 Ultra', 'B0DT8PV51T'],
    ['Adventurer 5M', 'B0CHJGFVSL'],
    ['Creality K2 Plus', 'B0F5H4SSNS'],
    ['Ender-3 V3 Plus', 'B0F8QQZ4QM'],
    ['K2 Plus', 'B0F5H4SSNS'],
    ['A1', 'B0DSLQ1GJC'],
    ['P1S', 'B0CHDS1DMC'],
    ['QIDI Q2', 'B0FDWK8JD6'],
    ['eSUN PLA PRO', 'B01EKEMDA6'],
    ['eSUN PLA+', 'B01EKEMDA6'],
    ['SUNLU S2', 'B0CKV4ZYJN']
  ];
  const excluded = '.hero-card, .mini-card, .product-panel, .alt-card, .need-card';
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const links = new Map(products.map(([label, asin]) => [label, `https://www.amazon.com/dp/${asin}?tag=${tag}`]));
  const pattern = new RegExp(`(${products.map(([label]) => escapeRegExp(label)).join('|')})`, 'g');

  const wrapTextNode = (node) => {
    if (!node.nodeValue.trim() || node.parentElement?.closest(`a, ${excluded}`)) return;
    if (!pattern.test(node.nodeValue)) {
      pattern.lastIndex = 0;
      return;
    }
    pattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let last = 0;
    node.nodeValue.replace(pattern, (match, _group, offset) => {
      fragment.append(node.nodeValue.slice(last, offset));
      const link = document.createElement('a');
      link.href = links.get(match);
      link.target = '_blank';
      link.rel = 'sponsored noopener';
      link.textContent = match;
      link.style.cssText = 'color:var(--green);font-weight:800;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px;';
      fragment.append(link);
      last = offset + match.length;
      return match;
    });
    fragment.append(node.nodeValue.slice(last));
    node.replaceWith(fragment);
  };

  document.querySelectorAll('main p, main td, main h1, main h2, main h3, main dt, main dd').forEach((root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(wrapTextNode);
  });
})();
