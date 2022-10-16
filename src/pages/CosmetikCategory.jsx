import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { getItemId } from "../api";
import{ Button, Container, Row } from "react-bootstrap";


function CosmetikCategory() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getItemId(id).then((data) => {
      setItem(data.item);
    });
  }, [id]);
  return (
    <Container>
    {
      !item.id ? <Preloader/> :
      
      (<di >
    

      
    
      <div>
      <Button style={{position:'absolute', right: 0}} variant="primary" onClick={() => navigate(-1)}>
        Назад
      </Button>
        <h1>{item.name}</h1>
        <Row>
          <img src={item.images.full_background} alt={item.name} />
        </Row>
        <p>{item.description}</p>
      </div>
      
      </di>)
    }
    </Container>
  );
}

export { CosmetikCategory };
