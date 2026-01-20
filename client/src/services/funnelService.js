export async function getFunnelData() {
  const SHEET_ID = "1-cqN8Hftzzen7DrRHWJfWV757IWuJFZZtQAFQxsXcBE";
  const SHEET_NAME = "vw_funnel_performance_final"; // hoja donde están tus queries finales

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();

  // Google Sheets devuelve JSONP, hay que extraer el JSON
  const json = JSON.parse(text.match(/.*?({.*}).*/s)[1]);

  const rows = json.table.rows.map(row => ({
    name: row.c[0]?.v,       // funnel_stage
    value: row.c[1]?.v       // leads (o la métrica que quieras mostrar)
  }));

  return rows;
}

