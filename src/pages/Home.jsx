import { useEffect, useState } from "react";
import { getAllNews } from "../api";
import { Preloader } from "../components/Preloader";
import { NewsList } from "../components/NewsList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Home() {
  const [ catalog, setCatalog]  = useState([]);

  useEffect(() => {
    getAllNews().then(data => {

      setCatalog(data.news);
 
    });
  }, []);

  return (
    <Container >
      <Row>
      <h1 className="heading">Новости</h1>
      </Row>
      <Row>
      {!catalog.length ? (<Preloader />) : (<NewsList catalog={catalog} />)}
      </Row>
    </Container>
  );
}

export { Home };
