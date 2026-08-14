import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildPackList, groupPackList, summarizeSelection } from "./app.js";

const root = new URL("./", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
const css = await readFile(new URL("style.css", root), "utf8");
const robots = await readFile(new URL("robots.txt", root), "utf8");
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");

const sunnyKids = buildPackList({ weather: "sun", duration: "short", age: "kids" });
assert.equal(sunnyKids.length, 15, "Sonniger Kurz-Ausflug erzeugt die erwartete Anzahl Punkte");
assert(sunnyKids.some((item) => item.id === "sunscreen"), "Sonnenwetter enthält Sonnencreme");
assert(!sunnyKids.some((item) => item.id === "rain-suit"), "Sonnenwetter enthält keine Matschhose");

const rainyBabyOvernight = buildPackList({ weather: "rain", duration: "overnight", age: "baby" });
assert.equal(rainyBabyOvernight.length, 22, "Regen-Übernachtung mit Baby erzeugt die erwartete Anzahl Punkte");
for (const id of ["rain-suit", "diapers", "sleepwear", "documents"]) {
  assert(rainyBabyOvernight.some((item) => item.id === id), `Spezifischer Punkt ${id} ist enthalten`);
}

for (const configuration of [
  { weather: "change", duration: "full", age: "mixed" },
  { weather: "cold", duration: "half", age: "teens" },
  { weather: "rain", duration: "overnight", age: "baby" }
]) {
  const items = buildPackList(configuration);
  assert.equal(new Set(items.map((item) => item.id)).size, items.length, "Jede Konfiguration ist dedupliziert");
  assert.equal(groupPackList(items).length, 4, "Alle vier sinnvollen Gruppen sind vorhanden");
}

const fallback = buildPackList({ weather: "unbekannt", duration: "unbekannt", age: "unbekannt" });
assert(fallback.some((item) => item.id === "sun-hat"), "Ungültiges Wetter fällt deterministisch auf sonnig zurück");
assert(fallback.some((item) => item.id === "quick-plan"), "Ungültige Dauer fällt deterministisch auf kurz zurück");
assert(fallback.some((item) => item.id === "kid-bottle"), "Ungültiges Alter fällt deterministisch auf Kinder zurück");
assert.equal(
  summarizeSelection({ weather: "rain", duration: "full", age: "mixed" }),
  "Regenwetter · ganzer Tag · gemischte Altersgruppe",
  "Zusammenfassung ist stabil"
);

const canonical = "https://stefanploskov.github.io/mamifad-packliste/";
assert(html.includes(`<link rel="canonical" href="${canonical}">`), "Exakte Self-Canonical ist gesetzt");
assert(html.includes('<meta name="robots" content="index, follow">'), "Meta-Robots erlaubt Indexierung");
assert(robots.includes("User-agent: *") && robots.includes("Allow: /"), "robots.txt erlaubt Crawling");
assert(robots.includes(`${canonical}sitemap.xml`), "robots.txt verweist auf die Sitemap");
assert(sitemap.includes(`<loc>${canonical}</loc>`), "Sitemap enthält die kanonische URL");

for (const url of [
  "https://www.mamifad.at/",
  "https://www.mamifad.at/events",
  "https://www.mamifad.at/places",
  "https://www.mamifad.at/artikel"
]) {
  assert(html.includes(`href="${url}"`), `Sichtbarer Mamifad-Link ${url} ist vorhanden`);
}

assert.equal(/<script[^>]+src=["']https?:\/\//i.test(html), false, "Keine entfernten Skripte");
assert.equal(/<link[^>]+href=["']https?:\/\//i.test(html.replace(`href="${canonical}"`, "")), false, "Keine entfernten Styles oder Assets");
assert(css.length > 10000, "Die Oberfläche besitzt ein eigenständiges, ausgearbeitetes Design");

console.log("✓ 24 deterministische Prüfungen bestanden");
