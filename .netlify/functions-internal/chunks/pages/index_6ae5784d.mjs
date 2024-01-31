/* empty css                               */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderComponent, j as renderTransition } from '../astro_600a0b04.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, b as $$BaseLayout } from './__b1a196de.mjs';
/* empty css                           */import 'clsx';
import 'html-escaper';
import 'svgo';

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, name, image, pop, region, capital, cioc, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded"${spreadAttributes(rest)}><a${addAttribute(`/country/${href}`, "href")} class="block overflow-hidden bg-theme-elements max-w-xs focus:outline-transparent focus:ring-2 ring-offset-2 ring-theme-text rounded">${renderComponent($$result, "Image", $$Image, { "src": image, "alt": `${name} flag`, "width": 320, "height": 213, "class": "aspect-[320/213] object-cover w-full h-full", "data-astro-transition-scope": renderTransition($$result, "2jhrfvd3", "", image) })}<div class="grid gap-4 p-4 sm:p-6"><h2 class="text-xl font-bold"${addAttribute(renderTransition($$result, "sptmm4nr", "", cioc), "data-astro-transition-scope")}>${name}</h2><div><div class="flex gap-2"><p><strong>Population</strong>:</p><p>${pop.toLocaleString(void 0)}</p></div><div class="flex gap-2"><p><strong>Region</strong>:</p><p>${region}</p></div><div class="flex gap-2"><p><strong>Capital</strong>:</p><p>${capital}</p></div></div></div></a></article>`;
}, "C:/Users/usuario/Downloads/fem-rest-countries-api-main/src/components/Card.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const country = Astro2.url.searchParams.get("country");
  const res = country ? await fetch(
    `https://restcountries.com/v3.1/region/${country.toLowerCase()}`
  ) : await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<input type="search" id="search" placeholder="Enter Search Term"><label>
Filter by region
<select id="regions" name="region"><option value="">All</option>${regions.map((r) => renderTemplate`<option${addAttribute(r, "value")}>${r}</option>`)}</select></label><section aria-label="Countries!" class="container flex flex-wrap gap-6 justify-between items-start">${data.map((d) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "data-country": d.name.common, "href": d.cca3, "name": d.name.common, "pop": d.population, "image": d.flags.png, "region": d.region, "capital": d.capital, "cioc": d.cioc })}`)}</section>` })}`;
}, "C:/Users/usuario/Downloads/fem-rest-countries-api-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/usuario/Downloads/fem-rest-countries-api-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
