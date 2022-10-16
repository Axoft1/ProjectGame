import { CosmetikItem } from "./CosmetikItem";

function CosmetikList({ catalog = [], typeId ='' }) {

  const filterCatalog = catalog.filter((el) => el.type.id === typeId)
  
  return (
    <div className="conteiner">
      <div className="row row-cols-2 row-cols-md-2 g-0 mt-1">
       
          {filterCatalog.map((el) => (
            <CosmetikItem key={el.id} {...el} />
          ))}
     
      </div>
    </div>
  );
}

export { CosmetikList };
