import React from "react";
import StarRate from "./StarRate";


const RankingCard = ({ group }) => {
  const { rating } = group;

  return (
    <div className="ranking-card">
      <div className="ranking-title">RANKING</div>
      <StarRate className ="ranking-star" rating={rating} />
    </div>
  );
};

export default RankingCard;