import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./DropdownHeader.css";

const options = ["tees", "sweatshirts", "bandanas", "accessories"];

export default function DropdownHeader({ title }) {
  const [selected, setSelected] = useState(title);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const categoryFromURL = pathParts[2]?.toUpperCase();
    if (categoryFromURL && options.includes(categoryFromURL)) {
      setSelected(categoryFromURL);
    }
  }, [location.pathname]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    navigate(`/shop/${option.toLowerCase()}`);
  };

  return (
    <div>
      <div
        className="dropdown-container"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="dropdown-selected">{selected}</div>
        <span className="dropdown-icon">▼</span>
      </div>

      {open && (
        <div className="dropdown-options">
          {options
            .filter((option) => option !== selected.toLowerCase()) // filter out selected option
            .map((option) => (
              <div
                key={option}
                className="dropdown-option"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
