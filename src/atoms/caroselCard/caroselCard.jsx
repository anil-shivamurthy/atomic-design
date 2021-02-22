import React from "react";
import small from "../../assets/image/smallImage.jpg";
import Title from "../title/title";
import wonder from "../../assets/image/wonder.jpg";
import never from "../../assets/image/neverending.jpg";
import machinist from "../../assets/image/machinist.jpg";
import million from "../../assets/image/million.jpg";
import solider from "../../assets/image/soliders.png";
import "./caroselCard.scss";

const CaroselCard = ({title}) => {
  return (
    <div className="smallCaroselContainer">
    <div className="rowCarosel">
      <div className="column">
        <div className="card">
          <img src={small} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={wonder} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={never} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={machinist} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={solider} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={million} alt="columnImage" className="cardCaroselImage"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CaroselCard;
