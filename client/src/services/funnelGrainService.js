export async function getFunnelGrain() {
  const SHEET_ID = "1-cqN8Hftzzen7DrRHWJfWV757IWuJFZZtQAFQxsXcBE";
  const SHEET_NAME = "vw_funnel_grain";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.match(/.*?({.*}).*/s)[1]);

  const rows = json.table.rows.map(row => ({
    year_month: parseYearMonth(row.c[0]?.v),        // ✅
    funnel_stage: row.c[1]?.v,      // ✅
    channel: row.c[2]?.v,           // ✅
    audience: row.c[3]?.v,          // ✅
    region: row.c[4]?.v,            // ✅
    vehicle_model: row.c[5]?.v,     // ✅
    cost: Number(row.c[6]?.v) || 0, // ✅
  }));

  return rows;
}

function parseYearMonth(value) {
  if (!value) return null;

  // value: "Date(2024,0,1)"
  const match = value.match(/Date\((\d+),(\d+),\d+\)/);

  if (!match) return null;

  const year = match[1];
  const month = String(Number(match[2]) + 1).padStart(2, "0");

  return `${year}-${month}`; // 👉 "2024-01"
}
