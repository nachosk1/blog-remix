import {
  Form,
  isRouteErrorResponse,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import { redirect } from "@remix-run/react";
import { db } from "../../services/db";

export const meta = () => {
  return [
    { title: "PeigDev - Crear Publicación" },
    {
      name: "description",
      content: "Crea y comparte publicaciones, opiniones y comentarios sobre entretenimiento en PeigDev. Únete a la comunidad y participa en conversaciones sobre tus temas favoritos.",
    },
  ];
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const post = await db.post.create({
    data: {
      body,
      title,
    },
  });

  return redirect(`/posts/${post.id}`);
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <strong>😥 Algo salio mal</strong>
        <p style={{ color: "red" }}>{error.message}</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function create() {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <>
      <h2>Crear Nueva Publicación</h2>

      <Form method="POST" disabled={isSubmitting} className="form-create">
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Titulo de la publicación"
          />
        </div>
        <div>
          <label htmlFor="body">Mensaje</label>
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Contenido de la publicación"
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creando..." : "Publicar"}
        </button>
      </Form>
    </>
  );
}
