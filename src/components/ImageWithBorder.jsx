import React from "react";


function ImageWithBorder({ src}) {
    return (
      <img
        loading="lazy"
        src={src}
        className="image-with-border"
      />
    );
  }