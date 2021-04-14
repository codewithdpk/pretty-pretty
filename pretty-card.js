import React from "react";
import "./styles.css";

const PrettyCard = ({ style, onClick, children }) => {
  return (
    <div className="pretty-card" style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default PrettyCard;
