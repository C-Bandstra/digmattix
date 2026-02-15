import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from './LayoutContext';
import Footer from './Footer';
import DropdownHeader from './DropdownHeader';
import "./CategoryPage.css";
import { useParams } from 'react-router-dom';
import UtilityHeader from './UtilityHeader';

const sweatshirtsData = [
  { id: 1, name: "Classic Crewneck Sweatshirt", price: "39.00", imageUrl: "" },
  { id: 2, name: "Hooded Sweatshirt", price: "48.00", imageUrl: "" },
  { id: 3, name: "Vintage Logo Sweatshirt", price: "45.00", imageUrl: "" },
  { id: 4, name: "Heavy Duty Sweatshirt", price: "55.00", imageUrl: "" },
  { id: 5, name: "Classic Crewneck Sweatshirt", price: "39.00", imageUrl: "" },
  { id: 6, name: "Hooded Sweatshirt", price: "48.00", imageUrl: "" },
];

const bandanasData = [
  { id: 1, name: "Paisley Bandana", price: "10.00", imageUrl: "" },
  { id: 2, name: "Floral Print Bandana", price: "12.00", imageUrl: "" },
  { id: 3, name: "Camo Bandana", price: "14.00", imageUrl: "" },
  { id: 4, name: "Solid Color Bandana", price: "8.00", imageUrl: "" },
  { id: 5, name: "Paisley Bandana", price: "10.00", imageUrl: "" },
  { id: 6, name: "Floral Print Bandana", price: "12.00", imageUrl: "" },
];

const accessoriesData = [
  { id: 1, name: "Baseball Cap", price: "18.00", imageUrl: "" },
  { id: 2, name: "Leather Boots", price: "129.00", imageUrl: "" },
  { id: 3, name: "Sunglasses", price: "24.00", imageUrl: "" },
  { id: 4, name: "Watch", price: "79.00", imageUrl: "" },
  { id: 5, name: "Baseball Cap", price: "18.00", imageUrl: "" },
  { id: 6, name: "Leather Boots", price: "129.00", imageUrl: "" },
];

const teesData = [
  { id: 1, name: "Basic White Tee", price: "15.00", imageUrl: "" },
  { id: 2, name: "V-Neck Tee", price: "20.00", imageUrl: "" },
  { id: 3, name: "Graphic Tee", price: "22.00", imageUrl: "" },
  { id: 4, name: "Striped Tee", price: "18.00", imageUrl: "" },
  { id: 5, name: "Basic White Tee", price: "15.00", imageUrl: "" },
  { id: 6, name: "V-Neck Tee", price: "20.00", imageUrl: "" },
];



const CategoryPage = () => {
  const navigate = useNavigate()
  const { category } = useParams();
  const { setHeader, setFooter } = useLayout();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setHeader();
    setFooter(<Footer />); // populate the mock data
  }, [setHeader, setFooter]);

  useEffect(() => {
    // Set the products based on the category
    switch (category) {
      case 'tees':
        setProducts(teesData);
        break;
      case 'sweatshirts':
        setProducts(sweatshirtsData);
        break;
      case 'bandanas':
        setProducts(bandanasData);
        break;
      case 'accessories':
        setProducts(accessoriesData);
        break;
      default:
        setProducts([]);
        break;
    }
  }, [category]);

  return (
    <div>
      <DropdownHeader title={category} />
      <div className="grid-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid-item"
            onClick={() => navigate(`/shop/${category}/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={product.imageUrl || "/placeholder.png"} alt={product.name} className="grid-item-image" />
            <div className="grid-item-name">{product.name}</div>
            <div className="grid-item-price">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;