export default function Picture({ url, alt, style, width, height }) {
  return (
    <>
      <img
        alt={alt || "imagen"}
        src={url}
        className={style}
        width={width}
        height={height}
      />
      <picture>
        <source
          type="image/webp"
          srcSet={url.replace(/\.(png|jpg|jpeg)$/i, ".webp")}
        />
        <source
          type="image/avif"
          srcSet={url.replace(/\.(png|jpg|jpeg)$/i, ".avif")}
        />
      </picture>
    </>
  );
}
