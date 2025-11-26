export async function getFunnelData() {
  const response = await fetch("http://localhost:4000/api/chart/funnel");

  if (!response.ok) {
    throw new Error("Error al obtener funnel data");
  }

  return await response.json(); // ← esto devuelve el array del backend
}
