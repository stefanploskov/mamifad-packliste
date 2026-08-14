const OPTIONS = {
  weather: {
    sun: "Sonnig & warm",
    change: "Wechselhaft",
    rain: "Regenwetter",
    cold: "Kühl & winterlich"
  },
  duration: {
    short: "bis 2 Stunden",
    half: "halber Tag",
    full: "ganzer Tag",
    overnight: "mit Übernachtung"
  },
  age: {
    baby: "Baby & Kleinkind",
    kids: "Kindergarten & Volksschule",
    mixed: "gemischte Altersgruppe",
    teens: "ältere Kinder & Teens"
  }
};

const BASE_ITEMS = [
  { id: "water", category: "Grundausstattung", title: "Trinkflaschen", note: "Für alle gut erreichbar einpacken" },
  { id: "snack", category: "Grundausstattung", title: "Kleiner Energiesnack", note: "Obst, Müsliriegel oder etwas Vertrautes" },
  { id: "first-aid", category: "Grundausstattung", title: "Mini-Erste-Hilfe-Set", note: "Pflaster, Desinfektion und persönliche Medikamente" },
  { id: "tissues", category: "Grundausstattung", title: "Taschentücher & Feuchttuch", note: "Für klebrige Hände und kleine Pannen" },
  { id: "phone", category: "Grundausstattung", title: "Handy mit geladenem Akku", note: "Tickets, Route und Notfallkontakt offline griffbereit" },
  { id: "waste-bag", category: "Grundausstattung", title: "Kleiner Müllbeutel", note: "Damit unterwegs nichts zurückbleibt" }
];

const WEATHER_ITEMS = {
  sun: [
    { id: "sun-hat", category: "Wetterfest", title: "Sonnenhut oder Kappe", note: "Am besten mit Nackenschutz für die Kleinen" },
    { id: "sunscreen", category: "Wetterfest", title: "Sonnencreme", note: "Vorher auftragen und zum Nachcremen mitnehmen" },
    { id: "extra-water", category: "Wetterfest", title: "Zusätzliche Wasserreserve", note: "Bei Hitze lieber eine Flasche mehr" },
    { id: "shade", category: "Wetterfest", title: "Leichtes Tuch als Sonnenschutz", note: "Hilft bei Pausen, aber nie einen Kinderwagen abdecken" }
  ],
  change: [
    { id: "layers", category: "Wetterfest", title: "Zwiebellook-Schichten", note: "Dünne Lage plus wärmende Lage" },
    { id: "light-rain", category: "Wetterfest", title: "Leichte Regenjacken", note: "Klein verpackbar und schnell angezogen" },
    { id: "dry-bag", category: "Wetterfest", title: "Wasserdichter Beutel", note: "Für Handy, Tickets und nasse Kleidung" },
    { id: "spare-socks", category: "Wetterfest", title: "Ersatzsocken", note: "Kleine Sache, großer Stimmungsretter" }
  ],
  rain: [
    { id: "rain-suit", category: "Wetterfest", title: "Regenjacke & Matschhose", note: "Bewegungsfreiheit vor Schirmkomfort" },
    { id: "boots", category: "Wetterfest", title: "Wasserfeste Schuhe", note: "Mit gutem Profil und trockenen Füßen" },
    { id: "dry-bag", category: "Wetterfest", title: "Wasserdichter Beutel", note: "Trennt Nasses zuverlässig vom Rest" },
    { id: "spare-socks", category: "Wetterfest", title: "Ersatzsocken", note: "Am besten paarweise im Zip-Beutel" },
    { id: "small-towel", category: "Wetterfest", title: "Kleines Handtuch", note: "Für Bank, Hände oder Pfützenfüße" }
  ],
  cold: [
    { id: "warm-layers", category: "Wetterfest", title: "Warme Zwischenschicht", note: "Wolle oder Fleece unter der Jacke" },
    { id: "hat-gloves", category: "Wetterfest", title: "Haube, Handschuhe & Schlauchschal", note: "Ein Ersatzpaar Handschuhe lohnt sich" },
    { id: "thermos", category: "Wetterfest", title: "Thermosflasche", note: "Warmes, ungesüßtes Getränk für die Pause" },
    { id: "seat-pad", category: "Wetterfest", title: "Isolierende Sitzunterlage", note: "Macht auch kurze Pausen angenehmer" }
  ]
};

