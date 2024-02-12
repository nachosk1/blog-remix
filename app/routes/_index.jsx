import { useLoaderData } from "@remix-run/react";
import { db } from "../../services/db";
import Post from "~/components/Post";
import Navigation from "~/components/Navigation";
import Picture from "~/components/Picture";

export const meta = () => {
  return [
    { title: "Peigdev" },
    {
      name: "description",
      content:
        "Explora una amplia variedad de publicaciones y conversaciones sobre entretenimiento en PeigDev. Únete a nuestra vibrante comunidad para descubrir noticias, opiniones y discusiones sobre tus temas favoritos de entretenimiento.",
    },
  ];
};

export const loader = async () => {
  const posts = await db.post.findMany();
  return {
    posts,
  };
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div>
      <h2>Publica tu comentario a la comunidad!!</h2>
      <Navigation />
      <Picture
        url="/dog-ipad.webp"
        alt={"A dog on an iPad"}
      />

      <h3 className="title-public">Publicaciones</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
