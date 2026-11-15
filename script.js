/* Membangun halaman dari data.js. Pemula tidak perlu mengedit file ini. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(label, href, opts) {
    const a = el("a", (opts && opts.cls) || "btn", label);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    if (opts && opts.download) a.setAttribute("download", "");
    return a;
  }

  function ext(path) {
    const m = /\.([a-z0-9]+)$/i.exec(path);
    return m ? m[1].toLowerCase() : "";
  }

  function githubUrl(path) {
    return `https://github.com/${PROFILE.repo}/blob/${PROFILE.branch}/${path}`;
  }

  function siteUrl(path) {
    return new URL(path, window.location.href).href;
  }

  function fileButtons(file) {
    const wrap = el("div", "file");
    const type = ext(file.path);
    const badge = el("span", "badge badge-" + type, "." + type);
    wrap.appendChild(badge);
    wrap.appendChild(el("span", "file-label", file.label));

    const actions = el("div", "file-actions");
    if (type === "py") {
      actions.appendChild(link("Lihat Kode", githubUrl(file.path)));
    } else if (type === "ipynb") {
      actions.appendChild(link("Buka Notebook", githubUrl(file.path)));
    } else if (type === "pptx") {
      const isLocal = /^(localhost|127\.|file)/.test(window.location.hostname) || window.location.protocol === "file:";
      if (!isLocal) {
        const viewer = "https://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(siteUrl(file.path));
        actions.appendChild(link("Lihat Slide", viewer));
      }
      actions.appendChild(link("Unduh", file.path, { download: true }));
    } else {
      actions.appendChild(link("Buka", file.path));
    }
    wrap.appendChild(actions);
    return wrap;
  }

  // ---------- Hero & Tentang ----------
  document.title = PROFILE.name + " · Portofolio Data";
  $("brand").textContent = PROFILE.name;
  $("name").textContent = PROFILE.name;
  $("role").textContent = PROFILE.role;
  $("tagline").textContent = PROFILE.tagline;
  $("about").textContent = PROFILE.about;
  $("footer").textContent = "© " + new Date().getFullYear() + " " + PROFILE.name;

  const heroLinks = $("heroLinks");
  heroLinks.appendChild(link("Lihat Proyek", "#proyek", { cls: "btn btn-primary" }));
  if (PROFILE.github) heroLinks.appendChild(link("GitHub", PROFILE.github));
  if (PROFILE.linkedin) heroLinks.appendChild(link("LinkedIn", PROFILE.linkedin));

  // Foto profil: pakai PROFILE.photo, atau default files/images/profile.jpg.
  // Jika file foto belum ada, tampilkan inisial nama sebagai pengganti.
  const photoWrap = $("photoWrap");
  const initials = PROFILE.name
    .split(/\s+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0].toUpperCase()).join("");
  function showInitials() {
    photoWrap.textContent = "";
    photoWrap.appendChild(el("div", "photo-fallback", initials));
  }
  const photoSrc = PROFILE.photo === undefined ? "files/images/profile.jpg" : PROFILE.photo;
  if (photoSrc) {
    const img = el("img", "photo");
    img.alt = "Foto " + PROFILE.name;
    img.addEventListener("error", showInitials);
    img.src = photoSrc;
    photoWrap.appendChild(img);
  } else {
    showInitials();
  }

  // Alur belajar
  const journey = $("journey");
  MODULES.forEach((m, i) => {
    const card = el("div", "journey-card");
    card.appendChild(el("span", "step", String(i + 1)));
    card.appendChild(el("strong", "", m.title.replace(/^Modul \d+ · /, "")));
    const skills = el("div", "tags");
    m.skills.forEach((s) => skills.appendChild(el("span", "tag", s)));
    card.appendChild(skills);
    journey.appendChild(card);
  });

  // ---------- Modul & proyek (tab) ----------
  const tabs = $("tabs");
  const container = $("modules");
  const panels = [];
  const tabButtons = [];

  function activate(index) {
    panels.forEach((p, i) => (p.hidden = i !== index));
    tabButtons.forEach((b, i) => {
      b.classList.toggle("active", i === index);
      b.setAttribute("aria-selected", String(i === index));
    });
  }

  MODULES.forEach((m, i) => {
    const btn = el("button", "tab", m.title.split(" · ")[1] || m.title);
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.addEventListener("click", () => activate(i));
    tabs.appendChild(btn);
    tabButtons.push(btn);

    const panel = el("div", "panel");
    panel.setAttribute("role", "tabpanel");
    panel.appendChild(el("h3", "", m.title));
    panel.appendChild(el("p", "muted", m.desc));

    const grid = el("div", "grid");
    m.projects.forEach((p) => {
      const card = el("article", "card");
      card.appendChild(el("h4", "", p.title));
      card.appendChild(el("p", "", p.desc));
      if (p.tags && p.tags.length) {
        const tags = el("div", "tags");
        p.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
        card.appendChild(tags);
      }
      const files = el("div", "files");
      p.files.forEach((f) => files.appendChild(fileButtons(f)));
      card.appendChild(files);
      grid.appendChild(card);
    });
    panel.appendChild(grid);
    container.appendChild(panel);
    panels.push(panel);
  });
  activate(0);

  // ---------- Kontak ----------
  const contacts = $("contacts");
  function contactCard(title, value, href) {
    const a = el("a", "contact");
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.appendChild(el("span", "contact-title", title));
    a.appendChild(el("span", "contact-value", value));
    contacts.appendChild(a);
  }
  if (PROFILE.email) contactCard("Email", PROFILE.email, "mailto:" + PROFILE.email);
  if (PROFILE.phone) {
    const href = PROFILE.whatsapp ? "https://wa.me/" + PROFILE.whatsapp : "tel:" + PROFILE.phone.replace(/[^+\d]/g, "");
    contactCard(PROFILE.whatsapp ? "WhatsApp" : "Telepon", PROFILE.phone, href);
  }
  if (PROFILE.linkedin) contactCard("LinkedIn", "Lihat profil", PROFILE.linkedin);
  if (PROFILE.github) contactCard("GitHub", "Lihat repository", PROFILE.github);
})();
