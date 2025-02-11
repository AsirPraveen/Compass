import { Link, useLocation } from "react-router-dom";
import "/src/components/Breadcrumb/breadcrumb.css"

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="px-3 pt-1">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
          <a>
            <img className="image" src="/src/components/Breadcrumb/home.png"/>
          </a>
          </Link>
        </li>
        {
        pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={index} className="breadcrumb-item active">
              {value}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={pathTo}>{value}</Link>
            </li>
          );
        })}
        <img className="cart" src="/src/components/Breadcrumb/shopping-cart.png"/>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
