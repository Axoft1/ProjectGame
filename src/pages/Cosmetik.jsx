import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCosmetik } from "../api";
import { Preloader } from "../components/Preloader";
import { CosmetikList } from "../components/CosmetikList";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Search } from "../components/Search";

function Cosmetik() {
  const [catalog, setCatalog] = useState([]);
  const [typeId, setTypeId] = useState("spray");
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const getTipe = (id) => {
    setTypeId(id);
  };

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCosmetik().then((data) => {
      setCatalog(data.items);
      setFilteredCatalog(
        search
          ? data.items.filter((item) =>
              item.name
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.items
      );
    });
  }, [search]);

  return (

    <Container style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="heading">Косметика</h1>
      <Search cb={handleSearch} />
      <Row className="justify-content-md-center">
        <>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("spray")}
            >
              Аэрозоли
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("pickaxe")}
            >
              Кирки
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("wrap")}
            >
              Обертки
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("bannertoken")}
            >
              Эмблемы
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("bundle")}
            >
              Комплекты
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("glider")}
            >
              Планеры
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("cosmeticvariant")}
            >
              Доп. стиль
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("backpack")}
            >
              Сумка
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => getTipe("emoji")}
            >
              Эмодзи
            </Button>
          </Col>
        </>
      </Row>
      <div>
        {!catalog.length ? (
          <Preloader />
        ) : (
          <CosmetikList catalog={filteredCatalog} typeId={typeId} />
        )}
      </div>
    </Container>
  );
}

export { Cosmetik };
