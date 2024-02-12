import { useLoaderData } from "@remix-run/react";
import { db } from "../../services/db";
import Post from "~/components/Post";

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  return {
    post,
  };
};

export const meta = ({ data }) => {
  const { post } = data;
  return [
    { title: post.title },
    {
      name: "description",
      content: `Explora la publicación "${post.title}" en PeigDev. Lee y comparte opiniones, comentarios y discusiones sobre este tema de entretenimiento. Únete a nuestra comunidad y participa en conversaciones relevantes.`,
    },
  ];
};

export default function SinglePost() {
  const { post } = useLoaderData();

  return (
    <>
      <Post post={post} enabled={false}/>
    </>
  );
}
