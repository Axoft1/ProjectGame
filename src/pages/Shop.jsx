import { useEffect, useState } from "react";
import { getAllShop } from "../api";
import { Preloader } from "../components/Preloader";
import { ShopList } from "../components/ShopList";
import { BasketList } from "../components/BasketList";
import {Container} from "react-bootstrap";
import { InfoAlert } from "../components/Alert";
import { Cart } from "../components/Cart";

function Shop() {
  const [catalog, setCatalog] = useState([]);
  const [alertName, setAlertName] = useState("");
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    console.log(item);
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName)
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId)
    setOrder(newOrder)
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity < 0 ? 0 : newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(() => {
    getAllShop().then((data) => {
      setCatalog(data.shop);
    });
    
  }, []);

  return (
    <Container>
    
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      <h1 className="heading">Магазин</h1>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <ShopList catalog={catalog} addToBasket={addToBasket} />
      )}
      {alertName && <InfoAlert name={alertName} closeAlert={closeAlert} />}
      {isBasketShow ? (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      ) : null}
    </Container>
  );
}

export { Shop };
