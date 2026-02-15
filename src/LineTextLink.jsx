import React from 'react'
import { useNavigate } from 'react-router-dom';

const LineTextLink = ({ text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); // push to new URL
    // navigate('/new-url', { replace: true }); // replaces current entry in history
  };

  return (
    <p className="line-text" onClick={handleClick}>{text}</p>
  )
}

export default LineTextLink;
