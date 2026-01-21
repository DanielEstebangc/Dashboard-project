export async function getFunnelGrain() {
  const SHEET_ID = "1-cqN8Hftzzen7DrRHWJfWV757IWuJFZZtQAFQxsXcBE";
  const SHEET_NAME = "vw_funnel_grain";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.match(/.*?({.*}).*/s)[1]);
/*
  console.log("🔴 RAW ROWS GVIZ:", json.table.rows);
  json.table.rows.forEach((row, i) => {
   console.log(
      `🟡 ROW ${i}`,
     row.c?.map(c => c?.v)
   );
  });
*/
  const rows = json.table.rows.map(row => ({
    year_month: parseYearMonth(row.c[0]?.v),
    funnel_stage: row.c[1]?.v ?? null,
    channel: row.c[2]?.v ?? null,
    audience: row.c[3]?.v ?? null,
    region: row.c[4]?.v ?? null,
    vehicle_model: row.c[5]?.v ?? null,
    cost: Number(String(row.c[6]?.v).replace(/,/g, "")) || 0,
  }));

 // console.log("🟢 PARSED ROWS:", rows);

  return rows;
}

/**
 * Soporta:
 * - Date(2024,0,1)
 * - "2024-01"
 * - "2024-01-01"
 * - Date object
 */
function parseYearMonth(value) {
  if (!value) return null;

  // Caso 1: Date(2024,0,1)
  if (typeof value === "string" && value.startsWith("Date(")) {
    const match = value.match(/Date\((\d+),(\d+),\d+\)/);
    if (!match) return null;

    const year = match[1];
    const month = String(Number(match[2]) + 1).padStart(2, "0");
    return `${year}-${month}`;
  }

  // Caso 2: "2024-01" o "2024-01-01"
  if (typeof value === "string") {
    return value.slice(0, 7);
  }

  // Caso 3: Date real
  if (value instanceof Date) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  }

  return null;
}
