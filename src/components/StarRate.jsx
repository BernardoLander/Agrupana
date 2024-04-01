import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate({ rating }) {


  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <FaStar
                color={currentRate <= rating ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </>
  );
}