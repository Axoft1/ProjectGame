import { NewsItem } from "./NewsItem";

import { Carousel } from "react-bootstrap";

function NewsList({ catalog = [] }) {
  return (
    <div className="conteiner">
      <div className="row row-cols-1  g-4 mt-1">
        <Carousel>
          {catalog.map((el) => (
            <Carousel.Item key={el.id}>
              <NewsItem {...el} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export { NewsList };
