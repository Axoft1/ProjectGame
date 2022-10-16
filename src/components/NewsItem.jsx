
function NewsItem(props) {
  const { body, title, image } = props;
  return (
    <>
      <h1>{title}</h1>
      <img className="d-block w-100" src={image} alt={title} />
      <p>{body}</p>
    </>
  );
}

export { NewsItem };
