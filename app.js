// ---------- Helpers ----------
const qs  = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);
const safeText = (sel, text) => { const el = qs(sel); if (el) el.textContent = text; };

// ---------- Translations ----------
const dict = {
  en: {
    dir: "ltr", lang: "en",
    reserveTop: "Reserve",
    kicker: "Modern kitchen • Fresh Daily",
    heroTitle: "Crafted cuisine with a warm vibe",
    heroLead: "Seasonal ingredients, hand-made plates, and friendly service. Book a table or order for pickup.",
    viewMenu: "View Menu",
    bookTable: "Book a Table",
    h1: "Fresh & seasonal", h1d: "We update our menu every week based on local produce.",
    h2: "Wood-fired flavors", h2d: "Signature mains from our wood oven with a light smoky touch.",
    h3: "Coffee & desserts", h3d: "House tiramisu, pistachio cake, and specialty coffee.",
    menuTitle: "Our Menu",
    fAll: "All", fStarters: "Starters", fMains: "Mains", fDesserts: "Desserts",
    d1t: "Burrata Salad", d1d: "Creamy burrata, cherry tomatoes, basil oil.",
    d2t: "Lentil Soup",  d2d: "Comforting red lentils with lemon & cumin.",
    d3t: "Wood-Fired Chicken", d3d: "Herb marinated, roasted vegetables, garlic sauce.",
    d4t: "Pistachio Pesto Pasta", d4d: "Fresh pasta with pistachio-basil pesto & parmesan.",
    d5t: "Tiramisu", d5d: "Classic Italian pick-me-up with mascarpone.",
    d6t: "Pistachio Cake", d6d: "Moist nutty cake with cardamom cream.",
    reserveTitle: "Reserve a Table",
    reserveLead: "Open daily • 12:00 pm – 11:00 pm • Downtown",
    btnReserve: "Confirm Reservation",
    phName: "Name", phPhone: "Phone",
    // Testimonials
    q1: "Absolutely delicious! The wood-oven mains are a must.",
    q1By: "— Amina K.",
    q2: "Cozy place, great coffee, and desserts to die for.",
    q2By: "— Daniel R.",
  },
  ar: {
    dir: "rtl", lang: "ar",
    reserveTop: "احجز",
    kicker: "مطبخ عصري • طازج يوميًا",
    heroTitle: "أطباق متقنة بأجواء دافئة",
    heroLead: "مكوّنات موسمية وأطباق مصنوعة يدويًا وخدمة ودودة. احجز طاولة أو اطلب للاستلام.",
    viewMenu: "عرض القائمة",
    bookTable: "احجز طاولة",
    h1: "طازج وموسمي", h1d: "نحدّث قائمتنا أسبوعيًا حسب المنتجات المحليّة.",
    h2: "نكهات فرن الحطب", h2d: "أطباقنا المميّزة من فرن الحطب بلمسة مدخّنة خفيفة.",
    h3: "قهوة وحلويات", h3d: "تيراميسو، كيك فستق، وقهوة مختصّة.",
    menuTitle: "قائمتنا",
    fAll: "الكل", fStarters: "المقبلات", fMains: "الأطباق الرئيسيّة", fDesserts: "الحلويات",
    d1t: "سلطة بوراتا", d1d: "بوراتا كريمية مع طماطم كرزية وزيت ريحان.",
    d2t: "شوربة عدس", d2d: "عدس أحمر مع ليمون وكمّون.",
    d3t: "دجاج بفرن الحطب", d3d: "منقوع بالأعشاب مع خضار مشوية وصوص ثوم.",
    d4t: "باستا بستو فستق", d4d: "باستا طازجة مع بستو فستق-ريحان وبرميزان.",
    d5t: "تيراميسو", d5d: "تيراميسو كلاسيكي بماسكربوني.",
    d6t: "كيك فستق", d6d: "كيك رطب بطعم الفستق وكريمة هيل.",
    reserveTitle: "احجز طاولة",
    reserveLead: "مفتوح يوميًا • 12:00–11:00 • وسط المدينة",
    btnReserve: "تأكيد الحجز",
    phName: "الاسم", phPhone: "الهاتف",
    // Testimonials
    q1: "لذيذة جدًا! الأطباق من فرن الحطب لا تُفوَّت.",
    q1By: "— أمينة ك.",
    q2: "مكان دافئ، قهوة رائعة، وحلويات لا تُقاوَم.",
    q2By: "— دانيال ر.",
  }
};

