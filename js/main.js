// Header background toggle
const header = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("solid", window.scrollY > 80);
});

// Contact slide‑out
const contactBtn = document.getElementById("contactBtn");
const contactPanel = document.getElementById("contactPanel");
const closeContact = document.getElementById("closeContact");
contactBtn.addEventListener("click", () => contactPanel.classList.add("open"));
closeContact.addEventListener("click", () => contactPanel.classList.remove("open"));

// Dummy news feed — replace with API / CMS later
const news = [
  { title: "UMG wins ABC Innovation Award", date: "2025‑06‑10", blurb: "Our ARK inline quality‑check module took top honors…" },
  { title: "Pollux 2.0 Launch", date: "2025‑05‑05", blurb: "Cleaner, faster, smarter—the next gen of our surface cleaner robot ships." },
  { title: "Series A Funding Secured", date: "2025‑04‑02", blurb: "$18 million raised to accelerate global deployment." }
];
const newsFeed = document.getElementById("newsFeed");
news.forEach(item => {
  const art = document.createElement("article");
  art.innerHTML = `
    <h3>${item.title}</h3>
    <time datetime="${item.date}">${item.date}</time>
    <p>${item.blurb}</p>`;
  newsFeed.appendChild(art);
});