const DURATION_ITEMS = {
  short: [
    { id: "quick-plan", category: "Für die Dauer", title: "Kurzer Plan-B-Punkt", note: "Ein nahes Café, WC oder Unterstand genügt" }
  ],
  half: [
    { id: "lunch-box", category: "Für die Dauer", title: "Jausenbox", note: "Herzhaftes plus etwas Frisches einpacken" },
    { id: "picnic-cloth", category: "Für die Dauer", title: "Kleine Picknickdecke", note: "Auch als saubere Spiel- oder Wickelfläche praktisch" }
  ],
  full: [
    { id: "lunch-box", category: "Für die Dauer", title: "Große Jausenbox", note: "Zwei kleine Pausen sind oft besser als eine große" },
    { id: "picnic-cloth", category: "Für die Dauer", title: "Picknickdecke", note: "Für eine echte Ruheinsel zwischendurch" },
    { id: "powerbank", category: "Für die Dauer", title: "Powerbank & Ladekabel", note: "Für Navigation und digitale Tickets" },
    { id: "spare-outfit", category: "Für die Dauer", title: "Komplette Wechselgarnitur", note: "Socken, Unterwäsche, Hose und Oberteil" },
    { id: "emergency-snack", category: "Für die Dauer", title: "Notfall-Snackreserve", note: "Bleibt bis zum wirklichen Stimmungstief im Rucksack" }
  ],
  overnight: [
    { id: "lunch-box", category: "Für die Dauer", title: "Jause für die Anreise", note: "Unabhängig von Öffnungszeiten bleiben" },
    { id: "powerbank", category: "Für die Dauer", title: "Powerbank & Ladekabel", note: "Passende Kabel vorher prüfen" },
    { id: "sleepwear", category: "Für die Dauer", title: "Schlafsachen", note: "Pyjama, Lieblingspolster und Schlafroutine" },
    { id: "toiletries", category: "Für die Dauer", title: "Kulturbeutel", note: "Zahnbürsten, Pflege und persönliche Medikamente" },
    { id: "tomorrow-clothes", category: "Für die Dauer", title: "Kleidung für den nächsten Tag", note: "Als komplettes Set zusammenrollen" },
    { id: "documents", category: "Für die Dauer", title: "Buchungsdaten & Dokumente", note: "Auch als Offline-Kopie speichern" }
  ]
};

const AGE_ITEMS = {
  baby: [
    { id: "diapers", category: "Fürs Alter", title: "Wickelset", note: "Windeln, Unterlage, Beutel und Creme" },
    { id: "baby-food", category: "Fürs Alter", title: "Babyjause & Lätzchen", note: "Vertrautes Essen plus Löffel" },
    { id: "carrier", category: "Fürs Alter", title: "Trage oder geländetauglicher Wagen", note: "Vorher an Route und Untergrund anpassen" },
    { id: "comfort", category: "Fürs Alter", title: "Schnuller oder Einschlafhilfe", note: "Ein vertrauter Gegenstand beruhigt unterwegs" },
    { id: "baby-change", category: "Fürs Alter", title: "Zwei Wechselsets", note: "Eines davon direkt griffbereit halten" }
  ],
  kids: [
    { id: "kid-bottle", category: "Fürs Alter", title: "Eigene Kinder-Trinkflasche", note: "Selbstständiges Trinken macht stolz" },
    { id: "comfort", category: "Fürs Alter", title: "Kleiner Reisebegleiter", note: "Kuscheltier, Figur oder ein Mini-Spiel" },
    { id: "kid-change", category: "Fürs Alter", title: "Wechselkleidung", note: "Auch bei Sonne an nasse Abenteuer denken" },
    { id: "discovery", category: "Fürs Alter", title: "Entdecker-Zubehör", note: "Lupe, kleines Notizheft oder Fernglas" }
  ],
  mixed: [
    { id: "mixed-snacks", category: "Fürs Alter", title: "Altersgerechte Snack-Mischung", note: "Für kleine Hände und große Geschmäcker" },
    { id: "kid-change", category: "Fürs Alter", title: "Wechselkleidung für die Jüngeren", note: "Trocken und als Set verpackt" },
    { id: "shared-game", category: "Fürs Alter", title: "Spiel für alle Altersstufen", note: "Suchspiel, Karten oder gemeinsame Foto-Challenge" },
    { id: "roles", category: "Fürs Alter", title: "Kleine Aufgaben verteilen", note: "Karte lesen, Jause hüten oder Motive entdecken" }
  ],
  teens: [
    { id: "teen-bottle", category: "Fürs Alter", title: "Eigene Flasche & Snack", note: "Jede Person trägt ihre Reserve selbst" },
    { id: "headphones", category: "Fürs Alter", title: "Kopfhörer für die Anreise", note: "Vor Ort bleibt der Blick gemeinsam draußen" },
    { id: "photo-challenge", category: "Fürs Alter", title: "Foto- oder Routen-Challenge", note: "Gibt älteren Kindern eine aktive Rolle" },
    { id: "pocket-money", category: "Fürs Alter", title: "Kleines eigenes Budget", note: "Für Eis, Souvenir oder selbstständige Entscheidungen" }
  ]
};

const CATEGORY_ORDER = ["Grundausstattung", "Wetterfest", "Fürs Alter", "Für die Dauer"];
const STORAGE_PREFIX = "mamifad-packliste:v1";
const FALLBACKS = { weather: "sun", duration: "short", age: "kids" };

