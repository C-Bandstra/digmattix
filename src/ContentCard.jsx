import "./ContentCard.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContentCard = ({ path, color }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(path); // push to new URL
    // navigate('/new-url', { replace: true }); // replaces current entry in history
  };
  // console.log(path)
  return (
    <section onClick={handleClick} className="content-card" style={{borderColor: color, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <img src="/placeholder.png" style={{width: "100px", height: "100px"}} />
    </section>
  )
}

export default ContentCard;
