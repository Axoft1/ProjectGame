import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ShopItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayType,
    displayAssets,
    price,
    addToBasket = Function.prototype,
  } = props;

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={displayAssets[0].full_background}
        alt={displayName}
      />
      <Card.Body>
        <Card.Title>{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
        <Card.Text>{displayType}</Card.Text>
      </Card.Body>

      <Button onClick={() => addToBasket({mainId,price,displayName,displayAssets})} variant="primary">
        Купить
      </Button>
    </Card>
  );
}

export { ShopItem };
