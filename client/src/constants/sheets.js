export const SHEET_ID = "1-cqN8Hftzzen7DrRHWJfWV757IWuJFZZtQAFQxsXcBE";
export const SHEET_NAME = "vw_funnel_performance_final";

export async function fetchFunnelData() {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();

  // Google Sheets devuelve JSONP, lo limpiamos
  const json = JSON.parse(text.match(/.*?({.*}).*/s)[1]);

  const rows = json.table.rows.map(row => ({
    year_month: row.c[0]?.v,
    funnel_stage: row.c[1]?.v,
    impressions: row.c[2]?.v,
    clicks: row.c[3]?.v,
    leads: row.c[4]?.v
  }));

  return rows;
}
