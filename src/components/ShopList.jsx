import { ShopItem } from "./ShopItem";

function ShopList({ catalog = [] , addToBasket=Function.prototype}) {
  return (
    <div className="conteiner">
      <div className="row row-cols-2 row-cols-md-2 g-0 mt-1">
       
          {catalog.map((el) => (
            <ShopItem key={el.mainId} {...el} addToBasket={addToBasket} />
          ))}
     
      </div>
    </div>
  );
}

export { ShopList };
