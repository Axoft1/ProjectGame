import Spinner from 'react-bootstrap/Spinner';

function Preloader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export  {Preloader};