// ---------- Apply language ----------
function applyLang(code){
  const t = dict[code];
  document.documentElement.lang = t.lang;
  document.documentElement.dir  = t.dir;

  // Top bar
  safeText("[data-i18n='reserveTop']", t.reserveTop);

  // Hero
  safeText("[data-i18n='kicker']", t.kicker);
  safeText("[data-i18n='heroTitle']", t.heroTitle);
  safeText("[data-i18n='heroLead']", t.heroLead);
  safeText("[data-i18n='viewMenu']", t.viewMenu);
  safeText("[data-i18n='bookTable']", t.bookTable);

  // Highlights
  safeText("[data-i18n='h1']", t.h1);   safeText("[data-i18n='h1d']", t.h1d);
  safeText("[data-i18n='h2']", t.h2);   safeText("[data-i18n='h2d']", t.h2d);
  safeText("[data-i18n='h3']", t.h3);   safeText("[data-i18n='h3d']", t.h3d);

  // Menu headings & filters
  safeText("[data-i18n='menuTitle']", t.menuTitle);
  safeText("[data-i18n='fAll']", t.fAll);
  safeText("[data-i18n='fStarters']", t.fStarters);
  safeText("[data-i18n='fMains']", t.fMains);
  safeText("[data-i18n='fDesserts']", t.fDesserts);

  // Dishes
  safeText("[data-i18n='d1t']", t.d1t); safeText("[data-i18n='d1d']", t.d1d);
  safeText("[data-i18n='d2t']", t.d2t); safeText("[data-i18n='d2d']", t.d2d);
  safeText("[data-i18n='d3t']", t.d3t); safeText("[data-i18n='d3d']", t.d3d);
  safeText("[data-i18n='d4t']", t.d4t); safeText("[data-i18n='d4d']", t.d4d);
  safeText("[data-i18n='d5t']", t.d5t); safeText("[data-i18n='d5d']", t.d5d);
  safeText("[data-i18n='d6t']", t.d6t); safeText("[data-i18n='d6d']", t.d6d);

  // Reservation
  safeText("[data-i18n='reserveTitle']", t.reserveTitle);
  safeText("[data-i18n='reserveLead']",  t.reserveLead);
  safeText("[data-i18n='btnReserve']",   t.btnReserve);

  // Testimonials
  safeText("[data-i18n='q1']", t.q1);
  safeText("[data-i18n='q1By']", t.q1By);
  safeText("[data-i18n='q2']", t.q2);
  safeText("[data-i18n='q2By']", t.q2By);

  // Placeholders
  qsa("[data-i18n-ph]").forEach(inp=>{
    const key = inp.getAttribute("data-i18n-ph");
    if (t[key]) inp.placeholder = t[key];
  });

  // Toggle active lang button
  qsa(".lang-switch button").forEach(b=>{
    const on = b.dataset.lang === code;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

// ---------- Filters ----------
function applyFilter(type){
  const items = qsa(".dish");
  items.forEach(card=>{
    if(type === "all"){ card.style.display = "block"; return; }
    card.style.display = card.classList.contains(type) ? "block" : "none";
  });
  qsa(".filter").forEach(f=> f.classList.toggle("active", f.dataset.filter === type));
}

// ---------- Init ----------
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

applyLang("en");

qsa(".lang-switch button").forEach(btn=>{
  btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
});
qsa(".filter").forEach(f=>{
  f.addEventListener("click", ()=> applyFilter(f.dataset.filter));
});


