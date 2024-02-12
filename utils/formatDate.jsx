export function formatDate(dateString) {
  const formattedDate = new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}
