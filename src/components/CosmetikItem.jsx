import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CosmetikItem(props) {
  const { name, description, images, id} = props;
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Link to={`/cosmetik/${id}`} className='btn'>
      <Card.Img
        variant="top"
        src={images.icon}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>

      </Card.Body>

</Link>
    
    </Card>
  );
}

export { CosmetikItem };
