// Illustration only: cycles example requests and shows how each is broken into requirements.
const examples = [
  { q: "find a fintech sponsor for a 500-person developer conference in Berlin",
    tags: [["Task","Find sponsor"],["Industry","Fintech"],["Audience","Developers"],["Size","500 people"],["City","Berlin"]] },
  { q: "find a healthcare sponsor for a 300-person nurses conference in Lisbon",
    tags: [["Task","Find sponsor"],["Industry","Healthcare"],["Audience","Nurses"],["Size","300 people"],["City","Lisbon"]] },
  { q: "sponsor for a 2-day AI summit in London, budget up to €50k",
    tags: [["Task","Find sponsor"],["Topic","AI"],["Length","2 days"],["City","London"],["Budget","< €50k"]] },
];

const typed = document.getElementById("typed");
const tags = document.getElementById("tags");
document.getElementById("yr").textContent = new Date().getFullYear();

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typed.textContent = examples[0].q;
    examples[0].tags.forEach(t => tags.append(chip(t)));
    return;
  }
  for (let i = 0; ; i = (i + 1) % examples.length) {
    const { q, tags: ts } = examples[i];
    tags.textContent = "";
    for (let n = 1; n <= q.length; n++) { typed.textContent = q.slice(0, n); await sleep(38); }
    await sleep(300);
    for (const t of ts) { tags.append(chip(t)); await sleep(280); }
    await sleep(2600);
    for (let n = q.length; n >= 0; n--) { typed.textContent = q.slice(0, n); await sleep(12); }
  }
}

function chip([k, v]) {
  const el = document.createElement("span");
  el.className = "chip";
  const b = document.createElement("b");
  b.textContent = k;
  el.append(b, v);
  return el;
}

run();
