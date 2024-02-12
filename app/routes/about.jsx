export const meta = () => {
  return [
    { title: "Sobre Nosotros" }, // Usando el título del post en el meta
    {
      name: "description",
      content: "Descubre más sobre nuestro emocionante proyecto beta, una plataforma en desarrollo dedicada a proporcionar contenido variado y emocionante sobre diversos temas, incluyendo artículos, videos, imágenes y más.",
    },
  ];
};

export default function About() {
  return (
    <div>
      <section>
        <h2>¿Qué es este proyecto?</h2>
        <p className="description-about">Nuestro proyecto beta es una plataforma en desarrollo dedicada a proporcionar contenido variado y emocionante para todos los gustos. Desde artículos informativos hasta videos entretenidos y hermosas imágenes, nuestro objetivo es ofrecerte una experiencia enriquecedora y satisfactoria.</p>
      </section>

      <section>
        <h2>Próximos cambios</h2>
        <ul>
          <li>
            Implementación de un sistema de comentarios para interactuar con
            otros usuarios.
          </li>
          <li>
            Funcionalidad de registro de usuarios para personalizar la
            experiencia.
          </li>
          <li>
            Introducción de la función de "like" para marcar tus contenidos
            favoritos.
          </li>
          <li>
            Mejoras en la interfaz de usuario para una experiencia más
            intuitiva.
          </li>
        </ul>
      </section>
    </div>
  );
}
