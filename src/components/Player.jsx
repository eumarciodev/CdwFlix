export default function Player({ id }) {
  return (
    <iframe
      src={`https://embedplayapi.top/embed/movie/${id}`}
      width="100%"
      height="700"
      allowFullScreen
      frameBorder="0"
      title="Player"
    />
  );
}
