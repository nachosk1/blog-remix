import { Link } from "@remix-run/react";
import { formatDate } from "utils/formatDate";

export default function Post({ post, enabled = true }) {
  const { id, title, body, createdAt } = post;

  return (
    <section className="section-post">
      <p className="date">{formatDate(createdAt)}</p>
      <h3>{title}</h3>
      <p className="body">{body}</p>
      {enabled && (
        <div className="button-more">
          <Link to={`/posts/${id}`} >
            Ver más
          </Link>
        </div>
      )}
    </section>
  );
}
