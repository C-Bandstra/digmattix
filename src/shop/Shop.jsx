import { Outlet, useParams, useLocation } from 'react-router-dom';
import "./Shop.css"
const Shop = () => {

  return (
    <div className="shop">
      {/* Common shop layout*/}
      
      {/* Here the child route components will render */}
      <Outlet />
    </div>
  );
};

export default Shop;