function normalizeChoice(group, choice) {
  return Object.hasOwn(OPTIONS[group], choice) ? choice : FALLBACKS[group];
}

export function buildPackList({ weather = "sun", duration = "short", age = "kids" } = {}) {
  const selected = {
    weather: normalizeChoice("weather", weather),
    duration: normalizeChoice("duration", duration),
    age: normalizeChoice("age", age)
  };
  const combined = [
    ...BASE_ITEMS,
    ...WEATHER_ITEMS[selected.weather],
    ...AGE_ITEMS[selected.age],
    ...DURATION_ITEMS[selected.duration]
  ];
  const seen = new Set();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).map((item) => ({ ...item }));
}

export function summarizeSelection({ weather, duration, age }) {
  return `${OPTIONS.weather[normalizeChoice("weather", weather)]} · ${OPTIONS.duration[normalizeChoice("duration", duration)]} · ${OPTIONS.age[normalizeChoice("age", age)]}`;
}

export function groupPackList(items) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => item.category === category)
  })).filter((group) => group.items.length > 0);
}

function currentSelection() {
  return {
    weather: document.querySelector("#weather").value,
    duration: document.querySelector("#duration").value,
    age: document.querySelector("#age").value
  };
}

function storageKey(selection) {
  return `${STORAGE_PREFIX}:${selection.weather}:${selection.duration}:${selection.age}`;
}

function readChecked(selection) {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey(selection)) || "[]");
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

function writeChecked(selection, checked) {
  try {
    localStorage.setItem(storageKey(selection), JSON.stringify([...checked].sort()));
  } catch {
    // Die Liste funktioniert auch dann, wenn lokaler Speicher blockiert ist.
  }
}

function makeItem(item, selection, checked) {
  const row = document.createElement("li");
  row.className = `check-item${checked.has(item.id) ? " is-checked" : ""}`;
  row.dataset.itemId = item.id;

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checked.has(item.id);
  checkbox.setAttribute("aria-label", `${item.title} abhaken`);

  const title = document.createElement("strong");
  title.textContent = item.title;
  const note = document.createElement("small");
  note.textContent = item.note;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) checked.add(item.id);
    else checked.delete(item.id);
    row.classList.toggle("is-checked", checkbox.checked);
    writeChecked(selection, checked);
    applyOpenFilter();
    updateProgress();
  });

  label.append(checkbox, title, note);
  row.append(label);
  return row;
}

function renderPackList(selection = currentSelection()) {
  const items = buildPackList(selection);
  const groups = groupPackList(items);
  const checked = readChecked(selection);
  const checklist = document.querySelector("#checklist");
  checklist.replaceChildren();

  groups.forEach((group, index) => {
    const section = document.createElement("section");
    section.className = "check-group";
    const heading = document.createElement("h3");
    heading.innerHTML = `${group.category}<span>${String(index + 1).padStart(2, "0")}</span>`;
    const list = document.createElement("ul");
    group.items.forEach((item) => list.append(makeItem(item, selection, checked)));
    section.append(heading, list);
    checklist.append(section);
  });

  document.querySelector("#selection-summary").textContent = summarizeSelection(selection);
  applyOpenFilter();
  updateProgress();
}

function updateProgress() {
  const checkboxes = [...document.querySelectorAll(".check-item input")];
  const done = checkboxes.filter((checkbox) => checkbox.checked).length;
  const total = checkboxes.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  document.querySelector("#progress-ring").style.setProperty("--progress", `${percent * 3.6}deg`);
  document.querySelector("#progress-number").textContent = `${percent}%`;
  document.querySelector("#progress-copy").textContent = done === total
    ? "Alles bereit – los geht’s!"
    : done === 0
      ? "Noch nichts abgehakt"
      : `${done} von ${total} eingepackt`;
}

function applyOpenFilter() {
  const onlyOpen = document.querySelector("#open-only").checked;
  const rows = [...document.querySelectorAll(".check-item")];
  rows.forEach((row) => {
    const checked = row.querySelector("input").checked;
    row.classList.toggle("is-filtered", onlyOpen && checked);
  });
  const visibleRows = rows.filter((row) => !row.classList.contains("is-filtered"));
  document.querySelector("#empty-open").hidden = !(onlyOpen && visibleRows.length === 0);
}

function clearCurrentChecks() {
  const selection = currentSelection();
  try { localStorage.removeItem(storageKey(selection)); } catch { /* no-op */ }
  document.querySelectorAll(".check-item input").forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.closest(".check-item").classList.remove("is-checked");
  });
  applyOpenFilter();
  updateProgress();
}

function initialize() {
  document.querySelector("#packlisten-form").addEventListener("submit", (event) => {
    event.preventDefault();
    renderPackList();
    document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelector("#open-only").addEventListener("change", applyOpenFilter);
  document.querySelector("#clear-button").addEventListener("click", clearCurrentChecks);
  document.querySelector("#print-button").addEventListener("click", () => window.print());
  renderPackList();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
}
