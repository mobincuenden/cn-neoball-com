const config = {
  siteUrl: "https://cn-neoball.com",
  keyword: "新球体育",
  cardTitle: "欢迎来到新球体育",
  cardDescription: "获取最新体育资讯、赛事动态与深度分析。",
  badges: ["体育", "资讯", "赛事", "分析", "新球"]
};

function createCard(title, description) {
  const card = document.createElement("div");
  card.className = "site-card";
  card.innerHTML = `
    <h2 class="card-title">${escapeHtml(title)}</h2>
    <p class="card-description">${escapeHtml(description)}</p>
    <a href="${escapeHtml(config.siteUrl)}" class="card-link" target="_blank" rel="noopener noreferrer">访问官网</a>
  `;
  return card;
}

function createBadge(text) {
  const span = document.createElement("span");
  span.className = "keyword-badge";
  span.textContent = text;
  return span;
}

function renderBadges(container, keywords) {
  keywords.forEach(keyword => {
    const badge = createBadge(keyword);
    container.appendChild(badge);
  });
}

function createGuideSection() {
  const guide = document.createElement("div");
  guide.className = "access-guide";
  guide.innerHTML = `
    <h3>使用说明</h3>
    <ul>
      <li>点击卡片链接可直接访问 ${escapeHtml(config.siteUrl)}</li>
      <li>关键词徽章展示了本站的核心内容领域</li>
      <li>所有功能均基于原生 JavaScript，无外部依赖</li>
    </ul>
  `;
  return guide;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

function init() {
  const container = document.getElementById("site-helper-root");
  if (!container) return;

  const card = createCard(config.cardTitle, config.cardDescription);
  container.appendChild(card);

  const badgeContainer = document.createElement("div");
  badgeContainer.className = "badge-container";
  renderBadges(badgeContainer, config.badges);
  container.appendChild(badgeContainer);

  const guide = createGuideSection();
  container.appendChild(guide);
}

document.addEventListener("DOMContentLoaded", init);