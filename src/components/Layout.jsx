import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";

function Layout() {
  return (
    <>
      <Header>
        <Link to="/">HomeL</Link>
        <Link to="/About">AboutL</Link>
        <Link to="/CShop">Shop</Link>
      </Header>
      <Outlet />
    </>
  );
}

export { Layout };
