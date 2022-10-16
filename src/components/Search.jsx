import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter") {
        handleSubmit()
    }
  };
  const handleSubmit = () => {
    cb(value)
  };

  return (
    <div>
              <InputGroup
        className="mb-3"
      >
        <Form.Control
           type="search"
           placeholder="поиск по каталогу"
           onKeyDown={handleKey}
           onChange={(e) => setValue(e.target.value) }
           value={value}
        />
        <Button variant="outline-secondary" id="button-addon2"
        onClick={handleSubmit}>
          Найти
        </Button>
      </InputGroup>
    </div>
  );
}

export { Search };
